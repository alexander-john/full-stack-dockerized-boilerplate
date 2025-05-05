# Full Stack Dockerized App (Vite + Express + MongoDB)

This is a full stack web application boilerplate using:

- **Frontend**: [Vite](https://vitejs.dev/) + React
- **Backend**: [Express](https://expressjs.com/) + MongoDB (via Mongoose)
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions

## 🚀 Getting Started

### 🧑‍💻 Local Development

Make sure Docker is installed. Then:

```
docker-compose up --build
```

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend API: [http://localhost:5000](http://localhost:5000)

### 🏗️ Production Build

```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml --env-file .env.production up --build
```

This will:

* Build the Vite app for production
* Start the backend in Node production mode
* Spin up MongoDB without live reload

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

## 🧪 GitHub Actions CI

Builds, installs, and tests both `client/` and `server/` on push to `main`.

* File: `.github/workflows/fullstack.yml`
* Includes MongoDB service for backend test connection

## 🧼 Scripts

In `client/package.json`:

```json
"dev": "vite",
"build": "vite build"
```

In `server/package.json`:

```json
"dev": "nodemon index.js",
"start": "node index.js"
```

## 🛠 Tips

* Need seed data? Add a `seed.js` in `server/` and mount it for dev
* Want HTTPS? Add Nginx with Certbot for TLS
* Want deploy to DigitalOcean? Build the app with `docker-compose.prod.yml` and push

## 📦 Build a Feature

1. Add routes in `server/index.js`
2. Add components in `client/src/`
3. Add state management if needed (Context, Redux, etc.)

## 🧠 Learn More

* [Vite Docs](https://vitejs.dev/guide/)
* [Express Docs](https://expressjs.com/)
* [Docker Compose](https://docs.docker.com/compose/)
* [Mongoose Docs](https://mongoosejs.com/)

## 🧾 License

MIT — use it however you like!