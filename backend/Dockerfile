# 1️⃣ Utiliser une image Maven pour builder le projet
FROM maven:3.9.6-eclipse-temurin-17 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier pom.xml et télécharger les dépendances (cache optimisé)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copier le reste du code source et builder le jar
COPY src ./src
RUN mvn clean package -DskipTests

# 2️⃣ Utiliser une image Java pour exécuter l’application
FROM eclipse-temurin:17-jdk

# Définir le répertoire de travail
WORKDIR /app

# Copier le jar généré depuis l'étape build
COPY --from=build /app/target/*.jar app.jar

# Exposer le port de Spring Boot
EXPOSE 8080

# Commande pour lancer l'application
ENTRYPOINT ["java", "-jar", "app.jar"]
