FROM node:20.9.0-alpine AS build-stage

WORKDIR /app

COPY package.json yarn.lock ./
COPY tsconfig.json ./

RUN yarn

COPY . .

RUN yarn build

ARG PORT=3000
ENV NODE_ENV production

RUN yarn --production --frozen-lockfile

EXPOSE ${PORT}

CMD ["yarn", "start"]
