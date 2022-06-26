import Head from "next/head";
import { Card } from "../../../components/Card";
import { Scheme } from "../../../components/Scheme";
import { FormData } from '../../../styles/screen/AddUser';

export default function Users() {

  const handleCreateNewUser = () => {
    //Create new user    
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
              <input type="text" placeholder="Nome completo" />
              <input type="text" placeholder="Endereço de e-mail" />
              <input type="text" placeholder="Senha do usuário" />
              <select>
                <option value="" selected disabled>Selecione um cargo</option>
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