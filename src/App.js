import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { About } from './sections/About/About';
import { Projects } from './sections/Project/Project';
import { Works } from './sections/Works/Works';
import { Footer } from './components/Footer/Footer';

export default function app() {
  return (
    <>
      <Header />

      <main>
        <section className='card_container_flex'>
          <Card content='About' icon='info' class='-bg-blue' htmlId='about_section' />
          <Card content='Projects' icon='code' class='-bg-light_grey' htmlId='projects_section' />
          <Card content='Experience' icon='history' class='-bg-yellow' htmlId='work_section' />
          <Card content='Contact' icon='send' class='-bg-white -hover-animation-plane' mailto={true} />
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