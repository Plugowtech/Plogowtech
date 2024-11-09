import { Input } from "./Input"


export const Login = () => {
  return (
    <section className="bg-[var(--background-primary)] w-[500px] h-[400px] m-auto mt-14  flex flex-col justify-center items-center">
      <h3 className="text-3xl font-bold">
        Bem-vindo ao <strong className="text-[var(--letter-color-secondary)]">Partnership
        </strong>
      </h3>
      <p>Entre na sua conta</p>
      <form className="flex flex-col justify-center items-center">
        <Input type="text" name="login" label={"Login"} />
        <Input type="text" name="password" label={"Password"} />
        <button className="btn-inputs">Entrar</button>
      </form>
    </section>
  );
}
