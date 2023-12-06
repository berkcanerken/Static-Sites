import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signIn } from '../../../services/auth';

const strapiUrl = process.env.STRAPI_URL;

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Sign in with Email',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        try {
          const { user, jwt } = await signIn({
            email: credentials.email,
            password: credentials.password,
          });

          return { ...user, jwt };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      const { id, jwt } = token;

      const resolvedSession = {
        ...session,
        id,
        jwt,
      }

      return Promise.resolve(resolvedSession);
    },
    jwt: async ({ token, user, account }) => {
      const isSignIn = !!user;

      if (isSignIn && account) {
        const response = await fetch(
          `${strapiUrl}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
        );
        const data = await response.json();

        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      
      return Promise.resolve(token);
    },
  },
});