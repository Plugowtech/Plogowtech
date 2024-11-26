import { Input } from "./Input";
import { AnimationLogin } from "../components/animations/AnimationLogin";
import { ReturnImag } from "./ReturnImag";
import { useState } from "react";
import Logo from "../assets/newMarkTwo.svg";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("", email);
      setStep(2);
    } catch (err) {
      setError("ajustar error");
    } finally {
      setLoading(false);
    }
  };

  const handleToken = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("", { email, token });

      ("ajuste falta back  e rota da dashboard");
    } catch (error) {
      setError("ajustar error");
    } finally {
      setLoading(false);
    }
  };

  if (step === 1) {
    return (
      <section className="bg-[var(--background-primary)] z-10 w-[500px] h-[400px] m-auto mt-28 flex flex-col justify-center items-center">
        <div>
          <img
            src={Logo}
            alt="logo"
            className="relative right-[-180px] top-12 size-10"
          />
        </div>
        <div className="relative top-12 right-48">
          <ReturnImag rota="/" />
        </div>
        <h3 className="text-4xl text-center font-bold">
          Bem-vindo ao
          <strong className="text-[var(--letter-color-secondary)]">
            Partnership
          </strong>
        </h3>
        <p className="mb-[-20px]">Entre com seu E-mail</p>
        <form
          onSubmit={handleEmail}
          className="w-full flex flex-col justify-center items-center"
        >
          <Input
            type="email"
            name="login"
            label={"E-mail"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />

          <div className="w-full flex items-center justify-center">
            <button className="btn-inputs">
              {loading ? "Enviando ..." : "Enviar"}
            </button>
          </div>
          <AnimationLogin classNameLogin="absolute inset-0 -z-10" />
        </form>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="bg-[var(--background-primary)] z-10 w-[500px] h-[400px] m-auto mt-28 flex flex-col justify-center items-center">
        <div className="relative top-12 right-48">
          <ReturnImag rota="/" />
        </div>
        <h3 className="text-4xl text-center font-bold">
          Bem-vindo ao
          <strong className="text-[var(--letter-color-secondary)]">
            Partnership
          </strong>
        </h3>
        <p className="mb-[-20px]">Entre na sua conta</p>
        <form  onSubmit={handleToken} className="w-full flex flex-col justify-center items-center">
          <Input
           
            type="text"
            name="password"
            label={"Token"}
            value={token}
            onChange={(e) => setToken(e.target.value)}
            error={error}
          />

          <div className="w-full flex items-center justify-center">
            <button className="btn-inputs">
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </div>
            <AnimationLogin classNameLogin="absolute inset-0 -z-10" />
        </form>
      </section>
    );
  }
};
