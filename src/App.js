import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Works } from './sections/Works/Works';
import { Footer } from './components/Footer/Footer';
import { cards } from './utils/context/constants';

export default function app() {
  return (
    <>
      <Header />

      <main>
        <section className='card_container_flex'>
          {
            cards.map((value, index) => (
              <Card key={index} content={value.content} icon={value.icon} class={`${value.color}`} htmlId={value.hrefId} mailto={value.mailto} />
            ))
          }
        </section>

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