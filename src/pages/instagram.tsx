import Router from '@/helpers/routers';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Instagram = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push(`${Router.ExternalRouter.Instgram}`);
  }, []);

  return null;
};

export default Instagram;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `${Router.ExternalRouter.Instgram}`,
      permanent: false,
    },
  };
};
