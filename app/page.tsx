import FAQ from "@/components/faq";
import HorizontalScrollText from "@/components/infinitescroll";
import ListOfCards from "@/components/listofcards";
import Navbar from "@/components/nav";
import { faqData } from "@/constants/faq";
import { SECTION1, SECTION2 } from "@/constants/listofcards";
import { TEXTS } from "@/constants/scrolltext";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Navbar component */}
      <Navbar />

      <div className="px-8 md:px-60 my-10 md:my-20">
        {/* H1 - header */}
        <h1 className="uppercase md:text-7xl text-3xl font-bold">
          Lorem Ipsum
        </h1>

        {/* List of cards - section #1 */}
        <ListOfCards data={SECTION1} />
      </div>

      <div className="px-8 md:px-60 my-10 md:my-20 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div>
          <h1 className="uppercase text-3xl md:text-6xl font-bold">About us</h1>
          <div className="mt-5 opacity-50 flex flex-col gap-2">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
          </div>
        </div>
        <div className="opacity-50">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>

      {/* Horizontal scroll */}
      <HorizontalScrollText texts={TEXTS} speed={5000} />

      <div className="px-8 md:px-60 my-10 md:my-20">
        {/* H2 - header */}
        <h2 className="uppercase md:text-7xl text-3xl font-bold">
          Lorem Ipsum <br />
          Doler Set
        </h2>
        {/* List of cards - section #2 */}
        <ListOfCards data={SECTION2} />
      </div>

      <div className="my-10 md:my-20">
        <h2 className="px-8 md:px-60 uppercase md:text-7xl text-3xl font-bold">
          Lorem Ipsum Doler
        </h2>

        <div className="mt-10">
          <FAQ faqData={faqData} />
        </div>
      </div>
    </main>
  );
}
