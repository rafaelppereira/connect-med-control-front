import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { Card } from "../../../components/Card";
import { Scheme } from "../../../components/Scheme";
import { api } from "../../../services/api";
import { FormData } from '../../../styles/screen/AddUser';

export default function Users() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [avatarurl, setAvatarurl] = useState('');

  const handleCreateNewUser = () => {
    //Create new user    
    const data = {
      email,
      password,
      name,
      role,
      avatarurl
    }
    api.post('/register', data).then((res) => {

    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <Head>
        <title>Adicionar um novo usuário | Connect Med Control</title>
      </Head>
      <Scheme>
        <div className="cardFlexRow">
          <Card 
            title="Adicionar usuário"
            description="Adicione novos usuários ao painel"
          >
            <FormData>
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Nome completo" />
              <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Endereço de e-mail" />
              <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Senha do usuário" />
              <input onChange={(e) => setAvatarurl(e.target.value)} type="text" placeholder="Url de imagem de perfil" />
              <select onChange={(e) => setRole(e.target.value)}>
                <option defaultValue="" disabled>Selecione um cargo</option>
                <option value={1}>Usuário</option>
                <option value={2}>Colaborador(a)</option>
                <option value={3}>Administrador</option>
                <option value={4}>Técnico de manutenção</option>
              </select>
              <button type="submit">
                Cadastrar usuário
              </button>
            </FormData>
          </Card>
          <Card 
            title="Métricas"
            description="Dados relacionados a usuários"
          >
            Conteúdo
          </Card>
        </div>
      </Scheme>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/auth',
        permanent: true,
      }
    }
  }

  return {
    props: {}
  }
}