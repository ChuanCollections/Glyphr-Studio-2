
/**
    History
    An object that stores a Glyphr Studio Project
    state, to enable undo.  History is saved per
    page... essentially, each page gets it's own
    undo queue.
**/


    function History(pn) {
        this.queue = [];
        this.parentname = pn;
        this.currstate = clone(_GP[this.parentname]);
        this.initialstate = clone(_GP[this.parentname]);
        this.initialdate = new Date().getTime();
    }

    History.prototype.put = function(des) {
        // debug('\n History.put - START');

        this.queue.push({
            'name': getSelectedWorkItemName(),
            'id': getSelectedWorkItemID(),
            'description': des,
            'date': new Date().getTime(),
            'state': clone(this.currstate),
        });

        this.currstate = clone(_GP[this.parentname]);

        setProjectAsUnsaved();
        markSelectedWorkItemAsChanged();

        // debug(' History.put - END\n');
    };

    History.prototype.pull = function() {
        // debug('\n History.pull - START');
        // debug('\t queue.length ' + this.queue.length);

        let currentID = getSelectedWorkItemID();
        let nextID = this.queue[this.queue.length-1].id;

        if (currentID === nextID) {
            let top = this.queue.length? this.queue.pop().state : this.initialstate;

            if (this.parentname === 'kerning') hydrateGlyphrObjectList(HKern, clone(top), _GP[kerning]);
            else hydrateGlyphrObjectList(Glyph, clone(top), _GP[this.parentname]);

            this.currstate = clone(top);
        } else {
            // If the next undo item is a different glyph,
            // navigate to that glyph before undo-ing
            showToast('Navigated without undo-ing');
            selectGlyph(nextID);
        }


        if (_UI.currentPage === 'import svg') {
            update_NavPanels();
        } else if (_UI.currentPage === 'components') {
            if (!_GP.components[_UI.selectedComponent]) {
                _UI.selectedComponent = getFirstID(_GP.components);
            }
        } else if (_UI.currentPage === 'ligatures') {
            if (!_GP.ligatures[_UI.selectedLigature]) {
                _UI.selectedLigature = getFirstID(_GP.ligatures);
            }
        }

        _UI.multiSelect.shapes.clear();
        _UI.multiSelect.points.clear();
        // update_NavPanels();
        redraw({calledBy: 'history_pull', redrawPanels: true});


        // debug('\t after redraw');

        let empty = true;
        for (let q in _UI.history) {
            if (_UI.history.hasOwnProperty(q) && _UI.history[q].queue.length) {
                    empty = false;
                    break;
            }
        }
        if (empty) setProjectAsSaved();


        // debug(' History.pull - END\n');
    };

    // Global Accessor Functions
    function history_put(dsc) {
        if (onCanvasEditPage()) {
            let queue = _UI.currentPage === 'import svg'? 'glyph edit' : _UI.currentPage;
            _UI.history[queue].put(dsc);
        }
    }

    function history_pull() {
        if (onCanvasEditPage()) {
            closeDialog();
            closeNotation();
            _UI.history[_UI.currentPage].pull();
        }
    }

    function history_length() {
        if (onCanvasEditPage()) {
            return _UI.history[_UI.currentPage].queue.length || 0;
        }

        return 0;
    }