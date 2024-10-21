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
                setKamar(data.kamar);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        getData();
    }, []);
    let status = document.getElementById("status");
    console.log(status)
    return (
    <>
    {kamar.map((item)=>(
        <div className='flex justify-start items-start animate-slide_right ' key={item.id_kamar}>
            <div className="w-auto h-auto bg-[#D9D9D9] rounded-2xl shadow-xl shadow-black flex flex-col justify-center items-start p-2">
                <div className="w-auto h-auto rounded-lg shadow-xl shadow-black ">
                    <img className="w-48 h-48 rounded-lg" src="https://4.bp.blogspot.com/-W7Q9rw7lah8/VMCqROwKghI/AAAAAAAABRc/6pTzCwqzbrM/s1600/Gambar%2BKamar%2BTidur%2BMinimalis%2BElegan.jpg" alt="" />
                </div>
                <div className="w-full h-full">
                    <div className="w-full -h-full pt-5" >
                        <p className="text-base text-black font-iter">Type kamar : {item.kategori.name_type}</p>
                        <p className ="text-base font-iter text-black">No Kamar : {item.no_kamar}</p>
                            <div className=" w-full h-full flex flex-col justify-start items-end" >
                                <p id="status" className ={`text-base font-iter ${item.status_kamar ==="tersedia" ? "text-green-500" : "text-red-500"}`}>{item.status_kamar}</p>
                                <p className="text-base font-iter taxt-black ">{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        ))
    }
        </>
    )
}
export default kamar