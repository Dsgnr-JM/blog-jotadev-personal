function SkeletonList() {
  return (
    <div role='status' className='space-y-2.5 animate-pulse w-full pt-4'>
      <div className='flex items-center w-full flex-col gap-4'>
        <div className='h-11 bg-gray-200 rounded-md dark:bg-gray-500 w-full'></div>
        <div className='h-11 bg-gray-200 rounded-md dark:bg-gray-500 w-full'></div>
        <div className='h-11 bg-gray-200 rounded-md dark:bg-gray-500 w-full'></div>
        <div className='h-11 bg-gray-200 rounded-md dark:bg-gray-500 w-full'></div>
      </div>
    </div>
  )
}

function SkeletonHot () {
  return <>
    <div className="animate-pulse flex py-2 px-4 bg-gray-200 dark:text-gray-600 dark:bg-white/5 rounded-md my-3 w-full h-10"></div>
    <div className="animate-pulse flex py-2 px-4 bg-gray-200 dark:text-gray-600 dark:bg-white/5 rounded-md my-3 w-full h-10"></div>
    <div className="animate-pulse flex py-2 px-4 bg-gray-200 dark:text-gray-600 dark:bg-white/5 rounded-md my-3 w-full h-10"></div>
    <div className="animate-pulse flex py-2 px-4 bg-gray-200 dark:text-gray-600 dark:bg-white/5 rounded-md my-3 w-full h-10"></div>
  </> 
}

function SkeletonPost() {
  return (
    <div role='status' className='space-y-2.5 animate-pulse w-full'>
      <div className='flex items-center w-full max-w-[110px] gap-1 pb-1'>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
        <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full'></div>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
      </div>
      <div className='flex items-center w-full max-w-[70%] mb-4'>
        <div className='h-8 bg-gray-300 rounded-md dark:bg-gray-600 w-full'></div>
      </div>
      <div className="pb-4">
        <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-36'></div>       
      </div>
      <div className='flex items-center w-full h-64 gap-2'>
        <div className='h-full bg-gray-200 rounded-xl dark:bg-gray-700 w-full'></div>
      </div>
      <div className='flex items-center w-full gap-2'>
        <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full'></div>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-32'></div>
      </div>
      <div className='flex items-center w-full mt-2 gap-2'>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-[40%]'></div>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-24'></div>
        <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full'></div>
      </div>
      <div className='flex items-center w-full gap-2'>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
        <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-80'></div>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
      </div>
      <div className='flex items-center w-full mt-2 gap-2'>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-32'></div>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-48'></div>
        <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full'></div>
      </div>
      <div className='flex items-center w-full max-w-[320px] gap-2'>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
        <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-80'></div>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
      </div>
      <div className='flex items-center w-full pt-12 pb-2 gap-2'>
        <div className='h-5 bg-gray-300 rounded-md dark:bg-gray-600 w-[220px]'></div>
      </div>
      <div className='flex items-center w-full gap-2'>
        <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full'></div>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-52'></div>
      </div>
      <div className='flex items-center w-full mt-2 gap-2'>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-32'></div>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-24'></div>
        <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full'></div>
      </div>
      <div className='flex items-center w-full max-w-[360px] gap-2'>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
        <div className='h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-80'></div>
        <div className='h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full'></div>
      </div>
      <div className='flex items-center w-full h-64 py-4 gap-2'>
        <div className='h-full bg-gray-200 rounded-xl dark:bg-gray-700 w-full'></div>
      </div>
      <div className='flex items-center w-full pb-8 gap-2'>
        <div className='h-7 bg-gray-300 rounded-md dark:bg-gray-600 w-full'></div>
      </div>
    </div>
  )
}
function SkeletonChallenge() {
  return (
    <div role='status' className='space-y-2.5 animate-pulse w-full'>
      <div className='w-full grid grid-cols-6 h-[80vh] gap-2'>
        <div className='col-span-3 row-span-2 bg-gray-200 rounded dark:bg-gray-600'></div>
        <div className='col-span-1 row-span-1 bg-gray-200 rounded dark:bg-gray-600'></div>
        <div className='col-span-2 row-span-1 bg-gray-200 rounded dark:bg-gray-600'></div>
        <div className='col-span-2 bg-gray-200 rounded dark:bg-gray-600'></div>
        <div className='col-span-1 row-span-1 bg-gray-200 rounded dark:bg-gray-600'></div>
        <div className='col-span-1 bg-gray-200 rounded dark:bg-gray-600'></div>
        <div className='col-span-1 bg-gray-200 rounded dark:bg-gray-600'></div>
        <div className='col-span-2 row-span-2 bg-gray-200 rounded dark:bg-gray-600'></div>
        <div className='col-span-2 row-span-2 bg-gray-200 rounded dark:bg-gray-600'></div>
        <div className='col-span-2 row-span-1 bg-gray-200 rounded dark:bg-gray-600'></div>
      </div>
    </div>
  )
}

export { SkeletonPost, SkeletonList, SkeletonChallenge, SkeletonHot }
