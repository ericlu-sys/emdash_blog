# Deploy `demos/simple` to Cloudflare

This demo supports local development (SQLite + local uploads) and Cloudflare production (D1 + R2).

## 1) Prerequisites

- Cloudflare account
- Wrangler authenticated (`wrangler login`)
- Dependencies installed at repo root (`pnpm install`)

## 2) Create Cloudflare resources

From this directory:

```bash
pnpm cf:db:create
pnpm cf:r2:create
```

After creating D1, copy the returned `database_id` into `wrangler.jsonc`:

```jsonc
"d1_databases": [
	{
		"binding": "DB",
		"database_name": "emdash_test",
		"database_id": "<paste-real-d1-id-here>"
	}
]
```

R2 bucket names cannot contain `_`, so this project uses `emdash-test-media` as the deployable equivalent of `emdash_test`.

## 3) Optional: bind custom domain

If you want a custom domain, add `routes` in `wrangler.jsonc`:

```jsonc
"routes": [
	{
		"pattern": "example.com",
		"zone_name": "example.com",
		"custom_domain": true
	}
]
```

## 4) Deploy

```bash
pnpm cf:deploy
```

## 5) First-time setup

Open:

- `https://<your-worker-domain>/_emdash/admin`

Then complete EmDash setup in the admin UI.
