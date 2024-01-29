import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { teamMembers } from "./constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mx-auto flex flex-col items-center space-y-10 bg-[#07102c] px-4 pb-8 pt-12">
      <div className="flex items-center gap-2">
        <Image src="/assets/logo.svg" alt="logo" width={50} height={50} />
        <span className="text-tertiary font-mono text-2xl font-black uppercase tracking-wider">
          Quantum
        </span>
      </div>
      <ul className="flex justify-center gap-10 sm:gap-20">
        {teamMembers.map((member, i) => (
          <li key={i} className="flex flex-col items-center gap-3">
            <Image
              src={member.photo!}
              width={80}
              height={80}
              className="h-16 w-16 rounded-full shadow"
              alt={member.name!}
            />
            <div className="flex flex-row gap-4">
              {member.socialNetworks?.map((link, i) => (
                <TooltipProvider key={i} delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        target="_blank"
                        href={link.url}
                        className="hover:bg-tertiary group rounded-full bg-[#1d2144] p-2 transition-colors"
                      >
                        <span className="sr-only">{link.name}</span>
                        <link.logo size={18} className="text-white" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-white">{member.fullName}</p>
              <p className="text-tertiary text-xs">{member.role}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-secondary mt-8 text-center text-xs leading-6">
        © 2024 Quantum, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
