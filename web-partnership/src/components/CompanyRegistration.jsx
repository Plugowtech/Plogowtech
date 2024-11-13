import { Input } from "./Input";
import { InputImage } from "./InputImage";
import { ReturnImag } from "./ReturnImag";
import logoPlaceholder from "../assets/logoPlaceholder.png";


export const CompanyRegistration = () => {
  return (
    <section className="bg-[var(--background-primary)] opacity-80 w-[600px] m-auto pt-7  flex flex-col justify-center items-center">
      <div className="relative right-60">
        <ReturnImag rota="/" />
      </div>
      <h3 className="text-3xl font-bold">Cadastro de Empresa</h3>
      <form className="w-full flex flex-col justify-center items-center">
        <InputImage
          image={logoPlaceholder}
          inputImageLabel={"Logo da Empresa"}
        />
        <Input type="text" name="companyName" label={"Nome da Empresa"} />
        <Input type="text" name="email" label={"Seu melhor email"} />
        <Input type="text" name="cnpj" label={"CNPJ"} />
        <Input type="text" name="sector" label={"Setor"} />
        <Input type="text" name="phone" label={"Telefone para contato"} />
        <Input type="text" name="address" label={"Endereço"} />

        <button className="btn-inputs">Entrar</button>
      </form>
    </section>
  );
}; /** to do file */
