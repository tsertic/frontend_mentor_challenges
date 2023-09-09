import { Hero, YourResult, Tips, BmiLimitations } from "./_components/Homepage";
const HomePage = () => {
  return (
    <main className="flex flex-col gap-[72px] md:gap-[96px] items-center pb-[196px]">
      <section>
        <Hero />
      </section>
      <section>
        <YourResult />
      </section>
      <section className="w-full">
        <Tips />
      </section>
      <section className="w-full padding-x">
        <BmiLimitations />
      </section>
    </main>
  );
};
export default HomePage;
