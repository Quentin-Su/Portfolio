import React, { useEffect } from 'react';
import { Header } from './components/Header/Header';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Works } from './sections/Works/Works';
import { Footer } from './components/Footer/Footer';
import { Cards } from './sections/Cards/Cards';

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <main>
        <Cards />

        <section className='about_container -page_container' id='about_section'>
          <About />
        </section>

        <section className='projects_container -page_container' id='projects_section'>
          <Projects />
        </section>

        <section className='work_container -page_container' id='work_section'>
          <Works />
        </section>
      </main>

      <Footer />
    </>
  )
};