# task-tracker
Project that demos MERN (mongodb, Express REST API, React Frontend, Nodejs server) full stack 


# Build and push frontend to dockerhub
```
cd frontend
docker-compose -f docker-compose.prod.yaml build

docker push foxy7887/task-tracker-app:tagname
```




openssl req -x509 -nodes -days 365 -subj "/C=CA/ST=QC/O=Company, Inc./CN=staging.mlops-playground.com" -addext "subjectAltName=DNS:staging.mlops-playground.com" -newkey rsa:2048 -keyout etc/ssl/private/nginx-selfsigned.key -out etc/ssl/certs/nginx-selfsigned.crt;