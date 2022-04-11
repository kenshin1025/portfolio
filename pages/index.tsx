import Head from "next/head";

import { HeaderSection } from "../components/HeaderSection";
import { AboutSection } from "../components/AboutSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kenshin Portfolio</title>
        <link rel="icon" href="/kenshin.png" />
      </Head>
      <HeaderSection></HeaderSection>
      <main className="flex flex-1 flex-col justify-center content-center">
        <AboutSection></AboutSection>

        <div className="text-center mt-8 mb-8">
          <h2 className="mt-2 text-primary text-3xl font-bold">
            しょうもない動画
          </h2>
          <p className="mt-1 text-gray">syoumona movie</p>
          <iframe
            className="m-auto w-1/3 aspect-video"
            src="https://www.youtube.com/embed/sb2ZJesiAfE"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
