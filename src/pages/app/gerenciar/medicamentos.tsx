import Head from "next/head";
import { useEffect, useState } from "react";
import { Card } from "../../../components/Card";
import { CardManagement } from "../../../components/CardManagement";
import { Scheme } from "../../../components/Scheme";
import { api } from "../../../services/api";

interface ListProps {
  id: number;
  name: string;
  url: string;
}

export default function ManageMedications() {
  const [list, setList] = useState<ListProps[]>([]);

  useEffect(() => {
    api.get('/images').then((res) => {
      setList(res.data.list);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <>
      <Head>
        <title>Gerenciar medicamentos | Connect Med Control</title>
      </Head>
      <Scheme>
        <div className="cardFlexCol">
          <Card 
            title="Gerenciamento de medicamentos"
            description="Gerencie os medicamentos por status"
          >
            {list.map(item => {
              return (
                <CardManagement 
                  key={item.id}
                  clinicName="São Gerônimo"
                  name={item.name}
                  url={item.url}
                  status={true}
                />
              )
            })}
          </Card>
        </div>
      </Scheme>
    </>
  )
}
