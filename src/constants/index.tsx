import { HomeIcon, StarIcon, UserGroupIcon } from "@heroicons/react/outline";

export const EXTERNAL_LINKS = [
  {
    title: "Documentation",
    subtitle: "Read",
    link: "https://docs.zenml.io/getting-started/introduction",
  },
  {
    title: "Settings",
    subtitle: "Manage",
    link: "https://docs.zenml.io/getting-started/installation",
  },
  {
    title: "New Members",
    subtitle: "Invite",
    link: "hhttps://www.zenml.io/",
  },
];

export const NAVIGATION_TABS = [
  { to: "/", title: "Home", icon: HomeIcon },
  { to: "/stacks", title: "Stacks", icon: UserGroupIcon },
  { to: "/components", title: "Components", icon: StarIcon },
];
