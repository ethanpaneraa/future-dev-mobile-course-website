import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: "FutureDev Mobile Development",
  },
  links: [
    {
      text: "Content",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "About",
      url: "/about",
      active: "nested-url",
    },
  ],
};
