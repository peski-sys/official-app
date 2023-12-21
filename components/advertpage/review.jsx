import Image from "next/image"
import customer from "@/public/customer.jpg"

export default function review() {
    return (
        <section>
    <div className="md:px-12 lg:px-24 max-w-7xl relative items-center w-full px-5 py-12 mx-auto">
        <div className="lg:mx-auto flex flex-col w-full max-w-lg mb-12 text-center">
            <Image alt="testimonial" className="inline-block object-cover object-center mx-auto mb-8 rounded-full" width={80} height={80} src={customer}/>

            <p className="mx-auto text-base leading-relaxed text-gray-500">CarsAI excels at converting speech to text, summarizing content, and crafting interactive chatbots. Elevate communication effortlessly with our innovative technology. Drive the future with CarsAI!</p>
            <h2 className="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
        commercial AI
        <span href="#" className="lg:mb-0 font-semibold text-gray-200"> owner</span>
            </h2>
        </div>
    </div>
</section>
    )
}