import React from "react"

export default function Movie(props){

  let color

  if(props.vote_average < 5){
    color = "text-[#B81D13]"
  }else if(props.vote_average > 8){
    color = "text-[#008450]"
  }else{
    color = "text-[#EFB700]"
  }

  return (
    <div className="group w-[300px] m-5 bg-[#23538c] shadow-2xl relative overflow-hidden">
      <img src={`https://image.tmdb.org/t/p/w500${props.poster_path}`} />
      <p className="w-[300px] border-black duration-300 absolute top-full group-hover:translate-y-[-100%] bg-white p-6"><span className="font-bold mb-4">Overview</span><br></br>{props.overview}</p>
      <div className="flex justify-between">
        <h1 className="m-5 text-white text-xl w-[250px]">{props.title}</h1>
        <div className="m-5 w-24 h-8 flex justify-center items-center rounded bg-[#112D4E]">
          <small className={`text-lg font-bold ${color}`}>{props.vote_average}</small>
          </div>
        </div>
      </div>
  )
}