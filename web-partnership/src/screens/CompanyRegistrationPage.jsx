import { CompanyRegistration } from "../components/CompanyRegistration";
import BgRegistration from "../assets/bg-registration.svg";

export const CompanyRegistrationPage = () => {
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
        <CompanyRegistration />
      </div>
    </main>
  );
};
