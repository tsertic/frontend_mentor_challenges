import { Hero, YourResult, Tips, BmiLimitations } from "./_components/Homepage";
import { HeroGradiant } from "./_components/esthetics/HeroGradiant";
const HomePage = () => {
  return (
    <main className="">
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
