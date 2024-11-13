import { Nav } from '../components/Nav';
import { Header } from '../components/Header';
import { WhyChoose } from '../components/WhyChoose';
import { HowItWork } from '../components/HowItWork';
import { AboutTravel } from '../components/AboutTravel';
import { ShowPrize } from '../components/ShowPrize';
import { Accelerate } from '../components/Accelerate';
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <main className='w-full h-screen bg-[var(--background-primary)]'>
      <Nav />
      <Header />
      <WhyChoose/>
      <HowItWork />
      <AboutTravel />
      <ShowPrize />
      <Accelerate />
      <Footer />
    </main>
  )
}
