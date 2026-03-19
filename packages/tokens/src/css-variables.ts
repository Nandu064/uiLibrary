import { semanticLight, semanticDark } from "./semantic";

function tokensToCSS(tokens: Record<string, string>): string {
  return Object.entries(tokens)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join("\n");
}

export function generateCSSVariables(): string {
  return `:root {\n${tokensToCSS(semanticLight)}\n}\n\n[data-theme="dark"] {\n${tokensToCSS(semanticDark)}\n}\n`;
}

export const cssVariablesString = generateCSSVariables();
