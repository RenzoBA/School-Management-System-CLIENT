import { LucideIcon } from "lucide-react";

export type SidebarLinkProps = {
  title: string;
  children: {
    icon: LucideIcon;
    title: string;
    path: string;
  }[];
};
