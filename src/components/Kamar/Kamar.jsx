
import Card from "../../atoms/Card"
import Sidebar from "../sidebar"
const kamar = ()=>{

    return (
        <div className="bg-primary w-screen h-screen flex justify-start items-start overflow-x-hidden">
            <div className="w-auto h-auto flex justify-start items-start sticky top-0">
                <Sidebar/>
            </div>
            <div className=" content">
                <div className="w-full h-full flex justify-start items-center ">
                    <p className="text-3xl font-mona font-bold py-5">Kamar</p>
                </div> 
                <div className="w-full h-auto flex justify-center items-center gap-10 pl-5">
                <Card/>
                </div> 
            </div>
        </div>
    )
}

export default kamar 