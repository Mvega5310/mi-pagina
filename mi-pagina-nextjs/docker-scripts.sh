#!/bin/bash

# Script para facilitar el manejo de Docker para el proyecto Next.js

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar ayuda
show_help() {
    echo -e "${BLUE}Uso: ./docker-scripts.sh [COMANDO]${NC}"
    echo ""
    echo "Comandos disponibles:"
    echo "  build     - Construir la imagen Docker"
    echo "  run       - Ejecutar el contenedor"
    echo "  stop      - Detener el contenedor"
    echo "  restart   - Reiniciar el contenedor"
    echo "  logs      - Ver logs del contenedor"
    echo "  clean     - Limpiar imágenes y contenedores"
    echo "  dev       - Modo desarrollo con docker-compose"
    echo "  prod      - Modo producción con docker-compose"
    echo "  help      - Mostrar esta ayuda"
}

# Función para construir la imagen
build_image() {
    echo -e "${YELLOW}Construyendo imagen Docker...${NC}"
    docker build -t mi-pagina-nextjs .
    echo -e "${GREEN}✓ Imagen construida exitosamente${NC}"
}

# Función para ejecutar el contenedor
run_container() {
    echo -e "${YELLOW}Ejecutando contenedor...${NC}"
    docker run -d --name mi-pagina-nextjs -p 3000:80 mi-pagina-nextjs
    echo -e "${GREEN}✓ Contenedor ejecutándose en http://localhost:3000${NC}"
}

# Función para detener el contenedor
stop_container() {
    echo -e "${YELLOW}Deteniendo contenedor...${NC}"
    docker stop mi-pagina-nextjs 2>/dev/null || true
    docker rm mi-pagina-nextjs 2>/dev/null || true
    echo -e "${GREEN}✓ Contenedor detenido${NC}"
}

# Función para reiniciar
restart_container() {
    stop_container
    run_container
}

# Función para ver logs
show_logs() {
    echo -e "${YELLOW}Mostrando logs del contenedor...${NC}"
    docker logs -f mi-pagina-nextjs
}

# Función para limpiar
clean_docker() {
    echo -e "${YELLOW}Limpiando contenedores e imágenes...${NC}"
    docker stop mi-pagina-nextjs 2>/dev/null || true
    docker rm mi-pagina-nextjs 2>/dev/null || true
    docker rmi mi-pagina-nextjs 2>/dev/null || true
    docker system prune -f
    echo -e "${GREEN}✓ Limpieza completada${NC}"
}

# Función para modo desarrollo
dev_mode() {
    echo -e "${YELLOW}Iniciando en modo desarrollo...${NC}"
    docker-compose up --build
}

# Función para modo producción
prod_mode() {
    echo -e "${YELLOW}Iniciando en modo producción...${NC}"
    docker-compose up -d --build
    echo -e "${GREEN}✓ Aplicación ejecutándose en http://localhost:3000${NC}"
}

# Verificar si Docker está instalado
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Error: Docker no está instalado${NC}"
    exit 1
fi

# Procesar argumentos
case "$1" in
    build)
        build_image
        ;;
    run)
        run_container
        ;;
    stop)
        stop_container
        ;;
    restart)
        restart_container
        ;;
    logs)
        show_logs
        ;;
    clean)
        clean_docker
        ;;
    dev)
        dev_mode
        ;;
    prod)
        prod_mode
        ;;
    help|--help|-h)
        show_help
        ;;
    "")
        echo -e "${RED}Error: Debes especificar un comando${NC}"
        show_help
        exit 1
        ;;
    *)
        echo -e "${RED}Error: Comando desconocido '$1'${NC}"
        show_help
        exit 1
        ;;
esac