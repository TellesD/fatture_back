FROM node:10-alpine

WORKDIR /Users/Victo/fatture_back
COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 3333

CMD ["yarn", "start"]