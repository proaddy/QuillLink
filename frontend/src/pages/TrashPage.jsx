import Cards from "../components/Cards";
import LeftComponent from "../components/LeftComponent";
import testdata from '../data/testdata.json'

export default function TrashPage() {
    const userid = localStorage.getItem('userID');
    const uname = localStorage.getItem('username');
    
    const userData = {
        "username":uname,
        "_id":userid
    }

    let dataarray = testdata.filter(e=>e.status === 'archive');
    
    return (
        <div className="flex overflow-hidden">
            <LeftComponent pageStat={'isTrash'} user={userData}/>
            <div className="flex flex-col flex-[1_1_85%] bg-slate-400 p-2 overflow-hidden">
                <div className="w-[95%] self-center">
                    <Cards dataarray={dataarray} filter={'else'} user={userid} page='trash'/>
                </div>
            </div>
        </div>
    )
}