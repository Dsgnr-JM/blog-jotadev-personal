import Markdown from 'markdown-to-jsx'
import { useState, useEffect } from 'react'
import Code from './Code'
import { Tags, Tag } from './Tags'
import { SkeletonPost } from './Skeleton'

function PostContainer ({ title }) {
  const [postContent, setPostContent] = useState(null)
  useEffect(() => {
    async function getData (title) {
      const data = await fetch(`http://localhost:5173/${'article_php'}.md`)
      const dataArticle = await data.text()
      return setPostContent(dataArticle)
    }
    getData()
  }, [])

  return (
    <article className='pt-24'>
      <div className='main'>
        <div className='w-full'>
          {postContent ? (
            <Markdown
              options={{
                overrides: {
                  li: {
                    props: {
                      className:
                        'text-xl mt-12 mb-1 font-bold tracking-wider dark:text-sky-400 text-blue-500'
                    }
                  },
                  p: {
                    props: {
                      className:
                        'text-sm dark:text-gray-50/85 text-gray-700/95 leading-6'
                    }
                  },
                  h1: {
                    props: {
                      className:
                        'font-extrabold text-2xl mb-1 dark:text-gray-100 text-gray-900 w-[70%]'
                    }
                  },
                  blockquote: {
                    props: {
                      className:
                        "relative flex my-3 before:content-[''] gap-1 before:w-[5px] before:h-auto before:bg-sky-500 after:dark:bg-sky-400 before:rounded-xl before:block  [&>p]:rounded [&>p]:py-2 [&>p]:px-1 [&>p]:leading-0 [&>p]:bg-gray-200/70 [&>p]:dark:bg-gray-700/70 w-full h-full [&>p]:flex-1 [&>p]:m-0"
                    }
                  },
                  Tags: {
                    component: Tags
                  },
                  Tag: {
                    component: Tag
                  },
                  code: {
                    component: Code
                  },
                  strong: {
                    props: {
                      className:
                      "[&>em]:font-normal [&>em]:font-mono [&>em]:not-italic [&>em]:px-1 [&>em]:dark:bg-gray-700 [&>em]:dark:text-white/80 [&>em]:bg-gray-300/70 [&>em]:text-dark/80 [&>em]:rounded "
                    }
                  }
                }
              }}
            >
              {postContent}
            </Markdown>
          ) : (
            <SkeletonPost />
          )}
        </div>
      </div>
    </article>
  )
}

export default PostContainer
