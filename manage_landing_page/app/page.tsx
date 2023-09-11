import {
  About,
  Hero,
  SimplifyBanner,
  Testimonials,
} from "./_components/pageSections";

export default function Home() {
  return (
    <main className="">
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <SimplifyBanner />
      </section>
    </main>
  );
}
