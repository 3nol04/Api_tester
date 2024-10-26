import { useEffect, useState } from "react";
import axios from "axios";

const AddKamar = () => {
  const [no_kamar, setNo_kamar] = useState('');
  const [name_type, setName_type] = useState(1);
  const [listCategory, setListCategory] = useState([]);
  const [status_kamar, setStatus_kamar] = useState(' Tersedia ');
  const [price, setPrice] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState("");

  useEffect(() => {
    const getCategory = async () => {
      
      const apiCategory = "https://api-hotel-two.vercel.app/api/api/category";
      try {
        const response = await axios.get(apiCategory);
        setListCategory(response.data.category);
      } catch (error) {
        console.log(error);
      }
    };

    getCategory();
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []); // Dependency array untuk menjalankan useEffect hanya sekali
  
  console.log({
    no_kamar : no_kamar,
    price : price,
    status_kamar : status_kamar,
    category_id: name_type
  }); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api-hotel-two.vercel.app/api/api/kamar",
        {
          no_kamar: no_kamar,
          price: price,
          status_kamar: status_kamar,
          category_id: name_type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess(true);
      window.location.href = "/kamar"; 
    } catch (error) {
      setError(
        error.response.data.message === "Unauthenticated"
          ? "Silahkan Login Terlebih Dahulu"
          : error.response.data.message
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Form Tambah Kamar</h2>
      <form onSubmit={handleSubmit}>
        {/* Input Nomor Kamar */}
        <div className="mb-4">
          <label
            htmlFor="no_kamar"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nomor Kamar
          </label>
          <input
            type="text"
            id="no_kamar"
            onChange={(e) => setNo_kamar(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Masukkan nomor kamar"
          />
        </div>

        {/* Select Tipe Kamar */}
        <div className="mb-4">
          <label
            htmlFor="name_type"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Tipe Kamar
          </label>
          <select
            id="name_type"
            onChange={(e) => setName_type(parseInt(e.target.value))}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            {listCategory.map((item, index) => (
              <option key={index} value={item.category_id}>
                {item.name_type}
              </option>
            ))}
          </select>
        </div>

        {/* Select Status Kamar */}
        <div className="mb-4">
          <label
            htmlFor="status_kamar"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Status Kamar
          </label>
          <select
            name="status_kamar"
            id="status_kamar"
            onChange={(e) => setStatus_kamar(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="Tersedia">Tersedia</option>
            <option value="Tidak Tersedia">Tidak Tersedia</option>
          </select>
        </div>

        {/* Input Harga per Malam */}
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Harga per Malam
          </label>
          <input
            type="number"
            id="price"
            onChange={(e) => setPrice(parseInt(e.target.value))}
            value={price}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Masukkan harga per malam"
          />
        </div>

        {/* Button Tambah Kamar */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            Tambah Kamar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddKamar;
