import React, { useEffect } from 'react';

const Distributor = ({darkMode}) => {
   
    useEffect(() => {
        // Load scripts dynamically
        const script1 = document.createElement('script');
        script1.src = 'mapdata.js';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = 'countrymap.js';
        document.head.appendChild(script2);

        // Wait for the scripts to load before accessing variables
        script1.onload = script2.onload = () => {
            // Access and use countryMap here after scripts are loaded
            console.log(window.countryMap); // Assuming countryMap is a global variable
        };

        // Clean up: remove the scripts when the component is unmounted
        return () => {
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, []);

    return ( 
    <div className="container px-4 mx-auto">

      <div class="mt-20 grid max-w-screen-xxl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-2xl font-extrabold leading-none md:text-2xl xl:text-4xl">DISTRIBUSI</h1>
          <p class="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">Dalam melakukan distribusi kepada para mitra, perusahaan telah membangun 4 (empat) buah gudang yang berlokasi di Bogor, Padang, Solo dan Surabaya. Gudang di Bogor dimaksudkan untuk memenuhi kebutuhan stok mitra area Jabodetabek dan Jawa Barat. Gudang di Padang dimaksudkan untuk memenuhi kebutuhan stok mitra area Sumatera. Sedangkan gudang di Solo dan Surabaya dimaksudkan untuk memenuhi kebutuhan stok mitra di Jawa Tengah dan Jawa Timur. Kedepannya perusahaan akan mengembangkan gudang-gudang baru seiring dengan perkembangan jumlah mitranya.</p>

        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:col-start-8 lg:flex p-8">
          <img src="/img/distribusi.png" alt="mockup" />
        </div>
      </div>
      <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="mt-4 text-center mb-4 text-2xl font-extrabold leading-none md:text-2xl xl:text-4xl">DISTRIBUTOR AKTIF</h1>
          <h2 class="text-center text-lg font-extrabold leading-none md:text-2xl xl:text-4xl">431 Distributor</h2>
          <p class="text-center mb-4 lg:mb-8 md:text-lg lg:text-xl">Update Agustus 2022.</p>

        </div>

      <div className={`md:m-4 p-4 rounded-xl shadow-md ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`} id="map"></div>

    </div> 
    );
};

export default Distributor;
