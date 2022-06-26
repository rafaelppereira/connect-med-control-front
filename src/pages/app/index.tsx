import { GetServerSideProps } from "next";
import Head from "next/head";
import { Card } from "../../components/Card";
import { Scheme } from "../../components/Scheme";
import { ChartSSR, options } from "../../lib/graph";

export default function App() {

  const series = [
    { name: 'Clientes', data: [0, 20, 20, 40, 50, 20, 0] }
  ];

  return (
    <>
      <Head>
        <title>Connect Med Control | Gerenciamento de medicamentos</title>
      </Head>
      <Scheme>
        <section className="cardFlexCol">
          <div className="cardFlexRow">            
            <Card 
              title="Históricos de requerimentos"
              description="Resultados de requerimentos para amostras"
            > 
              Card 01
            </Card>
            <Card 
              title="Históricos de requerimentos"
              description="Resultados de requerimentos para amostras"
            >
              Card 01
            </Card>
          </div>
          <Card 
            title="Históricos de requerimentos"
            description="Resultados de requerimentos para amostras"
          >
            Card 01
          </Card>
        </section>
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