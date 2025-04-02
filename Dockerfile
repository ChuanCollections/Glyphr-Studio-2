# Using pnpm
FROM node:18

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "run", "dev", "--host", "0.0.0.0"]

# ============================================================================
# Using npm
# FROM node:18
#
# WORKDIR /app
#
# COPY package.json package-lock.json ./
#
# RUN npm install
#
# COPY . .
#
# EXPOSE 3000
#
# CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]