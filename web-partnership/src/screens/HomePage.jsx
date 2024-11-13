import { Nav } from '../components/Nav';
import { Header } from '../components/Header';
import { WhyChoose } from '../components/WhyChoose';
import { HowItWork } from '../components/HowItWork';
import { ShowPrize } from '../components/ShowPrize';

export const HomePage = () => {
  return (
    <main className='w-full h-screen bg-[var(--background-primary)]'>
      <Nav />
      <Header />
      <WhyChoose/>
      <HowItWork />
      <ShowPrize />
    </main>
  )
}
