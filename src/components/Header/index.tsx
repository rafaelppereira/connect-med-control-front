import { format } from "date-fns";
import { Bell, Clock, GearSix, MagnifyingGlass } from "phosphor-react";
import { useAuth } from "../../hooks/useAuth";
import { HeaderContainer } from "./styles";

import ptBR from 'date-fns/locale/pt-BR';

export function Header() {
  const { user } = useAuth();

  const dateCurrent = new Date();
  const currentFormattedDate = format(dateCurrent, "EEEE' • 'd' de 'MMMM", {
    locale: ptBR
  });

  return (
    <HeaderContainer>
      <div className="datetime">
        <Clock size={20} />
        <time dateTime={currentFormattedDate} title={currentFormattedDate}>{currentFormattedDate}</time>
      </div>
      <div className="searchInput">
        <MagnifyingGlass size={17} />
        <input
          type="text" 
          placeholder="Pesquisar..."  
        />
      </div>

      <div className="profile">
        <div className="notifications">
          <button
            type="button"
          >
            <Bell size={24} />
          </button>
          <button
            type="button"
          >
            <GearSix size={24} />
          </button>
        </div>

        <div className="user">
          {user?.avatarURL ? (
            <img src={user?.avatarURL} alt={`Imagem de perfil de ${user?.avatarURL}`} />
          ) : (
            <div className="avatar">R</div>
          )}
          <div className="userInfo">
            <strong>{user?.name}</strong>
            <span>{user?.email}</span>
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}