import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-award-list",
            entry: "ilw-award-list.ts",
            fileName: "ilw-award-list",
            formats: ["es"],
        },
        rollupOptions: {
            external: [/^@?lit/],
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-award-list.css";
                    return "assets/[name]-[hash][extname]"; // vite default
                },
            },
        },
    },
    server: {
        hmr: false,
    },
    plugins: [dts()],
});
