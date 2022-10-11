FROM node:14.17.5-alpine3.13 as builder
ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package*.json /app/

COPY yarn.lock /app/
RUN yarn install --production
# Copy app files
COPY ./ /app/
# Build the app
RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html


# Add your nginx.conf and ssl certs
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/config/key.pem /etc/ssl/private/
COPY ./nginx/config/cert.pem /etc/ssl/certs/

# Expose port
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
