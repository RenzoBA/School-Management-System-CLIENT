"use client";

import { usePathname } from "next/navigation";
import { adminLinks } from "../constants";
import Link from "next/link";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const AdminSidebar = () => {
  const pathName = usePathname();

  return (
    <div className="w-60 flex-none space-y-8 rounded-lg bg-background px-2 py-6 shadow">
      <div className="flex flex-row items-center justify-center gap-1">
        <Image src="/assets/logo.svg" alt="logo" width={40} height={40} />
        <h1 className="font-mono text-2xl font-black uppercase tracking-wider text-tertiary">
          Quantum
        </h1>
      </div>
      <nav className="space-y-2 text-sm">
        <Link
          href="/admin/dashboard"
          className={cn(
            "flex items-center gap-4 rounded px-4 py-2 font-medium transition-all hover:bg-background-strong hover:text-[#8b5cf6]",
            {
              "bg-background-strong text-[#8b5cf6]":
                pathName === "/admin/dashboard",
            }
          )}
        >
          <Home size={18} />
          <span>Dashboard</span>
        </Link>
        <div className="space-y-4">
          {adminLinks.map((group, i) => (
            <ul key={i} className="space-y-2">
              <p className="text-[0.7rem] uppercase tracking-wider text-secondary">
                {group.title}
              </p>
              <div className="space-y-2">
                {group.children.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.path}
                      className={cn(
                        "flex items-center gap-4 rounded px-4 py-2 font-medium transition-all hover:bg-background-strong hover:text-[#8b5cf6]",
                        {
                          "bg-background-strong text-[#8b5cf6]":
                            pathName === link.path,
                        }
                      )}
                    >
                      <link.icon size={18} />
                      <span>{link.title}</span>
                    </Link>
                  </li>
                ))}
              </div>
            </ul>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default AdminSidebar;
