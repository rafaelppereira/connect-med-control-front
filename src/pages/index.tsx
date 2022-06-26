import { GetServerSideProps } from "next";

export default function Home() {
  return null;
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
  } else {
    return {
      redirect: {
        destination: '/app',
        permanent: true,
      }
    }
  }
}
