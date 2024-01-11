import { SignIn } from "@clerk/nextjs";

export default function signInside() {
    return (
        <div className="flex items-center justify-center h-screen">
            <SignIn />
        </div>
    )
}