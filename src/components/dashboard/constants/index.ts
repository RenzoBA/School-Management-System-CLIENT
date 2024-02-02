import { SidebarLinkProps } from "@/lib/types/sidebar-link";
import {
  Blocks,
  BookA,
  BookOpenCheck,
  BookOpenText,
  BookText,
  GraduationCap,
  LibraryIcon,
  PcCase,
  Users,
  Users2,
} from "lucide-react";

export const adminLinks: SidebarLinkProps[] = [
  {
    title: "Administration",
    children: [
      {
        icon: Users,
        title: "Teachers",
        path: "/admin/teachers",
      },
      {
        icon: Users2,
        title: "Accountants",
        path: "/admin/accountants",
      },
      {
        icon: GraduationCap,
        title: "Students",
        path: "/admin/students",
      },
      {
        icon: PcCase,
        title: "Cohorts",
        path: "/admin/cohorts",
      },
      {
        icon: Blocks,
        title: "Sections",
        path: "/admin/sections",
      },
    ],
  },
  {
    title: "Academics",
    children: [
      {
        icon: LibraryIcon,
        title: "Careers",
        path: "/admin/careers",
      },
      {
        icon: BookText,
        title: "Courses",
        path: "/admin/courses",
      },
    ],
  },
  {
    title: "Evaluations",
    children: [
      {
        icon: BookA,
        title: "Assignments",
        path: "/admin/assignments",
      },
      {
        icon: BookOpenCheck,
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
