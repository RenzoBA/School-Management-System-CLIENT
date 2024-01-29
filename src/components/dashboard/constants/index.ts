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
} from "lucide-react";

export const adminLinks: SidebarLinkProps[] = [
  {
    title: "Administration",
    children: [
      {
        icon: Users,
        title: "Staff",
        path: "/admin/staff",
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
