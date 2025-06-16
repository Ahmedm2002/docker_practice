FROM node

RUN mkdir -p testApp

COPY . /testApp

CMD [ "node", "/testApp/src/index.js" ]