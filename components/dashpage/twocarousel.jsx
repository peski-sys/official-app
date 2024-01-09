import ArrClientCaller from "@/components/dashpage/chmain";
import ArrSentiment from "@/components/dashpage/chsentiment";

export default function TwoCarousel() {
    return (
        <div className=" col-span-4">

        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full mt-5 mb-5">
          <ArrClientCaller />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
      
        <div id="slide2" className="carousel-item relative w-full mt-5 mb-5">
          <ArrSentiment />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
      </div>
      
      </div>
    )
}