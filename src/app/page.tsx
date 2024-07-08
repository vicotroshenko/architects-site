import About from '@/components/About/About.component';
import Contacts from '@/components/Contacts/Contacts.component';
import Hero from '@/components/Hero/Hero.component';
import Mission from '@/components/Mission/Mission.components';
import Projects from '@/components/Projects/Projects.component';

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <About />
      <Projects />
      <Contacts />
    </>
  );
}
