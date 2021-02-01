
FROM node:13-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent
RUN npm run build
RUN npm install serve --global

EXPOSE 5000

CMD ["serve", "-s", "build"]