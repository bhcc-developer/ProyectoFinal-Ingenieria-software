FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM mhart/alpine-node
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]
# docker build -t react-docker-app .
# docker run -it -p 8080:80 react-docker-app