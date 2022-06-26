import Link from "next/link";
import { useRouter } from "next/router";

import { NavLink } from "./NavLink";
import { SidebarAside } from "./styles";
import Cookie from 'js-cookie';

export function Sidebar() {
  const router = useRouter();

  const handleSignOutMethod = () => {
    Cookie.remove('token');
    router.push('/auth');
  }

  return (
    <SidebarAside>
      <div className="topside">
        <Link href="/app">
          <a>
            <img src="/assets/logo.svg" alt="Logo da Connect Med Control" />
          </a>
        </Link>
      </div>
      <div className="menuContainer">
        <div className="menu">
          <Link href="/relatorios">
            <a className="reportsLink">
              Relatórios
            </a>
          </Link>

          <div className="itemsLink">
            <NavLink url="/app">Dashboard</NavLink>
            <NavLink url="/app/calendario">Calendário</NavLink>
            <strong className="itemsTitle">Gerenciamento</strong>
            <NavLink url="/app/gerenciar/unidades">Unidades</NavLink>
            <NavLink url="/app/gerenciar/medicamentos">Medicamentos</NavLink>
            <strong className="itemsTitle">Adicionar</strong>
            <NavLink url="/app/adicionar/usuarios">Usuários</NavLink>
            <NavLink url="/app/adicionar/prescricao">Prescrição</NavLink>
          </div>

        </div>
        <div className="leave">
          <button
            type="button"
            onClick={handleSignOutMethod}
          >
            Desconectar
          </button>
        </div>
      </div>
    </SidebarAside>
  )
}