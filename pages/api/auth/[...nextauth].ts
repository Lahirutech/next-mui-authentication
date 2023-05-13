import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import connectMongo from '../../../server/db/config';
import { getUser } from '../../../server/db/operations/common';
import { UserType } from '../../../types/serverTypes';
import Users from '../../../server/db/model/schema';
import { Role } from '../../../types/authTypes';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      connectMongo().catch((_error) => {
        error: 'Connection Failed...!';
      });
      if (user) {
        const result = await getUser(user as UserType);
        if (!result) {
          // insert the user with user role
          const new_user = new Users({
            name: user.name,
            email: user.email,
            role: Role.user,
          });
          new_user.save(function (err: any) {
            if (err) console.log(err);
          });
        } else {
          if (token) {
            token.role = result.role;
          }
        }
      }

      return token;
    },

    async session({ session, user, token }) {
      if (token && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
});
