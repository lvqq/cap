// copy md from the root directory of the monorepo to the root directory of create-cap

import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);

const root = path.dirname(path.dirname(path.dirname(__dirname)));

fs.copyFileSync(path.join(root, 'README.md'), path.join(__dirname, '..', 'README.md'));
