// DetailProduct.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import ScanQR from '../component/ScanQR';
import QRCodeGenerator from '../component/qrcode';
import { Link } from 'react-router-dom';





const DetailProduct = ({ darkMode }) => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [counter, setCounter] = useState(1);
  const [isRotated, setIsRotated] = useState(false);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const handleRotate = () => {
    setIsRotated(!isRotated);
  };
  
  const formatCurrency = (amount) => {
    // Implement the logic for formatting currency as needed
    // Set minimumFractionDigits and maximumFractionDigits to 0
    return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  useEffect(() => {
    // Fetch the details of the product based on the slug
    fetch(`/data/products.json`)
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.find((item) => item.slug === slug);
        setProduct(selectedProduct);
      })
      .catch((error) => console.error('Error fetching product details:', error));
  }, [slug]);

  if (!product) {
    // Product details are still loading
    return <div>Loading...</div>;
  }
  const stars = Array(5).fill(<FaStar />);


  return (
    <div className="mt-20 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
        {/* Description Div */}
        <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
          <div className="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center shadow-lg rounded-2xl">
            <img className="rounded-2xl" src={product.image} alt="Wooden Chair Previw" />
          </div>
        </div>
        <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
          <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4">
            
          <strong><Link to={`/`}>Home</Link></strong> / <strong><Link to={`/products`}>Product</Link></strong> / {product.category}
          </p>
          <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 mt-4">
            {product.name}
          </h2>
          <div className="flex flex-row justify-between mt-5">
          <div style={{ display: 'flex', gap: '5px' }}>
      {stars.map((star, index) => (
           <span key={index}  className={`${darkMode ? 'text-gray-100' : 'text-red-800 '} `}
            style={{ margin: '0', padding: '0' }}>{star}</span>
      ))}
    </div>


            <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 hover:underline duration-100 cursor-pointer">
              22 reviews
            </p>
          </div>

          <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6">{formatCurrency(product.price)}</p>
          <div className="lg:mt-11 mt-10">
            <div className="flex flex-row justify-between">
              <p className="font-medium text-base leading-4 ">Masukkan QTY</p>
              <div className="flex">
                <span
                  onClick={handleMinus}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                >
                  -
                </span>
                <input
                  id="counter"
                  aria-label="input"
                  className={`${darkMode ? 'bg-gray-700' : 'bg-white'} border border-gray-300 h-full text-center w-14 pb-1`}
                  type="text"
                  value={counter}
                  readOnly
                />
                <span
                  onClick={handlePlus}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1"
                >
                  +
                </span>
              </div>
            </div>
            
            <hr className="bg-gray-200 w-full mt-4" />
          </div>
          <button
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-medium leading-4 w-full py-5 lg:mt-12 mt-6 bordered-md
            ${darkMode ? 'text-gray-700 bg-gray-100' : 'bg-gradient-to-r from-red-800 to-red-600 hover:saturate-100 text-gray-100 shadow-md'} `}

          >
            Tambahkan ke Keranjang
          </button>
        </div>

        {/* Preview Images Div For larger Screen */}
        
      </div>
      <Tabs product={product} darkMode={darkMode} />
      <div className="flex justify-center items-center w-full">
        

        


      </div>
    </div>
  );
};



const Tabs = ({ product, darkMode }) => {
  const [activeTab, setActiveTab] = useState('profile');
  // Pengecekan product.BPOM sebelum digunakan
  // Melanjutkan dengan logika, atau membiarkan bpomValue menjadi null jika product.BPOM tidak ada
  const bpomValue = product?.BPOM ? product.BPOM.substring(4, product.BPOM.length - 10) : null;


  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="mt-10 mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
  <li className="me-2" role="presentation">
    <button 
      className={`inline-block p-4 rounded-t-lg transition-all duration-300 
        ${activeTab === 'profile' ? `bg-gray-700 text-white ${darkMode ? '' : 'bg-red-800'}` : ''}`} 
      id="profile-tab" 
      data-tabs-target="#profile" 
      type="button" 
      role="tab" 
      aria-controls="profile" 
      aria-selected={activeTab === 'profile'} 
      onClick={() => handleTabClick('profile')}
    >
      Detail Produk
    </button>
  </li>
  <li className="me-2" role="presentation">
    <button 
      className={`inline-block p-4 rounded-t-lg transition-all duration-300 ${activeTab === 'dashboard' ? `bg-gray-700 text-white ${darkMode ? '' : 'bg-red-800'}` : ''}`} 
      id="dashboard-tab" 
      data-tabs-target="#dashboard" 
      type="button" 
      role="tab" 
      aria-controls="dashboard" 
      aria-selected={activeTab === 'dashboard'} 
      onClick={() => handleTabClick('dashboard')}
    >
      Ingredients
    </button>
  </li>
  <li className="me-2" role="presentation">
    <button 
      className={`inline-block p-4 rounded-t-lg transition-all duration-300 ${activeTab === 'settings' ? `bg-gray-700 text-white ${darkMode ? '' : 'bg-red-800'}` : ''}`} 
      id="settings-tab" 
      data-tabs-target="#settings" 
      type="button" 
      role="tab" 
      aria-controls="settings" 
      aria-selected={activeTab === 'settings'} 
      onClick={() => handleTabClick('settings')}
    >
      Penggunaan
    </button>
  </li>
</ul>

      </div>
      <div id="default-tab-content">
        <div className={`p-4 rounded-lg ${activeTab === 'profile' ? '' : 'hidden'}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <p className="text-md">{product.detail}</p>
          {product?.BPOM && (
        <>
          <p className="text-bold mt-4 mb-4">BPOM RI: {bpomValue}</p>
          <div className="p-2 bg-white inline-block rounded-md">
          <QRCodeGenerator data={String(product.BPOM)} />
          </div>
        </>
      )}
        </div>
        <div className={`p-4 rounded-lg ${activeTab === 'dashboard' ? '' : 'hidden'}`} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <p className="text-md">{product.ingredients}</p>
        </div>
        <div className={`p-4 rounded-lg ${activeTab === 'settings' ? '' : 'hidden'}`} id="settings" role="tabpanel" aria-labelledby="settings-tab">
  <p className="text-md">{product.kegunaan}</p>
</div>

        
      </div>
    </div>
  );
};

export default DetailProduct;
