import { useEffect } from "react"

const kamar = () => {

    useEffect(() => {
        const dataKamar = 'https://api-hotel-two.vercel.app/api/api/kamar';
        const getData = async () => {
            try {
                const response = await fetch(dataKamar);
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        getData();
    }, []);
    
    
    return (
    <>
    <p>sdadasda</p>
    </>
    )
}
export default kamar