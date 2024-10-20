import Sidebar from './sidebar.jsx'
import Card from '../atoms/Card.jsx'
import { useEffect} from 'react'

const Menu = () =>{

    useEffect(() => {
        const categoty = "https://api-hotel-two.vercel.app/api/api/category"
    }, [])
    return (
        <>
            <div className="bg-primary w-screen h-screen flex justify-start items-start overflow-x-hidden">
                <div className="w-auto h-auto flex justify-start items-start sticky top-0"> 
                    <Sidebar />
                </div>
                <div className="w-screen h-screen  overflow-y ">
                    <div className="w-full h-auto py-4 flex justify-center items-start">
                        <input className='w-1/2 h-10 rounded-lg px-2' type="text" name="" id="" placeholder='Search' />
                    </div>
                    <div className="w-full h-auto px-9 rounded-lg  flex justify-center items-center">
                        <img className='w-full h-56 rounded-lg ' src="https://4.bp.blogspot.com/-W7Q9rw7lah8/VMCqROwKghI/AAAAAAAABRc/6pTzCwqzbrM/s1600/Gambar%2BKamar%2BTidur%2BMinimalis%2BElegan.jpg" alt="" />
                    </div>
                    <h1 className='text-3xl pl-9 font-iter text-white '>Category</h1>
                    <div className="w-full h-auto  grid grid-cols-3 gap-4 justify-center items-center py-3 px-40">
                        <div className='w-64 h-16 bg-[#D9D9D9] rounded-lg' >
                            
                        </div>
                        <div className='w-64 h-16 bg-[#D9D9D9] rounded-lg' >
                            
                        </div>
                        <div className='w-64 h-16 bg-[#D9D9D9] rounded-lg' >
                            
                        </div>
                        <div className='w-64 h-16 bg-[#D9D9D9] rounded-lg' >
                            
                        </div>
                        <div className='w-64 h-16 bg-[#D9D9D9] rounded-lg' >
                            
                        </div>
                        <div className='w-64 h-16 bg-[#D9D9D9] rounded-lg' >
                            
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-col   gap-4 justify-center items-start py-3 px-9">
                        <h1 className='text-3xl py-3 font-iter text-white '>Product</h1>
                        <div className="w-full h-auto grid grid-cols-5 gap-5 justify-center items-center ">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu