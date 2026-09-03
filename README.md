# Full Stack App

A modern full-stack starter template with a **React + Vite + TypeScript** frontend and an **Express + TypeScript** backend, wired together in a single npm-workspaces monorepo.

## ✨ Features

- ⚛️ **Frontend**: React 18, Vite, TypeScript — hot reload out of the box
- 🚀 **Backend**: Express 4 + TypeScript, run with `tsx` for instant dev restarts
- 🔗 **Dev proxy**: `/api/*` calls are forwarded from the Vite dev server to the Express API — no CORS headaches in local dev
- 📦 **Monorepo**: one `npm install` + one `npm run dev` boots the entire stack
- 🧹 **Starter ready**: clean `.gitignore`, `README`, and easy-to-extend structure

## 🧱 Tech Stack

| Layer | Tech |
| --- | --- |
| Frontend | React 18, Vite 5, TypeScript |
| Backend | Node.js, Express 4, TypeScript |
| Tooling | npm workspaces, concurrently, tsx |

## 📁 Project Structure

```
.
├── client/                  # React + Vite frontend
│   ├── src/
│   │   ├── App.tsx          # Demo page that calls the backend
│   │   ├── main.tsx         # App entry point
│   │   └── index.css        # Global styles
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts       # Dev proxy: /api → localhost:4000
├── server/                  # Express + TypeScript backend
│   └── src/
│       └── index.ts         # API server entry point
├── package.json             # Root: workspaces + dev/build scripts
└── README.md
```

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) **18+** (tested on 20+ / 22+)
- npm (ships with Node.js\)**

## 🚀 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/sarvaiyameet267-tech/first.git
cd first

# 2. Install all dependencies (client + server together)
npm install

# 3. Start the full stack (server + client simultaneously))
npm run dev
```

Then open **http://localhost:5173** — the Vite dev server proxies any `/api/*` request to the backend at `http://localhost:4000`.\**

If you'd rather run them separately:

```bash
# Terminal 1 — backend at http://localhost:4000
npm run dev:server

# Terminal 2 — frontend at http://localhost:5173
npm run dev:client
```

## 🧪 Build & Production

```bash
# Type-check + build both packages into dist/
npm run build

# Start the compiled backend production server
npm start
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | API metadata (`name`, `status`) |
| GET | `/api/hello` | Returns a friendly greeting (consumed by the demo page) |
| GET | `/api/time` | Returns the current server time |

## 🛠 Commands Cheat Sheet

| Command | What it does |
| --- | --- |
| `npm run dev` | Runs server + client together (dev mode) |
| `npm run dev:server` | Runs only the backend with hot reload |
| `npm run dev:client` | Runs only the frontend with HMR |
| `npm run build` | Builds both packages (type-checked) |
| `npm start` | Runs the built production server |

## 📝 License

MIT © Meet Sarvaiya — see `LICENSE` if added.