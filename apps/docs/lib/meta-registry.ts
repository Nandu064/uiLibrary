// Server-safe: pure data imports only, no client components
import {
  buttonDocs,
  inputDocs,
  textareaDocs,
  labelDocs,
  badgeDocs,
  cardDocs,
  stackDocs,
  dividerDocs,
  spinnerDocs,
} from "@harish-ui/core/docs-meta";
import type { DocsMeta } from "@harish-ui/core/docs-meta";

export type { DocsMeta };

export const metaRegistry: Record<string, DocsMeta> = {
  button: buttonDocs,
  input: inputDocs,
  textarea: textareaDocs,
  label: labelDocs,
  badge: badgeDocs,
  card: cardDocs,
  stack: stackDocs,
  divider: dividerDocs,
  spinner: spinnerDocs,
};

export const componentSlugs = Object.keys(metaRegistry);
