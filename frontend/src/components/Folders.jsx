import folders from '../data/folderlist.json';

export default function Folders() {
  return (
    <div className='overflow-y-auto max-h-72 space-y-2'>
        <hr className='w-[100%] border-black h-1'/>
        <div className="flex flex-wrap space-x-5">
            {
                folders.map(e=>{
                    return(
                        <span className='flex flex-col items-center rounded-md'>
                            <img src="/images/chapter.png" className='w-40 h-44'/>
                            {e.name}
                        </span>
                    )
                })
            }
            <span className='flex flex-col items-center rounded-md m-2 py-2 w-44 h-52 justify-center outline-dashed'>
                <img src="/images/add.png" className='w-16'/>
                New Folder
            </span>
        </div>
    </div>
  )
}
