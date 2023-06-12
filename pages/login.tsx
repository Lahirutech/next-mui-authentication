import { Button, Box, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';
import { LoginBox, LoginButton } from '../src/styledComponents/boxes';
import Image from 'next/image';
import google from '../public/assets/google.png';
export default function Login() {
  const handleGoogleLogin = async () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };
  return (
    <LoginBox>
      <Image
        src={'/assets/logo.png'}
        alt='signing'
        width={50}
        height={50}
      />
      <Typography>Signing in</Typography>
      <Button onClick={() => handleGoogleLogin()}>Login G</Button>
      <Button onClick={() => handleGoogleLogin()}>Login G</Button>
      <LoginButton
        variant='outlined'
        startIcon={
          <Image
            src={google}
            alt=''
            width={20}
            height={20}
          />
        }
      >
        Signing in with Google
      </LoginButton>
    </LoginBox>
  );
}
