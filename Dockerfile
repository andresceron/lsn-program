### STAGE 1: Build angular app ###
FROM node:22-alpine AS build

# Create app directory
WORKDIR /app

COPY package.json package-lock.json angular.json nginx.conf

COPY ./nginx.conf /nginx.conf

RUN npm ci

COPY . .

# Run the command to build application
RUN npm run build

### STAGE 2: Run the build ###
FROM nginx:1.25.3-alpine-slim

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

COPY --from=build /app/dist/lsn-program/browser /usr/share/nginx/html
COPY --from=build /nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
