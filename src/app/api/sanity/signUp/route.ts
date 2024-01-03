import sanityClient from '@/lib/sanity';
import { signUpHandler } from 'next-auth-sanity';

// @ts-ignore
export const POST = signUpHandler(sanityClient);
