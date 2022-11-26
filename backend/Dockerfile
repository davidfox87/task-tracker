FROM keymetrics/pm2:14-alpine
# RUN addgroup backend && adduser -S -G backend backend
# USER backend
WORKDIR /backend
COPY package.json ./
COPY yarn.lock ./
RUN yarn
RUN yarn global add rootpath
COPY . .
EXPOSE 8080
CMD ["pm2-runtime", "start", "server.js"]