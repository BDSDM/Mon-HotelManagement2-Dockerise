# 🏨 Mon Hôtel Management – Application de Gestion d’Hôtel

**Mon Hôtel Management** est une application complète de gestion d’hôtel permettant aux utilisateurs de réserver des chambres en ligne, de recevoir un email de confirmation, et offrant une interface administrateur complète pour gérer les clients, les réservations et les chambres.

---

## 🚀 Fonctionnalités principales

- 🔐 Authentification sécurisée (JWT)
- 🛎️ Réservation de chambres en ligne avec facture par email 
- 🏨 Gestion des chambres (CRUD)
- 👥 Gestion des utilisateurs avec rôles (ADMIN / USER)
- 📊 Tableau de bord administrateur
- 🔄 Application fullstack conteneurisée avec Docker

---

## ▶️ Lancement automatique de l'application

Voici une **commande unique** à copier-coller dans votre terminal.  
Elle :
- Libère les ports `3306`, `8080` et `4200` si occupés
- Clône le dépôt GitHub
- Construit et lance le projet avec Docker

---

### 🪟 Pour Windows (CMD / PowerShell)

```cmd 
(for %P in (3306 8080 4200) do @for /f "tokens=1" %I in ('docker ps --format "{{.ID}} {{.Ports}}" ^| findstr ":%P"') do docker rm -f %I) & git clone https://github.com/bdsdm/Mon-HotelManagement2-Dockerise.git && cd Mon-HotelManagement2-Dockerise && docker-compose build && docker-compose up -d
```
### 🐧 Pour Linux / macOS (bash / zsh)
```cmd 
for P in 3306 8080 4200; do
  docker ps --format '{{.ID}} {{.Ports}}' | grep ":$P" | awk '{print $1}' | xargs -r docker rm -f
done && git clone https://github.com/bdsdm/Mon-HotelManagement2-Dockerise.git && cd Mon-HotelManagement2-Dockerise && docker-compose build && docker-compose up -d
