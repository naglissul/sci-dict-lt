FROM node:alpine
WORKDIR /
COPY . .
RUN npm install
EXPOSE 5000
CMD ["node", "src/routing.js"]