export default function FourCards() {
    return (
        <>
        {/* One */}
    <div className="card w-64 h-52 bg-base-100 shadow-md mr-4">
    <figure className="px-10 pt-10">
      <span className=" font-bold text-5xl">105</span>
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Total <br />Calls</h2>
    </div>
  </div>
  
  {/* Two */}
  
  <div className="card w-64 h-52 bg-base-100 shadow-md mr-4">
    <figure className="px-10 pt-10">
      <span className=" font-bold text-5xl">12</span>
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Average <br />Time (mins)</h2>
    </div>
  </div>
  
  {/* Three */}
  
  <div className="card w-64 h-52 bg-base-100 shadow-md mr-4">
    <figure className="px-10 pt-10">
      <span className=" font-bold text-5xl">0.76</span>
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Sentiment <br />Score</h2>
    </div>
  </div>
  
  {/* Four */}
  
  <div className="card w-64 h-52 bg-base-100 shadow-md mr-4">
    <figure className="px-10 pt-10">
      <span className=" font-bold text-5xl text-red-600">-0.2% </span>
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Sentiment <br />Progression</h2>
    </div>
  </div>
</>  
    )
}