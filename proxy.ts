import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export const proxy = NextAuth({
    ...authConfig,
    trustHost: true,
}).auth;
export default proxy;

export const config = {
    // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};