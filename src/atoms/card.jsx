import { useEffect , useState} from "react"

const kamar = () => {
    const [kamar, setKamar] = useState([]);
    useEffect(() => {
        const dataKamar = 'https://api-hotel-two.vercel.app/api/api/kamar';
        
        const getData = async () => {
            try {
                const response = await fetch(dataKamar);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setKamar(data);
                console.log(data.kamar);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        getData();
    }, []);
    
    
    return (
    <>
        <div className='flex justify-start items-start '>
            <div className="w-auto h-auto bg-[#D9D9D9] rounded-2xl shadow-xl shadow-black flex flex-col justify-center items-start p-2">
                <div className="w-auto h-auto rounded-lg shadow-xl shadow-black ">
                    <img className="w-48 h-48 rounded-lg" src="https://4.bp.blogspot.com/-W7Q9rw7lah8/VMCqROwKghI/AAAAAAAABRc/6pTzCwqzbrM/s1600/Gambar%2BKamar%2BTidur%2BMinimalis%2BElegan.jpg" alt="" />
                </div>
                <div className="w-full h-full ">
                   <div className="w-full -h-full pt-5">
                     <p className="text-base text-black font-iter">Type kamar :</p>
                    <p className ="text-base font-iter text-black">No Kamar :</p>
                        <div className=" w-full h-full flex flex-col justify-start items-end" >
                        <p className ="text-base font-iter text-[#1DAD22]">Tersedia</p>
                        <p className="text-base font-iter taxt-black ">Rp.121456789,-</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default kamar