import Head from "next/head";
import { useContext } from "react";
import Contact from "src/containers/Contact";
import Home from "src/containers/Home";
import Portfolio from "src/containers/Portfolio";
import Skills from "src/containers/Skills";
import { NavigationContext } from "src/store/providers/NavigationProvider";

export default function HomePage() {
  const navigations = useContext(NavigationContext);

  return (
    <>
      <Head>
        <title>Faisal Nur Hakim | Software Engineer</title>
        <meta
          name="description"
          content="Hello, My name is Faisal Nur Hakim and I am a Software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section ref={navigations.homeSection}>
          <Home />
        </section>
        <section ref={navigations.skillSection}>
          <Skills />
        </section>
        <section ref={navigations.portoSection}>
          <Portfolio />
        </section>
        <section ref={navigations.contactSection}>
          <Contact />
        </section>
      </main>
    </>
  );
}
