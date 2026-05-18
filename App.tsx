@import "tailwindcss";

@theme {
  --color-accent: #00F0FF;
  --color-bg-dark: #0A0A0B;
  
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
}

@layer base {
  body {
    @apply bg-bg-dark text-white font-sans;
  }
}

@layer utilities {
  .text-stroke-white {
    -webkit-text-stroke: 1px white;
  }
}
