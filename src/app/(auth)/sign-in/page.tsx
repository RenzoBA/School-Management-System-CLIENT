import LoginForm from "@/components/dashboard/auth/LoginForm";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-background-strong flex h-screen flex-row">
      <div className="border-border relative z-10 hidden h-full w-[55%] border-r p-10 text-white lg:flex lg:flex-col">
        <Image
          src="/images/students.jpg"
          alt="students-teachers-img"
          className="absolute inset-0 h-full w-full object-cover object-top"
          quality={60}
          fill
        />
        <div className="text-primary z-20 mt-auto">
          <blockquote className="bg-background-strong space-y-2 rounded p-2 opacity-90">
            <span className="p-2 text-lg font-light italic">
              &ldquo;Quantum has revolutionized my approach to classroom
              management. This user-friendly school management system ensures
              seamless communication with students and provides valuable
              insights into their performance. Quantum has truly elevated my
              teaching experience, making administrative tasks efficient and
              allowing me to focus more on what matters most - teaching.&rdquo;
            </span>
            <footer className="text-tertiary text-sm font-bold">
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
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
