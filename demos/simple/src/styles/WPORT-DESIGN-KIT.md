# WPORT Design Kit (MVP)

This site now uses a reusable WPORT design kit with three style layers.

## Token source

Tokens were derived from the WPORT frontend style sources:

- `main-site/components/home/HeroSection.vue`
- `main-site/tailwind.config.ts`
- `main-site/stores/app/theme.json`
- `main-site/components/W101Header/*.vue`

## Where to edit

- **Design tokens**: `src/styles/wport-tokens.css` (`--wport-*`)
- **Base layer**: `src/styles/wport-base.css` (typography/base inheritance)
- **Primitive components**: `src/styles/wport-primitives.css` (buttons/chips/cards/motion)
- **Hero implementation**: `src/pages/index.astro`
- **Header implementation**: `src/layouts/Base.astro`

## Reusable classes

- Buttons: `wport-btn`, `wport-btn-primary`, `wport-btn-ghost`
- Pills/chips: `wport-chip`
- Cards: `wport-card`
- Motion: `wport-reveal-up`, `wport-float-y`

## Usage example

```html
<a class="wport-btn wport-btn-primary">開始探索</a>
<button class="wport-chip">繁中</button>
```

