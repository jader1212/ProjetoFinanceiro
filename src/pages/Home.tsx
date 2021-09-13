import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.png';
import googleIconImg from '../assets/images/google-icon.svg';
import signinIcon from '../assets/images/signin1.svg';

import '../styles/auth.scss';

import { Button } from '../components/Button';

export function Home() {
  return (
    <div id="page-auth">

      <main>

        <div className="main-content">
          <img src={logoImg} alt="Logo" />
          <button className="create-room">
            <img src={googleIconImg} alt="Google icon" />
            crie sua conta com o Google
          </button>
          <div className="separator">Faça seu login</div>
          <form>
            <input
              type="text"
              placeholder="Login"

            />
            <input
              type="text"
              placeholder="Senha"

            />
            <Button type="submit">
              <img src={signinIcon} alt="Icon signin" width="10%"/>
              Login
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}