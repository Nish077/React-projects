
import { FaUserCircle } from "react-icons/fa"

interface People{
    name: string,
    following: boolean,
}
interface Usercard{
    person: People,
}

const UserCard = ({ person }: Usercard) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <FaUserCircle className="text-3xl mr-3 text-gray-500" />
                <span>{person.name}</span>
            </div>
            <button
                className={` py-1 text-sm rounded-full ${person.following ? "bg-black px-2 text-white" : "bg-gray-200 px-4 text-gray-700"} `}>
                {person.following ? "Following" : "Follow"}
            </button>
        </div>
    );
}

export default UserCard