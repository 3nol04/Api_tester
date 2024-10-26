import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListKamar = () => {
    const [kamar, setKamar] = useState([]);
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);     
    
    useEffect(() => {
        const link = "https://api-hotel-two.vercel.app/api/api/kamar";
        const getKamar = async () => {
            try {
                const response = await axios.get(link);
                setKamar(response.data.kamar)
                console.log(response.data.kamar);
                setLoading(false); 
            } catch (error) {
                setError("Gagal mengambil data kamar");
                setLoading(false);
            }
        }
        getKamar();
    }, []);
    
    if (loading) return <p>Memuat data...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold">List Kamar</h1>
            <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-6">Daftar Kamar</h2>
            <Link to="/kamar/addkamar" className="bg-blue-500 text-white px-4 py-2 rounded-md">Tambah Kamar</Link>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border-b text-left text-gray-600 font-bold">No</th>
                            <th className="py-2 px-4 border-b text-left text-gray-600 font-bold">Nomor Kamar</th>
                            <th className="py-2 px-4 border-b text-left text-gray-600 font-bold">Tipe Kamar</th>
                            <th className="py-2 px-4 border-b text-left text-gray-600 font-bold">Status</th>
                            <th className="py-2 px-4 border-b text-left text-gray-600 font-bold">Harga per Malam</th>
                            <th className="py-2 px-4 border-b text-left text-gray-600 font-bold">Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                                kamar.map((item, index) => (
                                    <tr key={item.id_kamar}>
                                        <td className="py-2 px-4 border-b"> {index + 1}</td>
                                        <td className="py-2 px-4 border-b"> {item.no_kamar}</td>
                                        <td className="py-2 px-4 border-b">{item.kategori.name_type}</td>
                                        <td className="py-2 px-4 border-b">{item.status_kamar}</td>
                                        <td className="py-2 px-4 border-b">{Intl.NumberFormat('id-Id', { style: 'currency', currency: 'IDR' }).format(item.price)}</td>
                                        <td className="py-2 px-4 border-b">
                                            <Link to={`/kamar/editkamar/${item.id_kamar}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Edit</Link>
                                        </td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
}

export default ListKamar;
