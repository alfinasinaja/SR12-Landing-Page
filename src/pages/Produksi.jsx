import React from "react";

const Distributor = ({ darkMode }) => {
  const image = "https://sr12herbalskincare.co.id/static/media/image%20125.52e9c91ef582c623a0df.png";


  const items = [
    {
      image: "https://sr12herbalskincare.co.id/static/media/Skincare.531ac546fc25aa8bdc98.png",
      title: "Skincare",
      caption: "Semua produk terkait perawatan wajah dan kecantikan dengan 43 jenis produk yang dihasilkan."
    },
    {
        image: "https://sr12herbalskincare.co.id/static/media/Pasta%20Gigi%20Charcoal%20170g.919601fb69c7cfdfaf27.png",
        title: "Personal Care",
        caption: "Semua produk terkait perawatan wajah dan kecantikan dengan 43 jenis produk yang dihasilkan."
    },
    {
        image: "https://sr12herbalskincare.co.id/static/media/Pasta%20Gigi%20Charcoal%20170gr%203.ccc1a5c74e5683441b2e.png",
        title: "Body Care",
        caption: "Semua produk terkait perawatan tubuh dengan 10 jenis produk yang dihasilkan."
    },
    {
        image: "https://sr12herbalskincare.co.id/static/media/Hair.6383b5401b56c97b524d.png",
        title: "Hair Care",
        caption: "Semua produk terkait perawatan rambut dengan 3 jenis produk yang dihasilkan."
    },
    {
        image: "https://sr12herbalskincare.co.id/static/media/Pasta%20Gigi%20Charcoal%20170gr%201.0336bf400d5098578720.png",
        title: "Toothpaste",
        caption: "Semua produk terkait perawatan gigi dengan 2 jenis produk yang dihasilkan."
    },
    {
        image: "https://sr12herbalskincare.co.id/static/media/Go%20Milkku.8a6bfb36c85c43490473.png",
        title: "Herbal",
        caption: "Semua produk terkait obat tradisional dengan 8 jenis produk yang dihasilkan."
    },
    {
        image: "https://sr12herbalskincare.co.id/static/media/kiddos.a84543b9fbd2682edc5f.png",
        title: "Kiddos",
        caption: "Semua produk terkait perawatan anak dengan 3 jenis produk yang dihasilkan."
    },

  ];

  return (
    <div className="relative">
      <div className="slider-container">
        <div className="slider-images blur-sm">
          <img
            src={image}
            className="slider-image2 active h-40"
            alt="Slider Image"
          />
        </div>
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-extrabold leading-none md:text-2xl xl:text-4xl z-10">
          PRODUKSI
        </h2>
      </div>

      <div className="m-10 text-center">
        <p>
          Proses produksi yang mengutamakan kualitas melalui sistem keamanan
          ketat. Kami menerapkan sistem keamanan mulai dari produksi hingga
          distribusi, untuk memastikan produk kami terjaga kualitasnya dan aman
          digunakan oleh konsumen kami.
        </p>
      </div>

      <div className="m-10 text-lg font-bold text-center">
        <p className="mt-10">Perusahaan memiliki fasilitas produksi yang terbagi dalam 7 kategori yaitu :</p>
      </div>

      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 p-4 justify-center">
          {items.map((item, index) => (
            <div
  key={index}
  className={`p-4 rounded-md transition flex flex-col items-center text-center ${darkMode ? 'bg-gray-800 hover:bg-gray-900' : 'bg-white shadow-md hover:bg-gray-200'}`}
>
              <img
                src={item.image}
                alt={`Item ${index + 1}`}
                className="h-40 mb-2 rounded-md"
              />
              <p className="text-center font-bold">{item.title}</p>
              <p className="text-center">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    
  );
};

export default Distributor;
