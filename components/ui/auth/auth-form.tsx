"use client";


import React, { useActionState } from 'react';
import { Button, Input, Divider } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { AulliIcon,AulliWordMark } from "~components/icons";
import ResendAuthAction from '~actions/auth/sign-in-resend';
import GoogleAuthAction from '~actions/auth/sign-in-google';
import Loader from '../loader';
import {toast } from 'sonner'

export default function Component() {
   const [error, action, isPending] = useActionState(
    async (_:unknown, formData:FormData) => {
      const email = formData.get('email');
      if (email) {
        try {
          await ResendAuthAction(email);
        } catch (err:any) {
          console.log(err)
          return err.message;  
        }
       }
       if (error) toast.warning(error);
    },
    null
  );
   const [googleError, googleAction, googleIsPending] = useActionState(
    async () => {
      await GoogleAuthAction();
      if (googleError) toast.warning(googleError);
    }, null
  );



  return (
    <div className="flex h-full flex-col w-80 items-center justify-center p-4">
      <div className="flex flex-col items-center pb-1 space-y-3">
        <AulliWordMark  />
        <div className={'text-center'}>
        <p className="text-3xl font-bold font-gilroy text-foreground">Access Your Account</p>
        <p className="text-sm text-default-500 font-medium font-inter">Instant Access via Magic Link or Oauth</p>
          </div>
      </div>
      <div className="mt-2 flex w-full flex-col gap-6 py-6">
        <form className="flex flex-col gap-3" action={action}>
         <Input
         name={'email'}
              isClearable
              type="email"
              label="Email"
              variant="bordered"
              disabled={isPending}
              className="max-w-xl"
            />
          <Button color="primary" type="submit" className={'font-semibold text-center hover:ring-lima-500 ring-offset-2'} radius={'md'} disabled={isPending}>
            {isPending ? <Loader/> : <span>Continue with email</span>}
          </Button>
        </form>
        <div className="flex items-center gap-4">
          <Divider className="flex-1" />
          <p className="shrink-0 text-tiny text-default-500">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">
          <form action={googleAction} className={'w-full hover:ring-lima-500 ring-offset-2'}>

          <Button
            startContent={<Icon icon="flat-color-icons:google" width={24} />}
            variant="bordered"
            className={'w-full '}
              type={'submit'}
              disabled={googleIsPending}
          >
            Continue with Google
          </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
