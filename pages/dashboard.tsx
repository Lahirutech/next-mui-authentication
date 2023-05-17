import { GetServerSideProps } from 'next';
import { Session } from 'next-auth/core/types';
import { getSession, signOut } from 'next-auth/react';
import React from 'react';

export default function Dashboard({ session }: any) {
  console.log('session', session);
  return (
    <div>
      My Dashboard
      <button onClick={() => signOut({ callbackUrl: '/login' })}>
        Sign out
      </button>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
