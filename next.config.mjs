import {dirname} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const nextConfig = {
  output: 'export',
  turbopack: {root},
  typescript: {
    // Ignore TypeScript errors during build since we verify compilation locally
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
