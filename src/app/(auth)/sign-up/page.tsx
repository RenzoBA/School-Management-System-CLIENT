import SignupForm from "@/components/dashboard/auth/SignupForm";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex h-screen flex-row bg-background-strong">
      <div className="relative z-10 hidden h-full w-[55%] border-r border-border p-10 text-white lg:flex lg:flex-col">
        <Image
          src="/images/director-ai.jpg"
          alt="director-img"
          className="absolute inset-0 h-full w-full object-cover object-top"
          quality={60}
          fill
        />
        <div className="z-20 mt-auto text-primary">
          <blockquote className="space-y-2 rounded bg-background p-2 opacity-90">
            <span className="p-2 text-lg font-light italic">
              &ldquo;As a school director, implementing the Quantum school
              management app has revolutionized the way we operate. The seamless
              integration of Quantum into our daily processes has significantly
              improved efficiency and communication across the board&rdquo;
            </span>
            <footer className="text-sm font-bold text-tertiary">
              Jonathan Mitchell, Director of The Coolest Awesome School.
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center p-6 lg:w-[45%] lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.svg" alt="logo" width={50} height={50} />
          <span className="font-mono text-2xl font-black uppercase tracking-wider text-[#8b5cf6]">
            Quantum
          </span>
        </Link>
        <SignupForm />
      </div>
    </div>
  );
};

export default page;
