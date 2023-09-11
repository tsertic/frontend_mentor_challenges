import { Hero, LatestArticles, WhyEasyBank } from "./_components/pageSections";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <WhyEasyBank />
      </section>
      <section>
        <LatestArticles />
      </section>
    </main>
  );
}
