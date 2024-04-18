"use client";

import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SignInPage = () => {
    const { user } = useUser();
    const router = useRouter();

    if(user) {
        router.push("/")
        ;
    }
    return (
        <main className='w-full h-screen flex-center'>
            <SignIn 
                afterSignInUrl={"/"}
                afterSignUpUrl={"/"}
                redirectUrl={"/"}
            />
        </main>
    );
};
export default SignInPage;