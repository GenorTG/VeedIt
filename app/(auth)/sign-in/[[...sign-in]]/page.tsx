import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <main className='w-full h-screen flex-center'>
            <SignIn 
                afterSignInUrl={"/"}
            />
        </main>
    );
};
export default SignInPage;