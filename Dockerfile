FROM node:latest

RUN makdir /root/app
WORKDIR /root/app
#COPY package*.json ./
COPY . /root/app/
RUN npm install -g serve
#RUN npm run build
EXPOSE 3000
CMD serve -s build