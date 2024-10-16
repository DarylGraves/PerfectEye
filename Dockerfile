# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# install serve globally
RUN npm install -g serve

# copy only the build directory contents
COPY dist ./dist

# set working directory to build directory
WORKDIR /app/dist

# start app using serve
CMD ["serve", "-s", "."]
