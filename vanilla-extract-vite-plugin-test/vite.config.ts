import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
const viteConfig = ({
  plugins: [react(), vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});

export default viteConfig;
