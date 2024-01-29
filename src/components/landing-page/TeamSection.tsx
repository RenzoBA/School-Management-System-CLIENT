import Image from "next/image";
import { teamMembers } from "./constants";
import { MemberProps } from "@/lib/types/member";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";

const TeamSection = () => {
  return (
    <section id="team">
      <div className="container mx-auto min-h-screen max-w-7xl space-y-14 px-12 py-24 text-center">
        <div className="relative flex flex-col items-center gap-2">
          <Image
            src="/assets/bg-star.svg"
            alt="bg-dots"
            width={100}
            height={100}
            className="absolute -left-10 -top-16 hidden lg:block"
          />
          <h2 className="mb-6 font-sans text-4xl font-bold leading-none tracking-tight sm:text-5xl md:mx-auto">
            Our Team
          </h2>
          <p className="text-base md:text-lg">
            Quantum is a reality thanks to our team&apos;s efforts. Meet us.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between">
          {teamMembers.map((member, i) => (
            <TeamMember key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member }: { member: MemberProps }) => {
  return (
    <div className="grid pb-5 text-left shadow sm:grid-cols-3 sm:pb-0">
      <div className="relative h-48 max-h-full w-full rounded shadow sm:h-auto">
        <Image
          width={500}
          height={500}
          className="absolute h-full w-full rounded object-cover"
          src={member.photo}
          alt={member.fullName}
        />
      </div>
      <div className="mt-5 flex flex-col justify-center sm:col-span-2 sm:mt-0 sm:p-5">
        <p className="text-lg font-bold">
          {member.fullName} <span className="ml-1">{member.country}</span>
        </p>
        <p className="text-tertiary mb-4 text-xs">{member.role}</p>
        <p className="mb-4 text-sm leading-relaxed tracking-wide">
          {member.about}
        </p>
        <div className="flex items-center justify-center space-x-3 sm:justify-end">
          {member.socialNetworks?.map((link, i) => (
            <TooltipProvider key={i} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    target="_blank"
                    href={link.url}
                    className="bg-background hover:bg-tertiary group rounded-full p-2 transition-colors"
                  >
                    <span className="sr-only">{link.name}</span>
                    <link.logo
                      size={20}
                      className="text-primary group-hover:text-white"
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{link.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
