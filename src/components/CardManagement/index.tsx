import { CardManagementContainer } from "./styles";

interface CardManagementProps {
  clinicName: string;
  url: string;
  name: string;
  status: boolean;
}

export function CardManagement({ clinicName, url, name, status }: CardManagementProps) {
  return (
    <CardManagementContainer>
      <div className="topside">
        <span>{clinicName}</span>
      </div>
      <img src={url} alt={name} />
      <div className="bottomside">
        <span>{name}</span>
        <h1>Liberação 403</h1>
        {status ? (
          <strong className="active">Aprovado</strong>
          ) : (
          <strong>Aguardando aprovação</strong>
        )}
      </div>
    </CardManagementContainer>
  )
}