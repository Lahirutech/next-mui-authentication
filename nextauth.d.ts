import { DefaultSession } from 'next-auth';
import { Role } from './src/types/authTypes';

declare module 'next-auth' {
  interface User {
    role?: Role;
  }
  interface Session extends DefaultSession {
    user?: User;
  }
}

// nextauth.d.ts
declare module 'next-auth/jwt' {
  interface JWT {
    role?: Role;
  }
}
