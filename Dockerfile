# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# install serve globally
RUN npm install -g serve

# copy only the build directory contents
COPY build ./build

# set working directory to build directory
WORKDIR /app/build

# start app using serve
CMD ["serve", "-s", "."]
