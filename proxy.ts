import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export const proxy = NextAuth({
    ...authConfig,
    trustHost: true,
    secret: process.env.AUTH_SECRET || process.env.MY_AUTH_SECRET,
}).auth;
export default proxy;

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};