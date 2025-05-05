# Full Stack Dockerized App (Vite + Express + MongoDB)

This is a full stack web application boilerplate using:

* **Frontend**: [Vite](https://vitejs.dev/) + React
* **Backend**: [Express](https://expressjs.com/) + MongoDB (via Mongoose)
* **Containerization**: Docker + Docker Compose
* **CI/CD**: GitHub Actions
* **Testing**: Jest + Supertest (MongoDB integration tested)

---

## 🚀 Getting Started

### 🧑‍💻 Local Development

Make sure Docker is installed. Then:

```bash
docker-compose up --build
```

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend API: [http://localhost:5000](http://localhost:5000)

### 🏗️ Production Build

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.production up --build
```

This will:

* Build the Vite app for production
* Start the backend in Node production mode
* Spin up MongoDB without live reload

---

## ⚙️ Environment Variables

### 🔧 `.env`

```env
VITE_API_URL=http://localhost:5000
MONGO_URI=mongodb://mongo:27017/mydb
NODE_ENV=development
```

### 📄 `.env.production`

```env
VITE_API_URL=https://yourdomain.com/api
MONGO_URI=mongodb://mongo:27017/mydb
NODE_ENV=production
```

Use `.env.example` to document required keys.

---

## 🧪 GitHub Actions CI

Builds, installs, and tests both `client/` and `server/` on push to `main`.

* File: `.github/workflows/fullstack.yml`
* Includes MongoDB service for backend test connection
* Runs Jest tests to validate MongoDB API

---

## 🧼 Scripts

In `client/package.json`:

```json
"dev": "vite",
"build": "vite build"
```

In `server/package.json`:

```json
"dev": "nodemon index.js",
"start": "node index.js",
"test": "jest"
```

---

## 📦 API & Features

* Sample `Message` model stored in MongoDB with `/messages` endpoint
* Seed logic ensures one default message is present
* Fully tested via Jest + Supertest

### To Build a New Feature:

1. Add a model in `server/models/`
2. Add a route in `server/index.js`
3. Add React components in `client/src/`

---

## 🛠 Tips

* Use VS Code MongoDB Playgrounds to inspect data
* Mount `seed.js` in dev to insert test data
* Want HTTPS? Add Nginx + Certbot or use a service like Fly.io
* Want to deploy to DigitalOcean? Build with `docker-compose.prod.yml` and push

---

## 🧠 Learn More

* [Vite Docs](https://vitejs.dev/guide/)
* [Express Docs](https://expressjs.com/)
* [Docker Compose](https://docs.docker.com/compose/)
* [Mongoose Docs](https://mongoosejs.com/)
* [Jest Docs](https://jestjs.io/)

---

## 🧾 License

MIT — use it however you like!