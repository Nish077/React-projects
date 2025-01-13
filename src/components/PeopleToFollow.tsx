import { FaPeopleGroup } from "react-icons/fa6";
import UserCard from "./UserCard";

const peopleToFollow = [
    { name: "Alena Gouse", following: false },
    { name: "Ruben Bator", following: true },
    { name: "Aspen Stanton", following: false },
    { name: "Madelyn George", following: false },
  ];
const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold flex items-center text-lg mb-4">
           <FaPeopleGroup/> <span className=" px-3">  People whom to follow</span>
        </h3>

        <div className="space-y-2">
            {peopleToFollow.map((person, index)=>(
                <UserCard key={index} person={person}/>
            ))}
        </div>
    </div>
  );
}

export default PeopleToFollow