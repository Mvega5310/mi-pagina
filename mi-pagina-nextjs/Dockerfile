# Dockerfile simplificado para Next.js con archivos estáticos pre-generados
FROM nginx:alpine AS runner

# Crear directorio de trabajo
WORKDIR /usr/share/nginx/html

# Limpiar el directorio por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos estáticos ya generados
COPY out/ .

# Copiar la configuración personalizada de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer puerto 80
EXPOSE 80

# Variables de entorno
ENV PORT=80

# Comando para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]