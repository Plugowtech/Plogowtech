import { Input } from "./Input";
import { InputImage } from "./InputImage";
import userProfile from "../assets/userProfile.jpg";

export const PersonRegistration = () => {
return (
    <section className="bg-[var(--background-primary)] w-[500px] m-auto mt-7  flex flex-col justify-center items-center">
      <h3 className="text-3xl font-bold">
       Cadastro
      </h3>
    <form className="w-full flex flex-col justify-center items-center">
        <InputImage image={userProfile}  inputImageLabel={"Foto de perfil"} />
        <Input type="text" name="name" label={"Seu nome"} />
        <Input type="text" name="companyName" label={"Nome da Empresa"} />
        <Input type="text" name="email" label={"Seu melhor email"} />
        <Input type="text" name="CPF" label={"CPF"} />
        <Input type="text" name="phone" label={"Telefone para contato"} />
        <Input type="text" name="address" label={"Endereço"} />
        <button className="btn-inputs">Entrar</button>
      </form>
    </section>
  );
}; /** to do file */

