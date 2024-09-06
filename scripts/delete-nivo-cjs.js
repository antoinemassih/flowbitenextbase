import { existsSync, unlinkSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// list used nivo packages
const nivoPackages = [
  'annotations',
  'arcs',
  'axes',
  'bar',
  'calendar',
  'colors',
  'core',
  'legends',
  'network',
  'pie',
  'polar-axes',
  'radial-bar',
  'recompose',
  'scales',
  'treemap',
  'tooltip',
];

nivoPackages.forEach((pkg) => {
  const filePath = join(__dirname, '../', 'node_modules', `@nivo/${pkg}`, 'dist', `nivo-${pkg}.cjs.js`);
  if (existsSync(filePath)) {
    unlinkSync(filePath);
    console.log(`Deleted: ${filePath}`);
  }
});

console.info('Nivo CJS files deleted: ', nivoPackages.join(', '));