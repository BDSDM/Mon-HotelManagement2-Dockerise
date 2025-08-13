# Étape 1 : Build de l'application Angular
FROM node:20 AS build

WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

RUN npm install

# Copier tout le code source Angular
COPY . .

# Build en mode production avec le nom de projet et la config adaptés
RUN npx ng build hotelManagementFrontend2 --configuration production

# Étape 2 : Serveur NGINX pour héberger l'app compilée
FROM nginx:alpine

# Nettoyer le dossier web par défaut de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier le build Angular généré dans le dossier servi par nginx
COPY --from=build /app/dist/hotel-management-frontend2 /usr/share/nginx/html

# Copier configuration personnalisée nginx si tu en as une (sinon supprime cette ligne)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Lancer nginx au premier plan
CMD ["nginx", "-g", "daemon off;"]
