import {
  About,
  Hero,
  SimplifyBanner,
  Testimonials,
} from "./_components/pageSections";
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <section className="pt-[111px] lg:pt-[220px] overflow-visible">
        <Image
          src="/images/pattern-desktop.svg"
          height={970}
          width={655}
          alt="decorative blob"
          className="absolute right-[-50px] top-[-50px] lg:right-[0] lg:top-[0]  z-[-10] "
        />
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
