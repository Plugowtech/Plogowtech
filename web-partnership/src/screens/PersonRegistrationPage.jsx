import { PersonRegistration } from "../components/PersonRegistration";
import BgRegistration from "../assets/bg-registration.svg";

export const PersonRegistrationPage = () => {
  return (
    <main
      className="w-full"
      style={{
        backgroundImage: `url(${BgRegistration})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-[100px] pb-[100px]">
        <PersonRegistration />
      </div>
    </main>
  );
};
