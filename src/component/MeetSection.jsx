import React from "react";

const meetData = [
  {
    id: 1,
    name: "Dr. Olivia Smith",
    specialization: "Veterinary Nutrition Specialist",
    experience: "5 Years",
    image: "https://i.postimg.cc/7hd4PYKj/m1.jpg",
  },
  {
    id: 2,
    name: "Michael Johnson",
    specialization: "Pet Grooming Expert",
    experience: "3 Years",
    image: "https://i.postimg.cc/sgpzyz7L/m2.jpg",
  },
  {
    id: 3,
    name: "Sarah Williams",
    specialization: "Animal Behavior Trainer",
    experience: "7 Years",
    image: "https://i.postimg.cc/RZ1kyRxw/m3.jpg",
  },
];

const MeetSection = () => {
  return (
    <div className="px-10 md:px-30 mt-10">
      <h2 className="font-bold text-3xl text-center">Meet Our Expert Vets</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {meetData.map((vet) => (
          <div key={vet.id} className=" py-2 card bg-base-100 w-96 shadow-lg">
            <figure className="px-10 pt-10">
              <img
                src={vet.image}
                alt={vet.name}
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div className=" card-body items-center text-center">
              <h2 className="card-title text-blue-900 font-bold text-2xl ">{vet.name}</h2>
              <p className="font-semibold text-blue-800 text-[16px]">{vet.specialization}</p>
              <p className="font-semibold text-blue-500">{vet.experience} Exp.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Book Appointment</button>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
};

export default MeetSection;
