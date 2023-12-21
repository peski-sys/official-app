import Image from "next/image"
import ftc from "@/public/featureCard.png"
import trans from "@/public/icons/transcript.png"
import chat from "@/public/icons/chatbot.png"
import senti from "@/public/icons/sentiment.png"
import cloud from "@/public/icons/cloud.png"
import seam from "@/public/icons/seamless.png"
import summ from "@/public/icons/summary.png"

export default function features() {
    return (
        <section id="features">
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={trans} alt="blog" height={200} width={200}/>

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Accurate Transcription</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Turns spoken words into text with precision, making sure it captures details accurately for thorough documentation and easy understanding.</p>

            </div>
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={chat} alt="blog" height={200} width={200}/>

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Interactive <br /> Chatbot</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Chatbot that talks back! It's smart and efficient in extracting key points, making conversations useful for your needs.</p>

            </div>
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={senti} alt="blog" height={200} width={200} />

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Sentiment <br />Analysis</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Understands feelings in words, helping to grasp user emotions for a better understanding of the client.</p>

            </div>
        </div>
    </div>

    <div className="relative items-center w-full px-5 py-18 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={cloud} alt="blog" height={200} width={200}/>

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Cloud Based <br />Data Storing</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Keeps your data safe and sound in the cloud, making it easy to access, share, and manage securely from anywhere.</p>

            </div>
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={seam} alt="blog" height={200} width={200}/>

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Seamless <br />Experience</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Easy to use! A smooth and friendly platform that feels natural, making your experience hassle-free and productive.</p>

            </div>
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={summ} alt="blog" height={200} width={200} />

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Automated Summarization</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Smart tech that quickly picks out the important stuff from long talks, giving you short and important summaries.</p>

            </div>
        </div>
    </div>
</section>
    )
}