import { currentUser} from "@clerk/nextjs";

export default async function Dash() {

    const user = await currentUser()

    return (
        <>
        <div className="flex flex-col h-screen flex-1">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    <h1 className="text-lg text-neutral-600">Overview Page</h1>
                </div>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    <div className="py-4">
                        <div className="rounded-lg bg-neutral-50 h-96">{user.id}</div>
                    </div>
                </div>
            </div>
        </main>
    </div>
        </>
    )
}
