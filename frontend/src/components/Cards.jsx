import testdata from '../data/testdata.json'

export default function Cards() {
  return (
    <div className='flex flex-wrap space-x-5 my-5 max-h-56 overflow-y-auto'>
        {
            testdata.map(e =>
                { console.log(e.content.length)
                    return(
                    <div className='bg-[#FFC900] text-white rounded-md flex overflow-hidden flex-col justify-between my-2 p-2 w-96 h-44'>
                        <p className='flex justify-between'>
                            <h1 className='font-bold'>{e.heading}</h1>
                            <span className='bg-white text-[#FFC900] p-1 rounded-sm'>{e.tag}</span>
                        </p>
                        <p>{e.content}</p>
                        <span className='self-end text-sm'>{e.date}</span>
                    </div>
                )}  
            )
        }
        <div className='text-[#FFC900] rounded-md flex flex-col items-center justify-center outline-dashed outline-[#FFC900] m-2 p-2 w-96 h-44'>
            <img src="/images/add-yellow.png" className='w-16'/>
            New Folder
        </div>
    </div>
  )
}
