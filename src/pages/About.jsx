import React from "react";

const About = ({ darkMode }) => {
  const image = "https://sr12herbalskincare.co.id/static/media/our%20business%20rev.bd7ac09f312d3439af8c.jpg";

  const komisarisData = [
    {
      name: "Asrianty Salam, S.Farm",
      role: "Presiden Komisaris",
      image: "https://sr12herbalskincare.co.id/static/media/about%20us%2028.7%203.965a8a8409c54bafb57d.png",
    },
    {
        name: "Shendy Yulian",
        role: "Komisaris",
        image: "https://sr12herbalskincare.co.id/static/media/about%20us%2028.7%205.8e6cd14e1eff04efafd0.png",
      },
      {
        name: "Deni Abdul Hakim",
        role: "Komisaris",
        image: "https://sr12herbalskincare.co.id/static/media/about%20us%2028.7%206.6c64ec57e9c123d5e729.png",
      },
      {
        name: "H. Jafri",
        role: "Komisaris",
        image: "https://sr12herbalskincare.co.id/static/media/about%20us%2028.7%207.1914a6ce28ae762a7be2.png",
      },
      {
        name: "H. Saefullah Lukman",
        role: "Komisaris",
        image: "https://sr12herbalskincare.co.id/static/media/about%20us%2028.7%208.b3cff41cfe1ca75bfdd0.png",
      },
    // Add more komisaris data as needed
  ];
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
      <div className="bg-gray-950 opacity-80">
        <div className="slider-images bg-gray-800 opacity-50">
          <img
            src={image}
            className="slider-image2 active h-40"
            alt="Slider Image"
          />
        </div>
    </div>
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-extrabold leading-none md:text-2xl xl:text-4xl z-10">
          <span className="shadow-md">ABOUT US</span>
        </h2>
      </div>


      <section className="py-16">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap mb-32 mt-14 -mx-8 justify-center">
      <div className="w-full lg:w-1/2 px-8 ml-8">
      <h1 className="text-2xl lg:text-4xl font-bold font-heading mb-10 max-w-xs lg:max-w-lg">VISI</h1>
        <p className="text-lg mb-10">Menebarkan manfaat bagi semua orang.</p>
        <h1 className="text-2xl lg:text-4xl font-bold font-heading mb-10 max-w-xs lg:max-w-lg">MISI</h1>
        <p className="text-lg">
            
            <li class="list-decimal">Menghasilkan produk yang berkualitas secara berkesinambungan</li>
            <li class="list-decimal">Membangun sumber daya manusia yang berkualitas dan profesional</li>
            <li class="list-decimal">Melakukan perbaikan secara berkesinambungan untuk memberikan nilai tambah</li>
            <li class="list-decimal">Menjalin kerja sama yang berlandaskan asas kemanfaatan bersama</li>
            <li class="list-decimal">Membentuk sumber daya manusia yang berintegritas dan taat dengan berlandaskan iman dan takwa</li>
        </p>
        
      </div>
      <div className="w-full lg:w-1/3 px-8">
      <img className="rounded-3xl w-full mb-8" src="/visi.png" alt="" />
      </div>
    </div>




    <div className="flex flex-wrap mb-32 -mx-8 justify-center">
      <div className="w-full lg:w-1/3 px-8">
        <img className="rounded-3xl w-full mb-8" src="https://sr12herbalskincare.co.id/static/media/Group%2017.218e0e28125c814450a6.png" alt="" />
      </div>
      <div className="w-full lg:w-1/2 px-8">
        <h2 className="text-2xl lg:text-2xl font-bold font-heading mb-4 max-w-xs lg:max-w-lg">PROFIL DIREKSI</h2>
        <p className="text-lg text-justify">
        Toni Firmansyah mendirikan bisnis SR12 sejak tahun 2015 bersama istrinya, Asrianty Salam. Bermula dari usaha rumahan dengan menjajakan produknya secara konsinyasi dari apotek ke apotek, mereka berupaya keras mencari cara agar usahanya tersebut bisa bermanfaat untuk orang banyak. Sejak awal, kedua couplepreneur ini bercita-cita memiliki bisnis yang bisa membantu banyak orang baik dari sisi ekonomi maupun sisi spiritual dan sosiai.
        <br />
        <br />
Setahun menjalankan bisnis dengan sistem konvensional, barulah pada September 2016 mereka memutuskan untuk mengubah sistem pemasaran mereka menjadi penjualan langsung (direct selling) yang telah dimodifikasi sedemikian rupa sehingga tidak keluar atau bertentangan dengan syariat Islam.
Dengan kegigihan keduanya membuka pasar baik online maupun offline, diakhir tahun 2017 mereka berhasil membukukan penjualan lebih dari 1 miliar rupiah.
<br />
<br />
<strong>Apt. Toni Firmansyah</strong>
<br />
Direktur Utama SR12


        </p>
      </div>
    </div>


    

    <div className={`${darkMode ? 'bg-gray-800 shadow-lg' : 'shadow-lg'} rounded-3xl pt-8 pb-16 px-4 overflow-hidden mb-8 relative`}>
  <h2 className="text-4xl font-bold font-heading text-center mb-8">Dewan Komisaris</h2>
  <div className="flex flex-wrap justify-center -mx-4">
    {komisarisData.map((komisaris, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 px-4">
        <div className="relative bg-no-repeat bg-cover bg-center rounded-3xl" style={{ paddingBottom: '120%', backgroundImage: `url("${komisaris.image}")` }}>
          <div className="absolute bottom-0 left-0 bg-orange-50 hover:opacity-60 transition ease-in-out rounded-tr-3xl rounded-bl-3xl px-2 py-2 w-full">
            <h2 className="text-xl font-bold text-gray-800 font-heading text-center">{komisaris.name}</h2>
            <p className="text-sm text-gray-800 text-center">{komisaris.role}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    

    
  </div>
</section>
      
    </div>

    
  );
};

export default About;
