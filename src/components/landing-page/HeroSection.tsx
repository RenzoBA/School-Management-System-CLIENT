import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="container mx-auto flex min-h-screen flex-col-reverse items-center justify-center gap-8 px-12 py-20 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center lg:max-w-xl lg:text-left">
          <h1 className="font-sans text-5xl font-bold sm:text-6xl">
            Made Easy With
            <span className="text-tertiary"> Quantum</span>.
          </h1>
          <p className="mb-8 mt-6 text-lg sm:mb-12">
            Create and manage classes, assignments, schedules and more. Quantum
            is simple, short and attractive. Try it today and see the
            difference!
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
            <Link
              href="/demo"
              className={buttonVariants({ variant: "default", size: "xl" })}
            >
              Free Demo
            </Link>
            <Link
              href="/sign-in"
              className={buttonVariants({ variant: "outline", size: "xl" })}
            >
              Sign In
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="assets/hero.svg"
            width={520}
            height={520}
            alt="hero-section"
            className="pt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
