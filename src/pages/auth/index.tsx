import Head from "next/head";
import { AuthContainer, Box, FormInput, InputContainer, SignInButton } from "../../styles/screen/Auth";

import { User, Lock, Check } from "phosphor-react";
import { useAuth } from "../../hooks/useAuth";

export default function Auth() {
  const { 
    handleSignInWithEmailAndPassword,
    setEmail,
    setPassword
  } = useAuth();

  return (
    <>
      <Head>
        <title>Faça login na plataform | Connect Med Control</title>
      </Head>
      <AuthContainer> 
        <img src="/assets/logo.svg" alt="Logo Connect Med Control" />
        <Box>
          <div>
            <h2>Acesse sua conta</h2>
            <p>Use suas credenciais para acessar</p>
          </div>

          <FormInput method="post" onSubmit={handleSignInWithEmailAndPassword}>
            <InputContainer>            
              <div className="wrapper">
                <User size={18} color="#818181" />
                <input onChange={(e) => setEmail(e.target.value)} required type="text" placeholder="E-mail credenciado" />
              </div>
              <div className="wrapper">
                <Lock size={18} color="#818181" />
                <input onChange={(e) => setPassword(e.target.value)} required type="password" placeholder="Senha" />
              </div>
            </InputContainer>
            <div className="connected">
              <div>
                <label>
                  <input type="checkbox" hidden />
                  <div className="checkbox">
                    <Check size={10} color="#ffffff" />
                  </div>
                  <span>Permanecer conectado por 2 dias</span>
                </label>
              </div>
              <a href="#">Esqueceu a senha?</a>
            </div>

            <SignInButton type="submit">
              Entrar na plataforma
            </SignInButton>
          </FormInput>
        </Box>
        <p className="copyright">@connectmedcontrol  • 2022 • Privacidade e termos</p>
      </AuthContainer>
    </>
  )
}