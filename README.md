# Modulation Lines

> **Analog Waveform Synthesizer & CRT Pixel Mask Engine**  
> *Vibe coded by [SKB](https://discord.com/users/289503943409664000)*

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-ff3311?style=for-the-badge&logo=github)](https://skbwastaken.github.io/ModulationLines/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00e5ff.svg?style=for-the-badge)](LICENSE)

Transform images, GIFs, and videos into hardware-accelerated analog scanline waveforms, Joy Division elevation maps, frequency modulation (FM) sweeps, and authentic CRT phosphor displays.

---

## Live Web App

Launch directly in your browser:  
👉 **[https://skbwastaken.github.io/ModulationLines/](https://skbwastaken.github.io/ModulationLines/)**

---

## Key Features

- **1-Bit Binary Snap (No Anti-Aliasing)**:
  - Eliminate all fractional, blurred, or semi-transparent edge pixels.
  - Every pixel on the canvas is mathematically binarized to strictly 100% ON or 100% OFF with an adjustable threshold slider.
- **Crisp Pixel Grid Scale (1x - 6x)**:
  - Hardware nearest-neighbor pixel blocks for genuine 1-bit Macintosh, Game Boy, and bitmap arcade graphics with razor-sharp edges.
- **Authentic CRT Phosphor Pixel Masks**:
  - **Shadow Mask (Phosphor Dot Triad)**: Staggered Red, Green, and Blue phosphor dots active by default.
  - **Hard Phosphor Triad (Crisp Subpixel Grid)**: Square, razor-sharp RGB phosphor cell raster with zero anti-aliasing.
  - **Aperture Grille (Trinitron RGB Stripes)**, **Monochrome CRT Dot Matrix**, and **Scanline Raster**.
- **Analog Waveform Modulation Modes**:
  - **Elevation / Rutt-Etra**: Iconic Joy Division *Unknown Pleasures* 3D mountain landscape elevation.
  - **Frequency Modulation (FM)**: Audio-synthesizer wave frequency displacement.
  - **Hybrid**: Combined elevation amplitude and sine wave FM.
  - **Thickness & Halftone**: Variable stroke weight and engraved woodcut shading.
- **Ignore Transparent Pixels (Alpha Channel Engine)**:
  - Zero-allocation Uint8Array alpha detection for PNGs and cutout graphics.
  - **Flatten Mode**: Waveforms run as a clean, flat baseline across transparent areas and modulate strictly over the subject.
  - **Cutout Mode**: Strokes break over transparent pixels, isolating line rendering exclusively to the subject geometry.
- **Hardware-Accelerated Animation Loop**:
  - Pre-computed typed-array luminance cache with zero CPU readbacks during animation.
  - Runs at 60 / 120 / 144+ FPS with sub-millisecond delta-time stepping.
- **Offline MP4 Video Recording**:
  - High-bitrate (16 Mbps, 60 FPS) native MP4 export with user-defined video duration and real-time countdown progress.
- **Presets & Custom Configs Manager**:
  - Save, recall, and delete custom presets directly in browser localStorage.
  - Built-in curated styles: Nixie Red Diffusion, Joy Division, P1 Phosphor Green, Amber CRT, Cyber Wave, and Vintage Halftone.
- **Before / After Comparison**:
  - Instant toggle and keyboard shortcut (Key B) to inspect raw media against modulation lines.
- **Single-File Architecture**:
  - Completely self-contained HTML/JS/CSS application with zero external runtime dependencies.

---

## Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| <kbd>Space</kbd> | Toggle live phase waveform animation |
| <kbd>Key B</kbd> | Toggle Before / After comparison view |
| <kbd>Scroll</kbd> | Smooth canvas zoom |
| <kbd>Escape</kbd> | Close Changelog dialog / Dismiss drag overlay |

---

## Author & Community

- **Vibe Coded by**: [SKB](https://discord.com/users/289503943409664000)
- **Discord**: Connect on Discord via [discord.com/users/289503943409664000](https://discord.com/users/289503943409664000)

---

## License

Distributed under the MIT License. Feel free to use, modify, and share.
