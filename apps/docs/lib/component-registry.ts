import type React from "react";
import {
  Button,
  Input,
  Textarea,
  Label,
  Badge,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  HStack,
  VStack,
  Divider,
  Spinner,
  Alert,
  Checkbox,
  Switch,
  Progress,
  Skeleton,
} from "@harish-ui/core";
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
  alertDocs,
  checkboxDocs,
  switchDocs,
  progressDocs,
  skeletonDocs,
} from "@harish-ui/core/docs-meta";
import type { DocsMeta } from "@harish-ui/core/docs-meta";

type ComponentRegistryEntry = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  meta: DocsMeta;
  subComponents?: Record<string, React.ComponentType>;
};

export const componentRegistry: Record<string, ComponentRegistryEntry> = {
  button: { component: Button, meta: buttonDocs },
  input: { component: Input, meta: inputDocs },
  textarea: { component: Textarea, meta: textareaDocs },
  label: { component: Label, meta: labelDocs },
  badge: { component: Badge, meta: badgeDocs },
  card: {
    component: Card,
    meta: cardDocs,
    subComponents: { CardHeader, CardBody, CardFooter },
  },
  stack: { component: Stack, meta: stackDocs, subComponents: { HStack, VStack } },
  divider: { component: Divider, meta: dividerDocs },
  spinner: { component: Spinner, meta: spinnerDocs },
  alert: { component: Alert, meta: alertDocs },
  checkbox: { component: Checkbox, meta: checkboxDocs },
  switch: { component: Switch, meta: switchDocs },
  progress: { component: Progress, meta: progressDocs },
  skeleton: { component: Skeleton, meta: skeletonDocs },
};

export type ComponentSlug = keyof typeof componentRegistry;
export const componentSlugs = Object.keys(componentRegistry) as ComponentSlug[];
