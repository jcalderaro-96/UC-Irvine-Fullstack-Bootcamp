import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import db from './config/connection.js';
import routes from './routes/index.js';

await db();

const PORT = process.env.PORT || 3001;
const app = express();

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files first
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

// Mount your API routes *after* static serving
app.use(routes);

// Fallback to index.html for client-side routing
app.get('*', (_req, res) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
