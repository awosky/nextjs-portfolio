import { useContext } from "react";
import Head from "src/components/Head";
import Contact from "src/containers/Contact";
import Home from "src/containers/Home";
import Portfolio from "src/containers/Portfolio";
import Skills from "src/containers/Skills";
import { NavigationContext } from "src/store/providers/NavigationProvider";

export default function HomePage() {
  const navigations = useContext(NavigationContext);

  return (
    <>
      <Head />

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
