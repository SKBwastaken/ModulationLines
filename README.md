# SKB // TOOLS

Two browser tools, one repo. Both live on GitHub Pages:

- **ASCII ART CREATOR** — converts images, GIFs and videos into colored ASCII art on canvas, with palettes, fonts, presets and export.
- **MODULATION LINES** — analog waveform and CRT synthesizer visual with modulated line patterns, audio input and recording.

## URLs

| URL | Opens |
| --- | --- |
| `https://skbwastaken.github.io/ASCIICreator/` | ASCII Art Creator |
| `https://skbwastaken.github.io/ModulationLines/` | Modulation Lines |
| `.../index.html#hub` (or `?view=hub`) | Hub |

Both repos contain the **identical folder**. `index.html` routes by pathname:
a URL under `/ModulationLines/` boots Modulation Lines, everything else boots
ASCII Art Creator. Hashes `#ascii`, `#modulation` and `#hub` force a specific
view. Every tool view is its own HTML document, so switching tools is a full
page load — all animation loops, recorders and listeners are cleanly torn down
by the browser.

## Files

- `index.html` — pathname/hash router (redirects with `location.replace`)
- `ascii.html` — ASCII Art Creator (single-file app)
- `modulation.html` — Modulation Lines (single-file app)
- `hub.html` — tool hub with previews
- `shared.css` — shared design tokens + switcher/modal/hub styles
- `collapse.js` — click a sidebar category name to collapse/expand it (state saved per tool)
- `switcher.js` — compact tool switcher (tool pages only) with in-window unsaved-changes confirm
- `assets/` — OG/example images (`example.png`, `geo.jpg`, `embed.png`); hub previews go in `preview-ascii.png` / `preview-modulation.png`

## Style

Black background, 1px white/dark-gray borders, Consolas/Courier New monospace,
pastel-orange primary accent (#ffb366) with yellow/red status accents, and
ASCII-art range sliders (```----------o----```). No external font or CDN dependencies.

## Credits

vibe coded by [SKB](https://discord.com/users/289503943409664000)
