import { ChoosingAccountType } from '../components/ChoosingAccountType';
import BgChoosingAccount from "../assets/bg-choosingaccont.svg";

export const ChoosingAccountTypePage = () => {
  return (
    <main className='w-full h-screen flex justify-center items-center'
      style={{
        backgroundImage: `url(${BgChoosingAccount})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <ChoosingAccountType />
    </main>
  )
}
