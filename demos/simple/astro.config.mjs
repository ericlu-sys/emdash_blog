import node from "@astrojs/node";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { auditLogPlugin } from "@emdash-cms/plugin-audit-log";
import { defineConfig } from "astro/config";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";

const isProd = import.meta.env.PROD;
const database = isProd
	? d1({
			binding: "DB",
			session: "auto",
		})
	: sqlite({ url: "file:./data.db" });
const storage = isProd
	? r2({
			binding: "MEDIA",
			publicUrl: import.meta.env.PUBLIC_MEDIA_URL || undefined,
		})
	: local({
			directory: "./uploads",
			baseUrl: "/_emdash/api/media/file",
		});

export default defineConfig({
	output: "server",
	adapter: isProd
		? cloudflare()
		: node({
				mode: "standalone",
			}),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database,
			storage,
			plugins: [auditLogPlugin()],
		}),
	],
	devToolbar: { enabled: false },
});
