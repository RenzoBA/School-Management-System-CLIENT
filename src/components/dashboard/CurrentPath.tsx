"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

const CurrentPath = () => {
  const pathName = usePathname();

  const fullPath = pathName.split("/").slice(2);
  // const fullPathElements = ["dashboard", "users", "u-027", "courses", "c-002"];

  const userPath = fullPath[0];

  return (
    <div>
      <h2 className="text-tertiary text-xl font-black capitalize">
        {userPath}
      </h2>
      <div className="flex">
        {fullPath.map((path, i) => (
          <div key={i}>
            <span className="text-secondary">/</span>
            <Link
              href={fullPath.slice(0, i + 1).join("/")}
              className={buttonVariants({
                variant: "link",
                size: "sm",
                className: "px-1.5",
              })}
            >
              {path}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentPath;
