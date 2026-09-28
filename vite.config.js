import { copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  base: isGitHubPages ? '/tools/' : '/',
  plugins: isGitHubPages ? [{
    name: 'github-pages-spa-fallback',
    apply: 'build',
    async closeBundle() {
      await copyFile(resolve('dist/index.html'), resolve('dist/404.html'));
    },
  }] : [],
});