FROM node:22-alpine

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install
RUN npx prisma generate 

COPY . .
RUN npm run build

# run is used when the image is not running
EXPOSE 3000

CMD [ "node" ,"dist/index.js"]
# cmd is used to execute after the container is started
