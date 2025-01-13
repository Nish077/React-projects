const topics = [
    "Technology",
    "Design",
    "Crypto ",
    "NFT",
    "Personal ",
    "Reading",
  ];

const TopicsList = () => {
  return (
    <div className="bg-white rounded-lg shadow mt-4 p-3">
        <h3 className="font-semibold text-lg mb-4">Topics for you</h3>
        <div className="flex flex-wrap gap-1 ">
        {topics.map((topic, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-200
             text-gray-700 text-sm rounded-full 
             cursor-pointer
             hover:bg-gray-300"
          >
            {topic}
          </span>
        ))}
        </div>
    </div>
  )
}

export default TopicsList