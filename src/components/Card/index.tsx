import { ReactNode } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function Card({ title, description, children }: CardProps) {
  return (
    <CardContainer>
      <div className="title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <main>
        {children}
      </main>
    </CardContainer>
  );
}