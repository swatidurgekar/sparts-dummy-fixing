import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  version: 2,
  name: "my-fullstack-project",
  builds: [
    {
      src: "backend/index.js",
      use: "@vercel/node",
    },
    {
      src: "frontend/package.json",
      use: "@vercel/next",
    },
  ],
  routes: [
    {
      src: "/api/(.*)",
      dest: "backend/index.js",
    },
    {
      src: "/(.*)",
      dest: "frontend/$1",
    },
  ],
});
