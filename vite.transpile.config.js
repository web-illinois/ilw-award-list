import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-categories",
            entry: "ilw-categories.ts",
            fileName: "ilw-categories",
            formats: ["es"],
        },
        rollupOptions: {
            external: [/^@?lit/],
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-categories.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
    plugins: [dts()],
});
