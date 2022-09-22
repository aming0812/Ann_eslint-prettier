import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/*.vue', 'src/*.ts', 'src/**/*.vue', 'src/**/*.ts'],
		}),
	],
	resolve: {
		alias: {
			'@': '/src', // 配置路径别名
		},
	},
});
