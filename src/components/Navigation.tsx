import { FaSearch, FaUserCircle } from "react-icons/fa"


const Navigation = () => {
    return (
        <nav className="border-2 border-gray-600 flex items-center text-black justify-between">
            <div className="flex items-center border-2 rounded-full px-4 py-2 max-w-md ml-[5rem]">
                <FaSearch/>
                <input type="text" placeholder="search..." className="bg-transparent outline-none w-full" />
            </div>

            <section className="flex items-center mr-[5rem]">
                <FaUserCircle className="text-3xl m-2"/>

            </section>
        </nav>
    )
}

export default Navigation