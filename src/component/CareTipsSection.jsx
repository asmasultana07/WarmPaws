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

     <div>
        <div>
        <h2 className="font-bold text-3xl text-center">Winter Care Tips for Pets</h2>

     </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {tipsData.map((tip) => (
          <div key={tip.id} className=" py-2 card bg-base-100 w-96 shadow-lg">
            
            </div>
            </div>
     </div>
    )
}

export default CareTipsSection