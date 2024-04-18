import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <main className='w-full h-screen flex-center'>
            <SignUp 
                afterSignUpUrl={"/"}
                afterSignInUrl={"/"}
            />
        </main>
    );
};
export default SignUpPage;