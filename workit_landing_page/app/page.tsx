import { HeroSection } from "./_components/Homepage/HeroSection";
import { ServicePerks } from "./_components/Homepage/ServicePerks";

export default function Home() {
  return (
    <main className="">
      <HeroSection />

      <section className="bg-ghost-white padding-x pt-[160px] md:pt-[200px] xl:pt-[260px] pb-[71px] md:pb-[103px] xl:pb-[171px] rounded-bottom-large ">
        <ServicePerks />
      </section>
      <section className="min-h-[900px]">ApplyFor Access</section>
    </main>
  );
}
