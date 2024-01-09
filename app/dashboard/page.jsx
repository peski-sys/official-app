import { currentUser} from "@clerk/nextjs";
import CardsBottom from "@/components/dashpage/bottomcards";
import CarouselTwo from "@/components/dashpage/twocarousel";


export default async function Dash() {

    const user = await currentUser()

    return (
        <>
        <div className="flex flex-col h-screen flex-1">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          {/* Heading Start */}
            <div className="py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    <h1 className=" text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-yellow-100 text-center mb-5 rounded-xl p-2">Overall Stats</h1>
                </div>
            </div>
            {/* Heading End */}

  {/* Cards ----> */}
  <div className="justify-center items-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <CarouselTwo /> 
      <CardsBottom />
  </div>
  {/* End -----> */}

    </main>
    </div>
        </>
    )
}
