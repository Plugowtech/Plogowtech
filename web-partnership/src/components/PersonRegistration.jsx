import { Input } from "./Input";
import { InputImage } from "./InputImage";
import { ReturnImag } from "./ReturnImag";
import userProfile from "../assets/userProfile.jpg";
import { useState } from "react";

export const PersonRegistration = () => {
  const [dataInput, setDataInput] = useState({
    name: "",
    companyName: "",
    email: "",
    CPF: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

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
      <h3 className="text-3xl font-bold">Cadastro</h3>
      <form className="w-full flex flex-col justify-center items-center">
        <InputImage
          image={image || userProfile}
          inputImageLabel={"Foto de perfil"}
          onChange={handleFileChange}
        />
        <Input
          type="text"
          name="name"
          label={"Seu nome"}
          onChange={(e) => setDataInput({ ...dataInput, name: e.target.value })}
          error={error}
        />
        <Input
          type="text"
          name="companyName"
          label={"Nome da Empresa"}
          onChange={(e) =>
            setDataInput({ ...dataInput, companyName: e.target.value })
          }
          error={error}
        />
        <Input
          type="email"
          name="email"
          label={"Seu melhor email"}
          onChange={(e) =>
            setDataInput({ ...dataInput, email: e.target.value })
          }
          error={error}
        />
        <Input
          type="text"
          name="CPF"
          label={"CPF"}
          onChange={(e) => setDataInput({ ...dataInput, CPF: e.target.value })}
          error={error}
        />
        <Input
          type="text"
          name="phone"
          label={"Telefone para contato"}
          onChange={(e) =>
            setDataInput({ ...dataInput, phone: e.target.value })
          }
          error={error}
        />
        <Input
          type="text"
          name="address"
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
