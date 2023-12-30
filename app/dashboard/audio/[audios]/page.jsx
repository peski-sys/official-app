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
//HAVE TO USE AWS FUNCTIONS NOW
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
        <div className="bg-white rounded-lg p-6 shadow lg:col-span-2">
        <header className="mb-4">
            <h2 className="text-2xl font-bold">Summarization</h2>
        </header>
        <div className="mt-4"><hr />
        <div className="radial-progress mt-5" style={{ "--value": "70", "--size": "8rem", "--thickness": "1rem" }} role="progressbar">70%</div>
        </div>
        </div>
        <aside className="lg:col-span-1 lg:row-span-2">
          <Card className="bg-white rounded-lg p-1 shadow h-full">
            <CardHeader>
              <h3 className="text-xl font-bold">Transcription</h3>
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
            <h2 className="text-2xl font-bold">Chatbot</h2>
            <p className="mt-1 text-gray-600">Interact with our AI assistant</p>
          </div>
          <div className="h-72 w-full border rounded-md overflow-auto mb-4">
            <p className="p-4 text-sm leading-7">Your conversation with the AI will appear here.</p>
          </div>
          <div className="flex w-full items-center space-x-2">
            <Input className="flex-grow pt-1" placeholder="Type your message..." type="text" />
            <button type="submit" value="Submit" className="btn bg-blue-700 text-white hover:bg-blue-600">Submit</button>
          </div>
        </div>
      </section>
    </main>
    </div>
    </>
    )
}