import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackStart({
      server: {
        entry: "src/server.ts",
        // Use Vercel preset on Vercel, Node locally
        preset: (process.env.VERCEL === "1" ? "vercel" : process.env.NITRO_PRESET) ?? "node",
      },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    host: "::",
    port: 8080,
  },
});
