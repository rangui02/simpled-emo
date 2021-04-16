FROM node

COPY ./ /www

WORKDIR /www

RUN yarn install --registry https://registry.npm.taobao.org

ENTRYPOINT yarn serve
