# mudlabs-ui

A React component library for MudLabs, so every microfront looks and feels the same.

**Live preview → [mudlabs-ui.vercel.app](https://mudlabs-ui.vercel.app)**

---

This is a demo project built on top of [pixel-retroui](https://www.npmjs.com/package/pixel-retroui) — a retro-styled React UI library. All components are thin wrappers around pixel-retroui with MudLabs brand colors pre-applied, so you get the pixel aesthetic without hardcoding a hex code every time.

## Install

```bash
npm install mudlabs-ui
```

Peer deps:

```bash
npm install react react-dom pixel-retroui
```

## Usage

```tsx
import { MudButton, MudCard, MudInput } from 'mudlabs-ui'

<MudCard>
  <MudInput placeholder="Enter your name..." />
  <MudButton>Let's go</MudButton>
</MudCard>
```

## Components

| Component | What it is |
|-----------|-----------|
| `MudButton` | Button with `primary`, `secondary`, and `danger` variants |
| `MudCard` | Container with surface color and shadow |
| `MudInput` | Text input with brand border and text color |
| `MudBubble` | Speech bubble, `direction="left"` or `"right"` |
| `MudPopup` | Modal with a close button |

## Colors

The full palette is exported if you need it outside of components:

```tsx
import { colors } from 'mudlabs-ui'

colors.primary      // #fcf199
colors.surface      // #ffffff
colors.shadow       // #332b23
colors.danger       // #c0392b
```

## Dev

```bash
npm install
npm run storybook   # component preview at localhost:6006
npm run build       # outputs to dist/
```
