import { Input } from "./Input"
import { AnimationLogin } from "../components/animations/AnimationLogin"
import { ReturnImag } from "./ReturnImag"


export const Login = () => {
  return (
    <section className="bg-[var(--background-primary)] z-10 w-[500px] h-[400px] m-auto mt-28 flex flex-col justify-center items-center">
      <div className="relative top-12 right-48" >
        <ReturnImag rota="/" />
      </div>
      <h3 className="text-4xl text-center font-bold">
        Bem-vindo ao{" "}
        <strong className="text-[var(--letter-color-secondary)]">
          Partnership
        </strong>
      </h3>
      <p className="mb-[-20px]">Entre na sua conta</p>
      <form className="w-full flex flex-col justify-center items-center">
        <Input type="text" name="login" label={"Login"} />
        <Input type="text" name="password" label={"Password"} />
        <div className="w-full flex items-center justify-center">
          <button className="btn-inputs">Entrar</button>
        </div>
      </form>
      <AnimationLogin classNameLogin="absolute inset-0 -z-10" />
    </section>
  );
}

