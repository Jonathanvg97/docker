# Utiliza la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /myapp


COPY package*.json ./

# Ejecuta npm install para instalar las dependencias
RUN npm install

# Expone el puerto 3000, que es el puerto en el que se ejecutará tu aplicación
EXPOSE 3000

COPY . .

# Comando para iniciar tu aplicación
CMD ["npm", "start"]
