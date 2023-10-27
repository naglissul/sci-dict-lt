FROM node:alpine
WORKDIR /server
COPY . .
RUN npm install
EXPOSE 5000
CMD ["npm", "run", "start-be"]