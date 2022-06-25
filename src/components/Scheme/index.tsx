import { ReactNode } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { SchemeContainer } from "./styles";

interface SchemeProps {
  children: ReactNode;
}

export function Scheme({ children }: SchemeProps) {
  return (
    <SchemeContainer>
      <Sidebar />
      <main className="main">
        <Header />
        <div className="pageContent">
          {children}
        </div>
      </main>
    </SchemeContainer>
  );
}