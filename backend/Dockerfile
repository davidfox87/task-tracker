FROM keymetrics/pm2:14-alpine
# RUN addgroup backend && adduser -S -G backend backend
# USER backend
WORKDIR /backend
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]