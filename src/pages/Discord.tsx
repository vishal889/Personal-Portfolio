import Router from '@/helpers/routers';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Discord = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push(`${Router.ExternalRouter.Discord}`);
  }, []);

  return null;
};

export default Discord;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `${Router.ExternalRouter.Discord}`,
      permanent: false,
    },
  };
};
