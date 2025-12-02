# Strimo – Your Universe of Movies & TV Shows

A modern streaming platform built with Next.js, Firebase, and ShadCN UI.

<p align="center">
    <img src="./public/logo.png" alt="Strimo Preview" width="600"/>
</p>

<p align="center">
    <strong>A sleek streaming app built using Firebase Studio and Next.js App Router.</strong>
</p>

---

## 🚀 Features

- 🔐 **Firebase Authentication** (Email & Password)
- 🎬 **Browse Movies & TV Shows**
- ▶️ **Dynamic Watch Pages** (`/watch/[id]`)
- 🎨 **ShadCN UI + Tailwind CSS**
- 📱 **Fully Responsive UI**
- ⚡ **React Hook Form** for Forms
- 🔥 **Firebase Firestore** (or static data fallback)
- 💡 **Custom Hooks & Reusable Components**

---

## 📁 Project Structure

```
.
├── src
│   ├── app/                # Next.js routes & layouts
│   ├── components/         # Reusable UI blocks
│   ├── lib/                # Firebase config, utils, static data
│   ├── hooks/              # Custom React hooks
│
├── .env                    # Firebase environment variables
├── package.json            # Dependencies & scripts
├── next.config.ts          # Next.js config
└── tailwind.config.ts      # Tailwind config
```

---

## 🧠 Core Concepts

### Routing – App Router

- `/` → Landing Page
- `/browse` → Main authenticated dashboard
- `/watch/[id]` → Watch a specific movie
- `/login` & `/signup` → Authentication
- `/movies` & `/tv-shows` → Filtered pages

### Authentication – Firebase

- `src/lib/firebase.ts` → Firebase initialization
- `src/components/AuthProvider.tsx` → Global auth context
- `src/hooks/useAuth.ts` → Easy access to user & loading

### Styling – Tailwind + ShadCN

- `globals.css` → Theme variables for light/dark
- `/components/ui` → ShadCN UI library

---

## 🔧 Installation & Local Development

### 1. Clone the repository

```bash
git clone https://github.com/your-user/strimo.git
cd strimo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Firebase

#### Step A — Create `.env`

Create a file named `.env` in the project root:

```env
# Firebase Credentials
NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_API_KEY"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_SENDER_ID"
NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID"
```

⚠️ **Replace all `"YOUR_..."` values with credentials from Firebase Console → Project Settings → Web App.**

#### Step B — Enable Firestore

1. Go to **Firestore Database** in Firebase
2. Click **Create Database**
3. Choose **Start in test mode**
4. Select location → **Enable**

### 4. Run the development server

```bash
npm run dev
```

The app starts at:

🔗 **http://localhost:9002**

---

## 🏗️ Key Directories

### 📂 `src/app` – Routes & Layouts

- `layout.tsx` → Root layout & providers
- `page.tsx` → Landing page
- `browse/page.tsx` → Main dashboard
- `watch/[id]/page.tsx` → Video player

### 📂 `src/components` – UI + Logic

- `Header`, `Footer`, `Hero`, `MediaCard`, `ContentRow`
- `AuthProvider.tsx` → Authentication wrapper
- `/ui` → ShadCN components

### 📂 `src/lib` – Utilities & Config

- `firebase.ts` → Firebase initialization
- `data.ts` → Static movies/shows data
- `utils.ts` → Helper functions (`cn`, etc.)

### 📂 `src/hooks` – Custom Hooks

- `useAuth` → Auth state
- `useToast` → Notifications
- `use-mobile` → Mobile detection

---

## 📸 Screenshots

Add screenshots of your UI here once ready:

`/public/screenshots/`

---

## 🛠️ Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build production bundle  |
| `npm run start` | Run production server    |

---

## 🌐 Deployment

Strimo includes `apphosting.yaml` for Firebase App Hosting:

Deploy with:

```bash
firebase deploy
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Submit a PR 🎉

---

## 📄 License

MIT License. Free to use and modify.
