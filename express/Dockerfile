FROM node:10-alpine as builder

WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --production

FROM node:10-alpine

WORKDIR /app
COPY . /app
COPY --from=builder /app/node_modules /app/node_modules

ENTRYPOINT ["npm", "start"]
