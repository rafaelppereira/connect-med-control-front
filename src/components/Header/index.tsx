import { Bell, Clock, GearSix, MagnifyingGlass } from "phosphor-react";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="datetime">
        <Clock size={20} />
        <time dateTime="25 de julho de 2022" title="25 de julho de 2022">25 de julho de 2022</time>
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
          <div className="avatar">R</div>
          <div className="userInfo">
            <strong>Rafael Pereira</strong>
            <span>rafaelsantospereira03@gmail.com</span>
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}