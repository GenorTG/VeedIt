import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <main className='w-full h-screen flex-center'>
            <SignUp 
                afterSignUpUrl={"/"}
                afterSignInUrl={"/"}
                redirectUrl={"/"}
            />
        </main>
    );
};
export default SignUpPage;