import { insertAfter, makeElement } from '../../common/dom.js';
import { closeAllNavMenus } from '../../project_editor/navigator.js';
import { closeAllOptionChoosers, makeContextMenu } from '../dialogs/dialogs.js';
import style from './option-chooser.css?inline';

/**
 * An options group / dropdown control
 * HTML like this:
 *
 * <option-chooser selected-id="first[123, 456]" selected-name="first" selected-prefix="Category:">
 * 		<option note="[123, 456]">first</option>
 * 		<option note="[123, 456]">second</option>
 * 		<option note="[123, 456]">3rd</option>
 * </option-chooser>
 */
export class OptionChooser extends HTMLElement {
	/**
	 * Create an OptionChooser
	 */
	constructor() {
		// log(`OptionChooser.constructor`, 'start');
		super();

		this.disabled = false;

		this.wrapper = makeElement({
			className: 'wrapper',
			tabIndex: !this.disabled,
		});
		// @ts-expect-error 'property does exist'
		this.wrapper.elementRoot = this;

		// this.options = makeElement({ tag: 'slot', className: 'options' });
		// this.selectionDisplay.innerHTML = displayText;

		this.selectionDisplay = makeElement({
			className: 'selection-display',
			attributes: { tabIndex: -1 },
			innerHTML: this.getDisplayName(),
		});
		// @ts-expect-error 'property does exist'
		this.selectionDisplay.elementRoot = this;

		this.downArrow = makeElement({
			className: 'downArrow',
			content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="14.5 8.5 5.5 8.5 10 13 14.5 8.5"/></svg>`,
			attributes: { tabIndex: -1 },
		});
		// @ts-expect-error 'property does exist'
		this.downArrow.elementRoot = this;

		// Put it all together
		let shadow = this.attachShadow({ mode: 'open' });
		let styles = makeElement({ tag: 'style', innerHTML: style });
		shadow.appendChild(styles);

		this.wrapper.appendChild(this.selectionDisplay);
		this.wrapper.appendChild(this.downArrow);

		if (!this.disabled) this.addAllEventListeners();
		shadow.appendChild(this.wrapper);

		// log(this);
		// log(`OptionChooser.constructor`, 'end');
	}

	/**
	 * Specify which attributes are observed and trigger attributeChangedCallback
	 */
	static get observedAttributes() {
		return ['disabled', 'selected-id', 'selected-name', 'deployed'];
	}

	/**
	 * Initialize the component once it's being used
	 */
	connectedCallback() {
		// log(`OptionChooser.connectedCallback`, 'start');
		if (this.disabled) this.wrapper.setAttribute('disabled', '');
		// log(`OptionChooser.connectedCallback`, 'end');
	}

	/**
	 * Listens for attribute changes on this element
	 * @param {String} attributeName - which attribute was changed
	 * @param {String} oldValue - value before the change
	 * @param {String} newValue - value after the change
	 */
	attributeChangedCallback(attributeName, oldValue, newValue) {
		// log(`OptionChooser.attributeChangedCallback`, 'start');
		// log(`Attribute ${attributeName} was ${oldValue}, is now ${newValue}`);

		if (attributeName === 'disabled') {
			if (newValue === '') {
				// disabled
				this.wrapper.setAttribute('disabled', '');
				this.wrapper.removeAttribute('tabIndex');
				this.removeAllEventListeners();
			} else if (oldValue === '') {
				// enabled
				this.wrapper.removeAttribute('disabled');
				this.wrapper.setAttribute('tabIndex', '0');
				this.addAllEventListeners();
			}
		}
		if (attributeName === 'deployed') {
			if (newValue === '') {
				// deployed
				this.wrapper.setAttribute('deployed', '');
			} else if (oldValue === '') {
				// closed
				this.wrapper.removeAttribute('deployed');
			}
		}

		if (attributeName === 'selected-id') {
			this.dispatchEvent(new Event('change'));
		}

		if (attributeName === 'selected-name') {
			this.selectionDisplay.innerHTML = this.getDisplayName();
		}

		// log(`OptionChooser.attributeChangedCallback`, 'end');
	}

	/**
	 * Figures out the name to display in the entry point
	 * @returns {String}
	 */
	getDisplayName() {
		let displayText = this.getAttribute('selected-name');
		if (!displayText) return '';

		let prefix = this.getAttribute('selected-prefix');
		// log(`prefix: ${prefix}`);

		if (prefix) displayText = `<span class="prefix">${prefix}</span> ${displayText}`;
		// log(`displayText: ${displayText}`);
		displayText = displayText.replace(/ /gi, '&nbsp;');
		return displayText;
	}

	/**
	 * Shows the dropdown part of the control
	 */
	showOptions() {
		// log(`OptionsChooser.showOptions`, 'start');

		const currentSelection = this.getAttribute('selected-id');
		let optionRows = [];
		[...this.children].forEach((/** @type {HTMLElement} */ child) => {
			let tag = child.tagName.toLowerCase();
			if (tag === 'option') {
				let note = child.getAttribute('note') || '';
				let selectionID = `${child.innerText}${note ? ` ${note}` : ''}`;
				if (child.getAttribute('selection-id')) selectionID = child.getAttribute('selection-id');
				optionRows.push({
					name: child.innerHTML,
					icon: currentSelection === selectionID ? 'selected' : 'notSelected',
					id: selectionID,
					note: note,
					onClick: () => {
						this.setAttribute('selected-id', selectionID);
						this.setAttribute('selected-name', child.innerText.trim());
						child.dispatchEvent(new Event('click'));
					},
				});
			} else if (tag === 'hr') {
				optionRows.push({ name: 'hr' });
			}
		});

		let entryPointRect = this.getBoundingClientRect();
		// Something strange happens to placement if the dropdown is in a nav element
		let navRect = document.querySelector('#nav-dropdown-chooser')?.getBoundingClientRect();

		let left = entryPointRect.x - (navRect ? navRect.x : 0);
		let top = entryPointRect.y + entryPointRect.height - (navRect ? navRect.y : 0);
		left = Math.max(left, 0);
		top = Math.max(top, 0);
		let parentHeight = navRect ? navRect.height : window.innerHeight;
		let maxHeight = parentHeight - top - 10;

		// log(`showing options at ${left} / ${top}`);
		// log(`maxHeight: ${maxHeight}`);
		// log(`parentHeight: ${parentHeight}`);

		closeAllOptionChoosers();
		closeAllNavMenus(true);
		this.setAttribute('deployed', '');
		insertAfter(
			this,
			makeContextMenu(optionRows, left, top - 1, entryPointRect.width, maxHeight, true)
		);

		// log(`OptionsChooser.showOptions`, 'end');
	}

	/**
	 * Add all event listeners to elements
	 */
	addAllEventListeners() {
		// log('addAllEventListeners');
		this.addEventListener('click', this.showOptions);
		this.addEventListener('keydown', this.keyboardPress);
	}

	/**
	 * Add all event listeners to elements
	 */
	removeAllEventListeners() {
		// log('removeAllEventListeners');
		this.removeEventListener('click', this.showOptions);
		this.removeEventListener('keydown', this.keyboardPress);
	}

	/**
	 * Handle keypress event
	 * @param {Object} ev - event
	 */
	keyboardPress(ev) {
		switch (ev.keyCode) {
			case 40: // d-pad down
			case 98: // ten key down
			case 109: // ten key -
				this.showOptions();
				break;

			default:
				break;
		}
	}
}
