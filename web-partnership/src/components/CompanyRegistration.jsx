import { Input } from "./Input";
import { InputImage } from "./InputImage";
import { ReturnImag } from "./ReturnImag";
import logoPlaceholder from "../assets/logoPlaceholder.png";
import { useState } from "react";

export const CompanyRegistration = () => {
  const [dataInput, setDataInput] = useState({
    companyName: "",
    email: "",
    cnpj: "",
    sector: "",
    phone: "",
    address: "",
  });
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataInput);
  };

  return (
    <section className="bg-[var(--background-primary)] opacity-80 w-[600px] m-auto pt-7  flex flex-col justify-center items-center">
      <div className="relative right-60">
        <ReturnImag rota="/" />
      </div>
      <h3 className="text-3xl font-bold">Cadastro de Empresa</h3>
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <InputImage
          image={image || logoPlaceholder}
          inputImageLabel={"Logo da Empresa"}
          onChange={handleFileChange}
        />
        <Input
          type="text"
          name="companyName"
          value={dataInput.companyName}
          label={"Nome da Empresa"}
          onChange={(e) =>
            setDataInput({ ...dataInput, companyName: e.target.value })
          }
          error={error}
        />
        <Input
          type="email"
          name="email"
          value={dataInput.email}
          label={"Seu melhor email"}
          onChange={(e) =>
            setDataInput({ ...dataInput, email: e.target.value })
          }
          error={error}
        />
        <Input
          type="text"
          name="cnpj"
          value={dataInput.cnpj}
          label={"CNPJ"}
          onChange={(e) => setDataInput({ ...dataInput, cnpj: e.target.value })}
          error={error}
        />
        <Input
          type="text"
          name="sector"
          value={dataInput.sector}
          label={"Setor"}
          onChange={(e) =>
            setDataInput({ ...dataInput, sector: e.target.value })
          }
          error={error}
        />
        <Input
          type="text"
          name="phone"
          value={dataInput.phone}
          label={"Telefone para contato"}
          onChange={(e) =>
            setDataInput({ ...dataInput, phone: e.target.value })
          }
          error={error}
        />
        <Input
          type="text"
          name="address"
          value={dataInput.address}
          label={"Endereço"}
          onChange={(e) =>
            setDataInput({ ...dataInput, address: e.target.value })
          }
          error={error}
        />
        <button className="btn-inputs">
          {loading ? "Enviando ..." : "Entrar"}
        </button>
      </form>
    </section>
  );
};
