import { SignUp } from "@clerk/nextjs";

export default function signFirst() {
    return (
        <div className="flex items-center justify-center h-screen">
            <SignUp />
        </div>
    )
}