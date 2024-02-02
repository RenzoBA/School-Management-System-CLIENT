import { SidebarLinkProps } from "@/lib/types/sidebar-link";
import {
  BookA,
  BookOpenCheck,
  BookOpenText,
  Coins,
  Component,
  GraduationCap,
  Group,
  LibraryBig,
  NotebookPen,
  Presentation,
  School,
  Users,
} from "lucide-react";

export const adminLinks: SidebarLinkProps[] = [
  {
    title: "Administration",
    children: [
      {
        icon: GraduationCap,
        title: "Teachers",
        path: "/admin/teachers",
      },
      {
        icon: Coins,
        title: "Accountants",
        path: "/admin/accountants",
      },
      {
        icon: Users,
        title: "Students",
        path: "/admin/students",
      },
      {
        icon: Component,
        title: "Cohorts",
        path: "/admin/cohorts",
      },
      {
        icon: Group,
        title: "Sections",
        path: "/admin/sections",
      },
    ],
  },
  {
    title: "Academics",
    children: [
      {
        icon: School,
        title: "Careers",
        path: "/admin/careers",
      },
      {
        icon: Presentation,
        title: "Courses",
        path: "/admin/courses",
      },
    ],
  },
  {
    title: "Evaluations",
    children: [
      {
        icon: LibraryBig,
        title: "Assignments",
        path: "/admin/assignments",
      },
      {
        icon: NotebookPen,
        title: "Exam",
        path: "/admin/exam",
      },
    ],
  },
];

export const teacherLinks: SidebarLinkProps[] = [
  {
    title: "Evaluations",
    children: [
      {
        icon: BookA,
        title: "Assignments",
        path: "/assignment",
      },
      {
        icon: BookOpenCheck,
        title: "Exam",
        path: "/exam",
      },
    ],
  },
  {
    title: "Courses",
    children: [
      {
        path: "/course/1",
        title: "Course 1",
        icon: BookOpenText,
      },
      {
        path: "/course/2",
        title: "Course 2",
        icon: BookOpenText,
      },
      {
        path: "/course/3",
        title: "Course 3",
        icon: BookOpenText,
      },
    ],
  },
];

export const chartColors: string[] = [
  "rgb(75, 192, 192)",
  "rgb(255, 206, 86)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
];

export const chartColorsSoft: string[] = [
  "rgba(75, 192, 192, 0.6)",
  "rgba(255, 206, 86, 0.6)",
  "rgba(255, 99, 132, 0.6)",
  "rgba(255, 159, 64, 0.6)",
  "rgba(54, 162, 235, 0.6)",
  "rgba(153, 102, 255, 0.6)",
];
