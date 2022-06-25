import Link from "next/link";
import { GooglePodcastsLogo } from "phosphor-react";
import { NavLink } from "./NavLink";
import { SidebarAside } from "./styles";

export function Sidebar() {

  const handleSignOutMethod = () => {
    console.log('Desconectado');
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