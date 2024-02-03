import { features } from "./constants";
import Image from "next/image";
import { FeatureProps } from "@/lib/types/feature";

const FeatureSection = () => {
  return (
    <section id="features">
      <div className="container mx-auto min-h-screen max-w-7xl space-y-14 px-12 py-24 text-center">
        <div className="relative flex flex-col items-center gap-2">
          <Image
            src="/assets/bg-dots.svg"
            alt="bg-dots"
            width={200}
            height={200}
            className="absolute -left-10 -top-16 hidden lg:block"
          />
          <h2 className="mb-6 font-sans text-4xl font-bold leading-none tracking-tight sm:text-5xl md:mx-auto">
            Designed for schools like yours
          </h2>
          <p className="text-base md:text-lg">
            The ultimate school management system for teachers and students.
            Quantum is simple, short and attractive.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          {features.map((feature, i) => (
            <Feature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ feature }: { feature: FeatureProps }) => {
  return (
    <div className="flex max-w-md flex-col items-center gap-2 sm:mx-auto sm:text-center">
      <div className="rounded-full bg-background p-4 shadow">
        <Image src={feature.image} alt={feature.title} width={50} height={50} />
      </div>
      <div>
        <p className="font-sans text-xs font-bold text-tertiary">
          {feature.bulletin}
        </p>
        <h3 className="mb-3 font-sans text-xl font-bold leading-5">
          {feature.title}
        </h3>
        <p className="mb-3 text-sm">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureSection;
