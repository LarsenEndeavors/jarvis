FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Most SPA-mode builds land in build/client; if yours is different, adjust this one line.
COPY --from=build /app/build/client /usr/share/nginx/html
EXPOSE 80
