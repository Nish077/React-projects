import { IoMdAddCircle } from 'react-icons/io'
import Navigation from './components/Navigation'
import PeopleToFollow from './components/PeopleToFollow'
import TopicsList from './components/TopicsList'
import TrendsList from './components/TrendsList'
import { BlogProvider } from './shared/BlogContext'
import { useState } from 'react'
import { Blogs } from './types'
import Modal from './components/Modal'
import BlogForm from './components/BlogForm'
import ArticleList from './components/ArticleList'

const App = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blogs | null>(null);

  const openModalForNewBlog = (blog: Blogs) => {
    setEditingBlog(null);
    setModalOpen(true);
  }

  const openModalForEditBlog = (blog: Blogs) => {
    setEditingBlog(blog);
    setModalOpen(true);
  }


  return (
    <>
      <BlogProvider>
        <Navigation />

        <div className="flex justify-center">
          {/* main area */}
          <div className='mx-auto p-6'>
            <div  >
              <button
                onClick={openModalForNewBlog} className='ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4'>
                Add New Blog <IoMdAddCircle className='ml-[.5rem] ' />{" "}
              </button>

              {/* article List*/}
              <ArticleList onEdit={openModalForEditBlog} />



              {isModalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog ?? undefined}
                    onClose={() => setModalOpen(false)}
                  />
                </Modal>
              )}
            </div>
          </div>

          <div className='w-[30%]'>
            <PeopleToFollow />
            <TrendsList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </>
  )
}

export default App