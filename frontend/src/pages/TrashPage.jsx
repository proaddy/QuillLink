import Cards from "../components/Cards";
import LeftComponent from "../components/LeftComponent";

export default function TrashPage({notesData, setNotesData, bookData, setBookData}) {
    const userid = localStorage.getItem('userID');
    let dataarray = notesData.filter((e)=>e.status === 'trash');
    // console.log(dataarray);

    const trashNotes = (() => {
        const temp = notesData.filter(e=>e.status !== 'trash');
        setNotesData(temp);
    })
    
    return (
        <div className="flex overflow-hidden">
            <LeftComponent pageStat={'isTrash'} bookData={bookData} setBookData={setBookData} user={userid}/>
            <div className="flex flex-col flex-[1_1_85%] bg-slate-400 p-2 overflow-hidden">
                <div className="w-[95%] flex flex-col self-center">
                    <em className="bg-gray-300 p-2 self-center items-center text-center">
                        The notes will be deleted after 7 days automatically
                        <button onClick={trashNotes} className='flex-0 text-center p-2 mx-2 rounded-md h-10 bg-[#FFC900] cursor-pointer'>Or click to trash now</button>
                    </em>
                    <Cards dataarray={dataarray} notesData={notesData} setNotesData={setNotesData} searchText="" userid={userid} page='trash'/>
                </div>
            </div>
        </div>
    )
}