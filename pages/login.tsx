import { Button } from '@mui/material';
import { signIn, signOut } from 'next-auth/react';

export default function Login() {
  const handleGoogleLogin = async () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };
  return (
    <div>
      <Button onClick={() => handleGoogleLogin()}>Login G</Button>
    </div>
  );
}
