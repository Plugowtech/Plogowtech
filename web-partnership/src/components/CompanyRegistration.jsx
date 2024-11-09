import { Input } from "./Input";

export const CompanyRegistration = () => {
  return (
    <section className="bg-[var(--background-primary)] m-auto mt-7  flex flex-col justify-center items-center">
      <h3 className="text-3xl font-bold">
       Cadastro de Empresa
      </h3>
      <form className="flex flex-col justify-center items-center">
        <Input type="text" name="companyName" label={"Nome da Empresa"} />
        <Input type="text" name="email" label={"Seu melhor email"} />
        <Input type="text" name="cnpj" label={"CNPJ"} />
        <Input type="text" name="sector" label={"Setor"} />
        <Input type="text" name="phone" label={"Telefone para contato"} />
        <Input type="text" name="address" label={"Endereço"} />
        <Input type="file" name="phone" label={"Telefone para contato"} /> 
        <button className="btn-inputs">Entrar</button>
      </form>
    </section>
  );
}; /** to do file */
