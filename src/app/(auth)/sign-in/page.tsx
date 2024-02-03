import LoginForm from "@/components/dashboard/auth/LoginForm";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const BASE_URL = process.env.BASE_URL ?? "http://localhost:3001";

  return (
    <div className="flex h-screen flex-row bg-background-strong">
      <div className="relative z-10 hidden h-full w-[55%] border-r border-border p-10 text-white lg:flex lg:flex-col">
        <Image
          src="/images/students.jpg"
          alt="students-teachers-img"
          className="absolute inset-0 h-full w-full object-cover object-top"
          quality={60}
          fill
        />
        <div className="z-20 mt-auto text-primary">
          <blockquote className="space-y-2 rounded bg-background p-2 opacity-90">
            <span className="p-2 text-lg font-light italic">
              &ldquo;Quantum has revolutionized my approach to classroom
              management. This user-friendly school management system ensures
              seamless communication with students and provides valuable
              insights into their performance. Quantum has truly elevated my
              teaching experience, making administrative tasks efficient and
              allowing me to focus more on what matters most - teaching.&rdquo;
            </span>
            <footer className="text-sm font-bold text-tertiary">
              Ms. Anderson, Teacher of The Coolest Awesome School.
            </footer>
          </blockquote>
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-center justify-center lg:w-[45%] lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.svg" alt="logo" width={50} height={50} />
          <span className="font-mono text-2xl font-black uppercase tracking-wider text-[#8b5cf6]">
            Quantum
          </span>
        </Link>
        <LoginForm baseURL={BASE_URL} />
      </div>
    </div>
  );
};

export default page;
