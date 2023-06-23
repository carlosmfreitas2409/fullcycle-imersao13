FROM node:18 As development

RUN apt-get update && apt-get install -y openssl

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./

RUN yarn install --frozen-lockfile

COPY --chown=node:node . .

RUN yarn prisma generate

EXPOSE 3000

CMD ["yarn", "run", "start:dev"]