"use server"
import { signIn } from '~auth';

export default async function GoogleAuthAction() {
  await signIn('google',{
    redirect:true,
    redirectTo: '/auth/verify-request'
  });
}
