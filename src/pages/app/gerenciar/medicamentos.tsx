import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Card } from "../../../components/Card";
import { CardManagement } from "../../../components/CardManagement";
import { Scheme } from "../../../components/Scheme";
import { SpinLoader } from "../../../components/Spin";
import { api } from "../../../services/api";

interface ListProps {
  id: number;
  name: string;
  url: string;
}

export default function ManageMedications() {
  const [list, setList] = useState<ListProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get('/images').then((res) => {
      setList(res.data.list);
      setIsLoading(false);
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
            {isLoading ? (
              <SpinLoader />
            ) : (
              <div className="flex-grid">
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
              </div>
            )}
          </Card>
          <Card 
            title="Tracking de dados"
            description=""
          >
            dawdawd
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
