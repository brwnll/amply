# To run demo project

1. Clone repository
2. In `api` run `npm install && npm run build && npm start`
3. In `client-app` run `npm install && npm run dev`
4. Navigate to `localhost:8888` in the browser

> If you get this error: `node: --openssl-legacy-provider is not allowed in NODE_OPTIONS`
> Open `package.json` in `client-app` and change `dev` script to `cross-env preact watch -p 8888`
