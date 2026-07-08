# Frontend
FROM node:20-alpine as frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
ARG VITE_BASE
ENV VITE_BASE=$VITE_BASE
RUN npm run build

# Production
FROM nginxinc/nginx-unprivileged:alpine as production-build
COPY --from=frontend-build /app/frontend/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]