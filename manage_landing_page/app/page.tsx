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
      <section className="pt-[111px] lg:pt-[220px] mb-[93px] lg:mb-[132px]">
        <div className="overflow-hidden absolute w-full h-full top-0 right-0 z-[-10] ">
          <Image
            src="/images/pattern-desktop.svg"
            height={970}
            width={655}
            alt="decorative blob"
            className="absolute right-[-50px] top-[-50px] lg:right-[0] lg:top-[0]   "
          />
        </div>
        <Hero />
        <div className="lg:hidden overflow-hidden absolute w-full h-[200%] top-[0] right-[0]  z-[-10] ">
          <Image
            src="/images/pattern-desktop-middle.svg"
            height={318}
            width={134}
            alt="decorative blob"
            className="rotate-180 absolute right-0 top-[440px]"
          />
        </div>
      </section>
      <section className="relative mb-[146px]">
        <About />
        <div className=" hidden lg:block overflow-hidden absolute w-full h-full bottom-[-300px] left-0 z-[-10] ">
          <Image
            src="/images/pattern-desktop-middle.svg"
            height={833}
            width={291}
            alt="decorative blob"
          />
        </div>
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
