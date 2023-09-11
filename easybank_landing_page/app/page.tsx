import { Hero, LatestArticles, WhyEasyBank } from "./_components/pageSections";

export default function Home() {
  return (
    <main className="pt-[60px] xl:pt-[80px]">
      <section>
        <Hero />
      </section>
      <section className="bg-base-300 py-[64px] xl:py-[96px]">
        <WhyEasyBank />
      </section>
      <section className="py-[88px] xl:py-[80px]">
        <LatestArticles />
      </section>
    </main>
  );
}
