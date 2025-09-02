# Configuración Docker para Mi Página Next.js

Este proyecto incluye una configuración completa de Docker para ejecutar la aplicación Next.js en contenedores.

## 📋 Prerrequisitos

- Docker instalado en tu sistema
- Docker Compose (incluido con Docker Desktop)

## 🚀 Inicio Rápido

### Opción 1: Usando Docker Compose (Recomendado)

```bash
# Construir y ejecutar en modo producción
docker-compose up -d --build

# Ver logs
docker-compose logs -f

# Detener
docker-compose down
```

### Opción 2: Usando Docker directamente

```bash
# Construir la imagen
docker build -t mi-pagina-nextjs .

# Ejecutar el contenedor
docker run -d --name mi-pagina-nextjs -p 3000:80 mi-pagina-nextjs

# Detener el contenedor
docker stop mi-pagina-nextjs
docker rm mi-pagina-nextjs
```

### Opción 3: Usando el script de ayuda (Linux/Mac)

```bash
# Hacer el script ejecutable
chmod +x docker-scripts.sh

# Ver comandos disponibles
./docker-scripts.sh help

# Construir y ejecutar
./docker-scripts.sh build
./docker-scripts.sh run

# Modo producción con docker-compose
./docker-scripts.sh prod
```

## 📁 Archivos de Configuración

### `Dockerfile`
- Configuración multi-stage para optimizar el tamaño de la imagen
- Usa Node.js 18 Alpine para el build
- Usa Nginx Alpine para servir los archivos estáticos
- Optimizado para aplicaciones Next.js con `output: 'export'`

### `nginx.conf`
- Configuración personalizada de Nginx
- Soporte para SPA (Single Page Application)
- Compresión gzip habilitada
- Headers de seguridad configurados
- Cache optimizado para archivos estáticos

### `docker-compose.yml`
- Configuración simplificada para desarrollo y producción
- Puerto 3000 mapeado al puerto 80 del contenedor
- Red personalizada para aislamiento
- Reinicio automático configurado

### `.dockerignore`
- Excluye archivos innecesarios del contexto de build
- Optimiza el tiempo de construcción
- Reduce el tamaño de la imagen final

## 🔧 Comandos Útiles

### Desarrollo
```bash
# Construir y ejecutar con logs en tiempo real
docker-compose up --build

# Ejecutar en segundo plano
docker-compose up -d --build
```

### Producción
```bash
# Construir para producción
docker build -t mi-pagina-nextjs:latest .

# Ejecutar en producción
docker run -d \
  --name mi-pagina-nextjs \
  --restart unless-stopped \
  -p 3000:80 \
  mi-pagina-nextjs:latest
```

### Mantenimiento
```bash
# Ver logs del contenedor
docker logs -f mi-pagina-nextjs

# Acceder al contenedor
docker exec -it mi-pagina-nextjs sh

# Limpiar imágenes no utilizadas
docker system prune -f

# Limpiar todo (contenedores, imágenes, volúmenes)
docker system prune -a --volumes
```

## 🌐 Acceso a la Aplicación

Una vez que el contenedor esté ejecutándose, puedes acceder a la aplicación en:

- **URL Local**: http://localhost:3000
- **Puerto del Contenedor**: 80 (mapeado al 3000 del host)

## 🐛 Solución de Problemas

### Error de Puerto en Uso
```bash
# Verificar qué está usando el puerto 3000
netstat -tulpn | grep :3000

# Cambiar el puerto en docker-compose.yml
ports:
  - "3001:80"  # Cambiar 3000 por 3001
```

### Problemas de Build
```bash
# Limpiar cache de Docker
docker builder prune

# Construir sin cache
docker build --no-cache -t mi-pagina-nextjs .
```

### Problemas de Permisos (Linux)
```bash
# Asegurar permisos correctos
sudo chown -R $USER:$USER .
chmod +x docker-scripts.sh
```

## 📊 Optimizaciones Incluidas

1. **Multi-stage Build**: Reduce el tamaño final de la imagen
2. **Nginx Optimizado**: Configuración específica para aplicaciones SPA
3. **Compresión Gzip**: Reduce el tamaño de transferencia
4. **Cache Headers**: Optimiza la carga de recursos estáticos
5. **Security Headers**: Mejora la seguridad de la aplicación

## 🔄 Actualización de la Aplicación

```bash
# Detener el contenedor actual
docker-compose down

# Reconstruir con los últimos cambios
docker-compose up --build -d
```

## 📝 Notas Importantes

- La aplicación se construye como archivos estáticos debido a `output: 'export'` en `next.config.js`
- Nginx sirve los archivos desde `/usr/share/nginx/html`
- Los logs de Nginx están disponibles dentro del contenedor en `/var/log/nginx/`
- El contenedor se reinicia automáticamente a menos que se detenga manualmente

## 🤝 Contribución

Si encuentras algún problema o tienes sugerencias para mejorar la configuración de Docker, no dudes en crear un issue o pull request.