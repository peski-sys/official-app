import Image from "next/image"
import ftc from "@/public/featureCard.png"
import trans from "@/public/icons/Atranscript.png"
import chat from "@/public/icons/Achatbot.png"
import senti from "@/public/icons/Asentiment.png"
import cloud from "@/public/icons/Acloud.png"
import seam from "@/public/icons/Aseamless.png"
import summ from "@/public/icons/Asummary.png"

export default function features() {
    return (
        <section id="features">
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={trans} alt="blog" height={200} width={200}/>

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Accurate Transcription</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia architecto corrupti explicabo autem ipsa iste natus voluptas accusantium, nesciunt nihil perferendis a eaque facilis necessitatibus nobis, enim nisi vitae? Necessitatibus!</p>

            </div>
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={chat} alt="blog" height={200} width={200}/>

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Interactive <br /> Chatbot</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit unde laboriosam possimus ad nemo dicta placeat eveniet optio earum rerum, iusto amet magni expedita, porro eligendi sequi ut saepe!</p>

            </div>
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={senti} alt="blog" height={200} width={200} />

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Sentiment <br />Analysis</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum laudantium ea consequatur ullam, nobis debitis inventore, minima omnis odio nisi corporis maxime? Molestiae perspiciatis molestias, a iure corrupti sequi tempore?</p>

            </div>
        </div>
    </div>

    <div className="relative items-center w-full px-5 py-18 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={cloud} alt="blog" height={200} width={200}/>

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Cloud Based <br />Data Storing</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium corrupti excepturi quo delectus ratione sed deserunt quidem, est pariatur a cupiditate sit maxime provident libero quia. Assumenda beatae iure dolores.</p>

            </div>
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={seam} alt="blog" height={200} width={200}/>

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Seamless <br />Experience</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae neque repudiandae assumenda consequuntur distinctio, quos est dolorum at sunt saepe ipsa blanditiis qui inventore doloribus animi illum cumque possimus.</p>

            </div>
            <div className="p-6">
                <Image className="object-contain object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={summ} alt="blog" height={200} width={200} />

                <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">Automated Summarization</h1>
                <p className="mx-auto text-base leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequatur porro quas odio rem, nemo possimus nobis necessitatibus, a deserunt dolore corporis est impedit sunt assumenda alias, magni ratione nihil.</p>

            </div>
        </div>
    </div>
</section>
    )
}