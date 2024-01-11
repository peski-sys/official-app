import Image from "next/image"
import altimage from "@/public/heroalt.png"
import Link from "next/link"

export default function heroalt() {
    return (
        <section>
  <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
    <div className="flex w-full mx-auto text-left">
      <div className="relative inline-flex items-center mx-auto align-middle">
        <div className="text-center">
          <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-600 md:text-5xl lg:text-6xl lg:max-w-7xl giveTG">
            make every <br className="hidden lg:block"></br>
            audio count
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-500">leverage the power of AI to get the most <br /> out of your valuable sales calls</p>
          <div className="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
            <div className="mt-3 rounded-lg sm:mt-0">
            <Link href="/dashboard"><button className="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Get Started</button></Link>
            </div>
            <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
            <Link href="#features"><button className="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Features</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="intro">
      <div className="flex flex-col items-center justify-center pt-24 mx-auto rounded-lg lg:px-10 max-w-7xl">
        <Image className="object-cover object-center w-full rounded-xl border border-cyan-300 shadow-2xl" alt="hero" src={altimage} priority={true} />
      </div>
    </section>
  </div>
</section>
    )
}