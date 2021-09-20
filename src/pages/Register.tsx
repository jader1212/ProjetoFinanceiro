import logoImg from "../assets/images/logo.png";
import signinIcon from "../assets/images/signin1.svg";

import "../styles/auth.scss";

import { Button } from "../components/Button";

export function Register() {
  return (
    <div id="page-auth">
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo" />
          <div className="separator">Faça seu cadastro</div>
          <form>
            <input type="text" placeholder="Digite seu nome de usuário" />
            <input type="text" placeholder="Digite seu e-mail" />
            <input type="text" placeholder="DIgite sua senha" />
            <input type="text" placeholder="Confirme sua senha" />
            <Button type="submit">
              <img src={signinIcon} alt="Icon signin" width="10%" />
              Registrar-se
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
