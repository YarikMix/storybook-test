import {defineConfig} from "vite";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        tsconfigPaths(),
    ],
    esbuild: {
        jsx: 'transform',
        jsxFactory: 'jsx',
        jsxFragment: 'Fragment',
        jsxInject: "import {jsx, Fragment} from '@robocotik/react/jsx-runtime'",
        jsxDev: false,
    },
    resolve: {
        alias: {
            '@': '/src',
        },
    },
})
