import { currentUser} from "@clerk/nextjs";


export default async function Dash() {

    const user = await currentUser()

    return (
        <>
        <div className="flex flex-col h-screen flex-1">
        <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                    <h1 className=" text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-yellow-100 text-center mb-10 rounded-xl p-2">Overall Stats</h1>
                </div>
            </div>
            <div className="justify-center items-center grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">

    <div className="card w-64 h-52 bg-base-100 shadow-md mr-4">
  <figure className="px-10 pt-10">
    <span className=" font-bold text-5xl">105</span>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Total <br />Calls</h2>
  </div>
</div>

<div className="card w-64 h-52 bg-base-100 shadow-md mr-4">
  <figure className="px-10 pt-10">
    <span className=" font-bold text-5xl">12</span>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Average <br />Time (mins)</h2>
  </div>
</div>

<div className="card w-64 h-52 bg-base-100 shadow-md mr-4">
  <figure className="px-10 pt-10">
    <span className=" font-bold text-5xl">0.76</span>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Sentiment <br />Score</h2>
  </div>
</div>

<div className="card w-64 h-52 bg-base-100 shadow-md mr-4">
  <figure className="px-10 pt-10">
    <span className=" font-bold text-5xl text-red-600">-0.2% </span>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Sentiment <br />Progression</h2>
  </div>
</div>


            </div>
        </main>
        
    </div>
        </>
    )
}
