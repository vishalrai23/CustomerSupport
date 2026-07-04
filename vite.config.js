import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: base must match your GitHub repo name exactly, e.g.
// if your repo is github.com/yourname/silent-coordinator, base stays "/silent-coordinator/"
// if you rename the repo, update this line to match.
export default defineConfig({
  plugins: [react()],
  base: "/CustomerSupport/",
});
