"use client"
import { usePathname } from "next/navigation";
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"


export default function audios() {

    const returnPath = () => {
        const router = usePathname();
        const pathParts = router.split('/');
        const lastPart = pathParts[pathParts.length - 1];

        return lastPart
    }

    // const btnPress = () => {
    //     let prom = document.getElementById("queryForChatbot").value;
    //     if(prom != "" ) {
    //         return (
    //             <div className="chat chat-start">
    //             <div className="chat-bubble">{prom}</div>
    //             </div>
    //         )
    //     }
    // }

    return (
    <>
    <div className="flex flex-col h-screen flex-1">
    <main className="container mx-auto p-6">
    <header className="mb-6 flex justify-between items-center">
        <div>
        <h1 className="text-3xl font-bold">Title : {returnPath()}</h1>
        <p className="mt-2 text-gray-600">Description</p>
        </div>
        <audio className="mb-4 mr-14" controls controlsList="noplaybackrate">
        <source src="/audio-file.mp3" type="audio/mpeg"/>
        </audio>
    </header>
    

    <section className="grid lg:grid-cols-3 gap-6">

        <div className="bg-white rounded-lg p-4 shadow lg:col-span-2">
        <header className=" mb-2">
            <h2 className="text-2xl font-bold">Summarization 🗒️</h2>
        </header>
        <div className="mt-9">
        <div className="flex items-center mt-2 mb-7">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, officia illo repudiandae excepturi dignissimos cupiditate voluptates earum. Iure suscipit quisquam asperiores nesciunt ducimus magnam exercitationem nihil vero dolorum voluptas. Eos?</div>
        </div>
        </div>
        <hr />
        <header className="mb-2 mt-5">
            <h2 className="text-2xl font-bold">Sentiment Analysis 🤔</h2>
        </header>
        <div className="mt-9">
        <div className="flex items-center mt-2">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, officia illo repudiandae excepturi dignissimos cupiditate voluptates earum. Iure suscipit quisquam asperiores nesciunt ducimus magnam exercitationem nihil vero dolorum voluptas. Eos?</div>
        </div>
        </div>
        </div>
        
        <aside className="lg:col-span-1 lg:row-span-2">
        <Card className="bg-white rounded-lg pt-1 shadow h-full">
            <CardHeader>
            <h3 className="text-lg font-bold">Transcription 🔉</h3>
            </CardHeader>
            <CardContent className="pt-1">
            <div className=" h-screen w-full border rounded-md overflow-auto">
                <p className="p-4 text-sm leading-7">The transcription of the audio file will appear here.</p>
            </div>
            </CardContent>
        </Card>
        </aside>
        <div className="bg-white rounded-lg p-6 shadow lg:col-span-2">
        <div className="mb-4">
            <h2 className="text-2xl font-bold">Chatbot 🤖</h2>
            <p className="mt-1 text-gray-600">Interact with our AI assistant</p>
        </div>
        <div className="h-72 w-full border rounded-md overflow-auto mb-4">
            <div className="p-4 text-sm leading-7">
            <div className="chat chat-start">
                <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
            </div>
            <div className="chat chat-end">
            <div className="chat-bubble">You underestimate my power!</div>
            </div>
            </div>
            <div className="chat chat-end">
            <div className="chat-bubble">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit nemo at itaque. Natus, soluta. Accusamus odio voluptatem, impedit assumenda minima, obcaecati doloribus optio perferendis officia voluptatum illo? Quibusdam, pariatur.</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
            </div>
            <div className="chat chat-start">
                <div className="chat-bubble">It's over Anakin, <br/>I have the high ground.</div>
            </div>
        </div>
        <div className="flex w-full items-center space-x-2">
            <Input className="flex-grow pt-1" placeholder="Type your message..." type="text" id="queryForChatbot"/>
            <button type="submit" value="Submit" className="btn bg-blue-700 text-white hover:bg-blue-600">Submit</button>
        </div>
        </div>
    </section>
    </main>
    </div>
    </>
    )
}