import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This is a USER site (ritikeshvali.github.io), served at the domain root,
// so base is "/". If you ever move this to a PROJECT repo served at
// username.github.io/repo-name/, change base to "/repo-name/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
