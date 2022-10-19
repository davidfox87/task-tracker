FROM node:14.17.5-alpine3.13 as builder
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

# Bundle static assets with nginx
FROM nginx:stable-alpine

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf and ssl certs
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# tls cert and key will get mounted into /etc/nginx/ssl directory by kubernetes volumemount
# COPY ./nginx/config/key.pem /etc/nginx/ssl
# COPY ./nginx/config/cert.pem /etc/nginx/ssl

# Expose port
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
