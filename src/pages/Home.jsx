// Home.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight,FaAngleLeft } from 'react-icons/fa';



const Home = ({ darkMode }) => {
  const [articles, setArticles] = useState([]);

  
  useEffect(() => {
    // Fetch blog data
    fetch('/data/blog.json')
      .then(response => response.json())
      .then(data => {
        // Get the latest 3 articles from the fetched data
        const latestArticles = data.slice(0, 3);
        setArticles(latestArticles);
      })
      .catch(error => {
        console.error('Error fetching blog data:', error);
      });
  }, []);


  return (
    <div>
      

    <Slider />
    <BestSeller darkMode={darkMode}/>
    <Tentang darkMode={darkMode} />

    <section className={`pt-24 pb-36 overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container px-4 mx-auto">
      <h1 className="max-w-2xl mb-4 text-2xl font-extrabold leading-none md:text-2xl xl:text-4xl">SR12 News</h1>
              <div className="flex flex-wrap -m-8">
          {articles.map(article => (
            <ArticleCard  darkMode={darkMode} key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>

    <Brand darkMode={darkMode} />

    

    
    </div>
    
  );
};

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [productData, setProductData] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const imageUrls = [
          'https://sr12herbalskincare.co.id/minio/websr12/1701330779799.jpg',
          'https://sr12herbalskincare.co.id/minio/websr12/1698738325856.jpg',
          'https://sr12herbalskincare.co.id/minio/websr12/1699002994280.jpg',
        ];

        const imageDataPromises = imageUrls.map(async (url) => {
          const response = await fetch(url);
          const imageData = await response.blob();
          return URL.createObjectURL(imageData);
        });

        const resolvedImageUrls = await Promise.all(imageDataPromises);
        setProductData(resolvedImageUrls);
        setLoadingProduct(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoadingProduct(false);
        setError('Error fetching product data');
      }
    };

    fetchProductData();
  }, []);

  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % productData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + productData.length) % productData.length);
  };

  useEffect(() => {
    if (!loadingProduct && productData.length > 0) {
      // Auto-slide every 3000 milliseconds (3 seconds)
      const intervalId = setInterval(nextSlide, 5000);

      // Clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }
  }, [loadingProduct, productData]);
  if (loadingProduct) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

 


  return (
    <div className="slider-container" style={{ zIndex: 1 }}>
      <div className="slider-images" style={{ transform: `translateX(${-currentSlide * 100}%)` }}>
        {productData.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className={`slider-image ${index === currentSlide ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="hidden sm:block">
      <button onClick={prevSlide} className="slider-button prev">
        <FaAngleLeft size={32} />
      </button>
      <button onClick={nextSlide} className="slider-button next">
        <FaAngleRight size={32} />
      </button>
    </div>
    </div>
  );
};

const Brand = ({darkMode}) => {
  const logos = [
    '/brands/sr12.png',
    '/brands/sr12men.png',
    '/brands/srkiddos.png',
    '/brands/sr12herbal.png',
    '/brands/skinsane.png',
  ];

  return (
    <section className={`pb-24 pt-20 overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center -mx-4">
      <div className="w-full lg:w-2/5 px-4 mb-20 lg:mb-0">
        <div className="lg:max-w-lg">
        <h1 className="max-w-2xl mb-4 text-2xl font-extrabold leading-none md:text-2xl xl:text-4xl">
Brand SR12</h1>
          <p className="text-lg"></p>
        </div>
      </div>
      <div className="w-full lg:w-3/5 px-4">
        <div className="flex flex-wrap justify-center items-center">
          {logos.map((logo, index) => (
            <div key={index} className={`w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-3 lg:mb-0`}>
              <div className={`p-2 py-8 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-300'}`}>
                <img
                  className={`h-20 mx-auto object-contain max-w-full max-h-full ${darkMode ? 'grayscale hover:grayscale-0' : 'transition ease-in-out delay-150 hover:scale-110'}`}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>



  );

};

const BestSeller = ({ darkMode }) => {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [setError] = useState(null);
  const formatCurrency = (amount) => {
    // Implement the logic for formatting currency as needed
    // Set minimumFractionDigits and maximumFractionDigits to 0
    return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Menggunakan fetch untuk mengambil data dari file JSON
        const response = await fetch(`/data/products.json`);
        if (!response.ok) {
          throw new Error('Error fetching products');
        }
        const data = await response.json();
  
        // Sort products based on ID in descending order and take the first 4
        const latestProducts = data.sort((a, b) => b.id - a.id).slice(0, 4);
  
        setProducts(latestProducts);
        setLoadingProducts(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoadingProducts(false);
        setError('Error fetching products');
      }
    };
  
    fetchProducts();
  }, []);
  

  return (
    <div className="container px-4 mx-auto">

    <div className="flex justify-center items-center text-center p-8">
    <h1 className="max-w-2xl mb-4 text-2xl font-bold leading-none md:text-2xl xl:text-4xl">
    PRODUK BARU</h1>
          </div>
    
          <div className="flex items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          {products.map((product) => (
            <div key={product.id} className={`p-4 rounded-lg shadow-md md:col-span-1 lg:col-span-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <img
                src={product.image}
                alt={product.image}
                className="w-full h-50 object-cover mb-4 rounded-md"
              />
<Link to={`/product/${product.slug}`}><h3 className="text-xl font-semibold mb-2">{product.name}</h3></Link>
              <p>{formatCurrency(product.price)}</p>
            </div>
          ))}
          
        </div>
        <div className="flex justify-center items-center p-4 text-center">
        <Link
                to="/products"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Telusuri Produk
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </Link>
    </div></div>
  );
};

const Tentang = ({darkMode}) => {
  return (
<section>
      <div className="container px-4 mx-auto">
      <div className="grid max-w-screen-xxl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-2xl font-extrabold leading-none md:text-2xl xl:text-4xl">
          PT SR12 Herbal Kosmetik 
          </h1>
          <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl">
          merupakan perusahaan yang bergerak dibidang Herbal dan Skncare berdiri pada tahun 2015 oleh apt. Toni Firmansyah, S.Farm. & Asrianty Salam S.Farm, mempunyai visi yang besar untuk memberikan nilai manfaat bagi semua orang, telah membawa perusahaan ini bertumbuh dengan cepat dan disambut baik oleh masyarakat.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Telusuri Produk
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Hubungi Kami
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:col-start-8 lg:flex p-8">
          <img src="/allproduct.png" alt="mockup" />
        </div>
      </div>
      </div>
    </section>

  );
};



const ArticleCard = ({ article, darkMode }) => {
  const { id, image, category, title, date } = article;

  return (
    <div className="w-full md:w-1/3 p-8" key={id}>

      <div className={`p-4 h-full bg-opacity-70 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white shadow-md'}`}>
        <div className="flex flex-col justify-between h-full">
          <div className="mb-8">
            <div className="mb-9 w-full overflow-hidden rounded-2xl">
              <img className="w-full transform hover:scale-105 transition ease-in-out duration-1000" src={image} alt="" />
            </div>
            <p className="mb-3 text-sm font-medium">{category}</p>
            <Link to={`/news/${article.slug}`} className="block w-full h-full">
            
              <h3 className="text-xl font-bold font-heading leading-normal">{title}</h3>
            
            </Link>
          </div>
          <p className="text-sm font-medium">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;


// <button onClick={prevSlide} className="slider-button prev">Prev</button>
// <button onClick={nextSlide} className="slider-button next">Next</button>
// <p className="mb-20 text-lg text-gray-400 font-medium leading-normal md:max-w-xl">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.</p>
// 