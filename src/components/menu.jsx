
import Sidebar from './sidebar.jsx'
import Card from '../atoms/card.jsx'
const menu = () =>{

    return (
        <>
            <div className="bg-primary w-screen h-screen flex justify-start items-start ">
                <div className="w-auto h-auto flex justify-start items-start">
                    <Sidebar/>
                </div>
                <div className="w-auto h-auto flex justify-start items-start">
                    <Card/>
                </div>
            </div>
        </>
    )
}
export default menu