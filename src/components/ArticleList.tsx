import { useBlogs } from "../shared/BlogContext"
import { Blogs } from "../types"
import ArticleCard from "./ArticleCard";


interface ArticleListProps{
    onEdit : (blog : Blogs)=>void;
}
const ArticleList: React.FC<ArticleListProps> = ({onEdit}) => {
    const { blogs, deleteBlog} = useBlogs();
  return (
    <div className="ml-[5rem]">
        {blogs.map(blog =>(
            <ArticleCard key= {blog.id}
             article={blog} 
            onDelete={()=>deleteBlog(blog.id)}
            onEdit= {() => {onEdit(blog)}  }/>
        )
    )}
    </div>
  )
}

export default ArticleList