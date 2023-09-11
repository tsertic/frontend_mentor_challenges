import { Hero, LatestArticles, WhyEasyBank } from "./_components/pageSections";

export default function Home() {
  return (
    <main className="pt-[80px]">
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
