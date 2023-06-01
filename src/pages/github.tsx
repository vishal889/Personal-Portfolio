import Router from '@/helpers/routers';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Github = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push(`${Router.ExternalRouter.Github}`);
  }, []);

  return null;
};

export default Github;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `${Router.ExternalRouter.Github}`,
      permanent: false,
    },
  };
};
