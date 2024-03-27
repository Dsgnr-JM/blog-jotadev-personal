import Markdown from 'markdown-to-jsx'
import { useState, useEffect } from 'react'
import Code from './Code'
import { Tags, Tag } from './Tags'
import { SkeletonPost } from './Skeleton'
import Footer from './Footer';
import Badge from './Badge'
import Author from './Author'

function PostContainer ({ title, file }) {
  const [postContent, setPostContent] = useState(null)
  const [links, setLinks] = useState([])
  useEffect(() => {
    window.scrollTo(0,0)
    
    async function getData (file) {
      const data = await fetch(`.${file}`)
      const dataArticle = await data.text()
      return setPostContent(dataArticle)
    }
    async function  fetchArticle  () {
      setPostContent(null)
      setLinks([])
      const fetching = await fetch("../data.json")
      const data = await fetching.json()
      const file = await data.find(i => i.title_article == title)
      const urls = [data[file.id - 1]?.title_article, data[file.id + 1]?.title_article]
      setLinks(urls)
      getData(await file.file)
    }
    fetchArticle()
  }, [title])

  return (
    <article className='pt-24'>
      <div className='main md:w-[50rem] w-full md:px-0 px-2'>
        <div className='w-full'>
          {postContent ? (
            <>
            <Markdown
              options={{
                overrides: {
                  li: {
                    props: {
                      className:
                        'text-2xl mt-8 pt-1 font-extrabold dark:text-sky-400 text-blue-500'
                    }
                  },
                  h2:{
                    props:{
                      className: '[font-size:1.65rem] mt-8 font-extrabold leading-[2.1rem] dark:text-white/90 text-black/90'
                    }
                  },
                  p: {
                    props: {
                      className:
                        'text-base dark:text-gray-50/85 text-gray-700/95 md:leading-8 leading-6 my-4'
                    }
                  },
                  h1: {
                    props: {
                      className:
                        'font-extrabold text-3xl dark:text-gray-100 text-gray-900 md:w-[72%] w-[90%] py-1'
                    }
                  },
                  blockquote: {
                    props: {
                      className:
                        "relative flex my-3 before:content-[''] flex gap-2 before:w-[5px] before:h-auto before:bg-sky-500 after:dark:bg-sky-400 before:rounded-xl before:block  [&>p]:rounded [&>p]:py-2 [&>p]:px-1 [&>p]:leading-0 [&>p]:bg-gray-200/90 [&>p]:dark:bg-gray-700/90 w-full h-full [&>p]:flex-1 [&>p]:m-0"
                    }
                  },
                  Tags: {
                    component: Tags
                  },
                  Tag: {
                    component: Tag
                  },
                  Badge: {
                    component: Badge
                  },
                  a:{
                    props:{
                      className: "dark:hover:text-sky-400 hover:text-blue-500 underline"
                    }
                  },
                  img:{
                    props:{
                      className: "w-full object-cover h-auto mb-2 rounded-md max-h-96"
                    }
                  },
                  code: {
                    component: Code
                  },
                  mark: {
                    props: {
                      className: "font-normal font-mono not-italic px-1 dark:bg-gray-700 dark:text-white/80 bg-gray-300/70 text-dark/80 rounded "
                    }
                  },
                  Author: {
                    component: Author
                  }
                }
              }}
            >
              {postContent}
            </Markdown>
            <Footer prevTitle={links[0]} nextTitle={links[1]}/>
            </>
          ) : (
            <SkeletonPost />
          )}
        </div>
      </div>
    </article>
  )
}

export default PostContainer
