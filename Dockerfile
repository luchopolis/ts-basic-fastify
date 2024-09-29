FROM node:20.9.0-alpine AS build-stage

WORKDIR /usr

COPY package.json yarn.lock ./
COPY tsconfig.json ./

RUN yarn

COPY . .

RUN yarn build

FROM node:20.9.0-alpine AS production-stage

ARG PORT=3000
ENV NODE_ENV production

WORKDIR /srv/www/ts-project

COPY package.json yarn.lock ./
RUN yarn --production --frozen-lockfile

COPY --from=build-stage /usr/dist .

EXPOSE ${PORT}

CMD ["yarn", "start"]
