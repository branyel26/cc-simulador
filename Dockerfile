# Usar nginx para servir archivos estáticos
FROM nginx:alpine

# Metadata
LABEL maintainer="branyel26"
LABEL description="CC Simulador - ISC2 Certified in Cybersecurity Practice Exam"
LABEL version="1.0"

# Copiar archivos del simulador
COPY index.html /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY app.css /usr/share/nginx/html/
COPY questions1.js /usr/share/nginx/html/
COPY questions2.js /usr/share/nginx/html/
COPY questions3.js /usr/share/nginx/html/
COPY questions4.js /usr/share/nginx/html/
COPY questions5.js /usr/share/nginx/html/
COPY questions6.js /usr/share/nginx/html/

# Configuración nginx para SPA
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Puerto
EXPOSE 80

# Comando por defecto
CMD ["nginx", "-g", "daemon off;"]
