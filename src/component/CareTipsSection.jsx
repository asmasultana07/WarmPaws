import React from "react";


const tipsData = [
  {
    id: 1,
    title: "Keep Your Pet Warm Indoors",
    description: "Ensure your pet stays cozy and away from cold floors by providing warm bedding.",
    icon: "🔥"
  },
  {
    id: 2,
    title: "Protect Their Paws",
    description: "Use paw balm or booties to protect paw pads from snow, ice, and salt.",
    icon: "🐾"
  },
  {
    id: 3,
    title: "Limit Outdoor Time",
    description: "Shorten walks during extremely cold weather to prevent hypothermia and frostbite.",
    icon: "❄️"
  },
  {
    id: 4,
    title: "Keep Them Dry",
    description: "Always dry your pet after coming inside, especially their paws and belly.",
    icon: "🧣"
  }
]

const CareTipsSection = () => {
    return(

     <div className="px-10 sm:px-20  md:px-40 mt-20">
        <div>
            <h2 className="font-bold text-blue-800 text-3xl text-center mb-10">Winter Care Tips for Pets</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {
        tipsData.map((tip) => (
          <div key={tip.id} className=" p-4  card bg-base-100 border-2 border-blue-900 shadow-lg">
            
              <p className="text-2xl">{tip.icon}</p>
              <p className="text-xl font-semibold text-blue-800 my-3">{tip.title}</p>
              <p >{tip.description}</p>
            
          </div>
        ))}
        </div>
           
     </div>
    )
}

export default CareTipsSection