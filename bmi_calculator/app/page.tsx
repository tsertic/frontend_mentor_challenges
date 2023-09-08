import { Hero, YourResult, Tips, BmiLimitations } from "./_components/Homepage";
const HomePage = () => {
  return (
    <main className="flex flex-col gap-[72px] md:gap-[96px] items-center">
      <section>
        <Hero />
      </section>
      <section>
        <YourResult />
      </section>
      <section>
        <Tips />
      </section>
      <section>
        <BmiLimitations />
      </section>
    </main>
  );
};
export default HomePage;
