import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "FutureDev Mobile Development",
  },
  links: [
    {
      type: "menu",
      text: "Content",
      items: [
        {
          text: "Lectures",
          description: "View lecture materials",
          url: "/content/lectures",
          active: "nested-url",
        },
        {
          text: "Assignments",
          description: "View assignments",
          url: "/content/assignments",
          active: "nested-url",
        },
      ],
    },
    {
      text: "Schedule",
      url: "/schedule",
      active: "nested-url",
    },
    {
      text: "About",
      url: "/about",
      active: "nested-url",
    },
  ],
};
