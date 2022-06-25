import { GetServerSideProps } from "next";

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const authenticated = false;

  if (authenticated === false) {
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
