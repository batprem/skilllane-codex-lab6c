# UI Mock Preview

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the local URL shown in terminal (typically `http://localhost:5173`).

If you previously installed with `--omit=dev`, run a fresh `npm install` so `vite` is available.

## Troubleshooting

- If you see `crypto.getRandomValues is not a function`, reinstall dependencies after this update:

```bash
rm -rf node_modules package-lock.json
npm install
```

This project now pins Vite 4 for better compatibility with older Node runtimes.

## Production preview

```bash
npm run build
npm run preview
```
