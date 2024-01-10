import Link from "next/link"

export default function pricing() {
    return (
        <section id="pricing">
  <div className="relative items-center w-full py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
    <div className="flex flex-wrap items-start justify-center w-full gap-4 px-5 mx-auto lg:px-0">
      <div className="w-full xl:w-1/3 lg:w-2/6 md:text-center lg:text-left">
        <div className="flex flex-col p-8 lg:p-0">
          <strong className="mb-1 text-xs font-semibold tracking-widest text-blue-500 uppercase"> Straight Pricing. No added costs </strong>
          <span className="mb-8 text-2xl font-bold text-neutral-600 tracking-relaxed lg:text-5xl"> Pricing </span>
          <p className="mx-auto mb-4 text-xl font-light text-gray-500 text-opacity-70 lg:pr-10">Schedule a call with us to get a demo</p>
          <p className="mx-auto mb-2 text-xl font-light text-gray-500 text-opacity-70 lg:pr-10">Or Purchase our plan fixed for everyone. No Confusions. No added cost.</p>
        </div>
      </div>
      <div className="w-full xl:w-1/4 md:w-2/6">
        <div className="relative flex flex-col h-full p-8 bg-gray-50 rounded-xl hover:border-white">
          <span className="mb-4 text-base font-medium tracking-widest text-neutral-600 uppercase"> Not Sure? </span>
          <span className="flex items-center mb-8 text-base font-medium tracking-tight text-neutral-600"> Try and decide. </span>
          <div className="flex items-end text-3xl font-black leading-none text-neutral-600 lg:text-4xl">
            <span>$0 </span>
          </div>
          <ul>
            <li className="flex items-center mt-8 mb-2 text-base font-medium tracking-tight text-neutral-600">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>36 Hours of Full Access</strong>
            </li>
            <li className="flex items-center mb-2 text-base font-medium tracking-tight text-neutral-600">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Chatbot</strong>
            </li>
            <li className="flex items-center mb-2 text-base font-medium tracking-tight text-neutral-600">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Summary</strong>
            </li>
            <li className="flex items-center mb-2 text-base font-medium tracking-tight text-neutral-600">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Sentiment Analysis</strong>
            </li>
            <li className="flex items-center mb-2 text-base font-medium tracking-tight text-neutral-600">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Audio to Text</strong>
            </li>
          </ul>

          <div className="mt-8">
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><button className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white">Book a Demo</button></Link>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-1/4 md:w-2/6">  
        <div className="relative flex flex-col h-full p-8 bg-blue-600 rounded-xl hover:border-white">
          <span className="mb-4 text-base font-medium tracking-widest text-white uppercase"> Join US </span>
          <span className="flex items-center mb-8 text-base font-medium tracking-tight text-white"> Start Using Instantly </span>
          <div className="flex items-end text-3xl font-black leading-none text-white lg:text-4xl">
            <span>
              <span>$350</span>
              <del className="text-2xl font-normal text-white">$500</del>
            </span>
          </div>
          <ul>
            <li className="flex items-center mt-8 mb-2 text-base font-medium tracking-tight text-white">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Audio to Text</strong>
            </li>
            <li className="flex items-center mb-2 text-base font-medium tracking-tight text-white">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Chatbot</strong>
            </li>
            <li className="flex items-center mb-2 text-base font-medium tracking-tight text-white">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Summary</strong>
            </li>
            <li className="flex items-center mb-2 text-base font-medium tracking-tight text-white">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Sentiment Analysis</strong>
            </li>
            <li className="flex items-center mb-2 text-base font-medium tracking-tight text-white">
              <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Secure Cloud Storage</strong>
            </li>
          </ul>

          <div className="mt-8">
          <Link href="/dashboard"><button className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white">Create Account</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}