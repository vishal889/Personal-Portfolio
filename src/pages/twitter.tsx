import Router from '@/helpers/routers';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

const Twitter = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push(`${Router.ExternalRouter.Twitter}`);
  }, []);

  return null;
};

export default Twitter;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: `${Router.ExternalRouter.Twitter}`,
      permanent: false,
    },
  };
};
