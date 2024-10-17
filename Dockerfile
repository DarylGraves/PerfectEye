# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# copy only the build directory contents
COPY dist ./dist

# set working directory to build directory
WORKDIR /app/dist

EXPOSE 3000

# start app using serve
CMD ["npx", "serve", "-s", "."]
