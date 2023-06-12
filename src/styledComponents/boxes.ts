import styled from '@emotion/styled';
import { Box, Button } from '@mui/material';

export const LoginBox = styled(Box)({
  background: '#fff',
  padding: '30px 30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

export const LoginButton = styled(Button)({
  borderRadius: '30px',
  fontWeight: '500',
});
