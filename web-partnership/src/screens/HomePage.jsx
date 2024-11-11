import { Nav } from '../components/Nav';
import { Header } from '../components/Header';
import { HowItWork } from '../components/HowItWork';
import { ShowPrize } from '../components/ShowPrize';

export const HomePage = () => {
  return (
    <main className='w-full h-screen bg-[var(--background-primary)]'>
      <Nav />
      <Header />
      <HowItWork />
      <ShowPrize />
    </main>
  )
}
