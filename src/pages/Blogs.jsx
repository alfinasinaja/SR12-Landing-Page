// src/components/Blog.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Blog = ({darkMode}) => {
    const [articles, setArticles] = useState([]);
    const [latestArticle, setLatestArticle] = useState(null);
    const [lastFetchedId, setLastFetchedId] = useState(null);
    
  const [selectedCategory, setSelectedCategory] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('/data/blog.json');
              const data = await response.json();
      
              // Mengurutkan data berdasarkan ID terakhir
              const sortedData = data.sort((a, b) => b.id - a.id);
      
              // Mengambil satu data (data dengan ID terakhir)
              const latest = sortedData.length > 0 ? sortedData[0] : null;
      
              setLatestArticle(latest);
      
              // Mengambil semua data kecuali yang sudah ditampilkan di Featured Article
              const otherArticles = sortedData;
              setArticles(otherArticles);
      
              // Mendapatkan ID terakhir dari data yang diambil
              const lastId = latest ? latest.id : null;
              setLastFetchedId(lastId);
            } catch (error) {
              console.error('Error fetching blog data:', error);
            }
          };
      
          fetchData();
        }, []);
  
        const handleCategoryChange = (category) => {
            console.log('Selected Category:', category);
            setSelectedCategory(category);
            
            // Reset the page to the first page when the category changes
            setCurrentPage(1);
          };
          
          
        
          const filteredArticles = selectedCategory
          ? articles.filter((article) => article.category === selectedCategory)
          : articles;
        




            const [currentPage, setCurrentPage] = useState(1);
            const itemsPerPage = 4; // Adjust this based on your desired items per page
          
            const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
          
            const handlePageChange = (newPage) => {
              if (newPage >= 1 && newPage <= totalPages) {
                setCurrentPage(newPage);
              }
            };
          
            const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

const displayedArticles = filteredArticles.slice(startIndex, endIndex);

  return (
    <section className="overflow-hidden">
    <div className="container px-4 mx-auto">
      {latestArticle && (
               
              
<Link key={latestArticle.id} to={`/news/${latestArticle.slug}`} className={`mt-40 py-4 rounded-3xl flex flex-wrap mb-20 ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
            {/* Featured Article Image */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative" style={{ height: '364px' }}>
                <img className="absolute inset-0 w-full h-full object-cover rounded-3xl" src={latestArticle.image} alt={latestArticle.title} />
              </div>
            </div>
            {/* Featured Article Content */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-col justify-center items-start h-full py-8">
                <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4">{latestArticle.title}</h2>
                <p className="mb-10">{latestArticle.description}</p>

                <div class="flex flex-wrap items-center gap-3">
            <p class="text-sm">{latestArticle.date}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewbox="0 0 4 4" fill="none"><circle cx="2" cy="2" r="2" fill="#B8B8B8"></circle></svg>
            <div class="py-1 px-3 rounded-md text-xs font-medium">Info SR12</div>
          </div>
                {/* Add other content if needed */}
              </div>
            </div>
          </Link>
        )}

      {/* Latest Articles Section */}
      <h2 className="text-4xl font-bold font-heading mb-10">Artikel Terbaru</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
  <a
    className={`h-10 inline-flex items-center justify-center w-full sm:w-auto text-center py-3 px-4 rounded-full ${
      selectedCategory === null
        ? 'bg-red-800 text-white'
        : 'bg-white border border-gray-200 text-gray-700'
    } text-sm font-semibold transition duration-200`}
    onClick={() => handleCategoryChange(null)}
  >
    Semua Artikel
  </a>

  {/* Create buttons for each unique category */}
  {Array.from(new Set(articles.map((article) => article.category))).map(
    (category) => (
      <a
        key={category}
        className={`h-10 inline-flex items-center justify-center w-full sm:w-auto text-center py-3 px-5 rounded-full ${
          selectedCategory === category
            ? 'bg-red-800 text-white'
            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200'
        }`}
        onClick={() => handleCategoryChange(category)}
      >
        {category}
      </a>
    )
  )}
</div>



      {/* List of Latest Articles */}

      

      <div className="flex flex-wrap mb-32 -mx-4">
  {displayedArticles.map((article) => (   
    <div key={article.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
      <Link to={`/news/${article.slug}`} className="block w-full h-full">
        <div className={`shadow-md p-4 transition duration-200 rounded-lg h-full flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <div className="aspect-w-3 aspect-h-4 mb-4">
            <img className="w-full h-full object-cover rounded-lg" src={article.image} alt="" />
          </div>
          <div className="flex-grow flex flex-col">
            <h3 className="text-lg font-bold font-heading flex-grow">{article.title}</h3>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm">{article.date}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
              <circle cx="2" cy="2" r="2" fill="#B8B8B8"></circle>
            </svg>
            <div className="py-1 px-2 rounded-md text-xs font-medium inline-block">Info SR12</div>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>





<div className="flex justify-center">
  <nav aria-label="Page navigation example" className="flex justify-end">
    <ul className="inline-flex -space-x-px text-base h-10">
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight
            border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700
            ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white' : ''} ${currentPage === 1 ? 'cursor-not-allowed' : ''}`}
        >
          Sebelumnya
        </button>
      </li>

      {/* Generate page links */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <li key={page}>
          <button
            onClick={() => handlePageChange(page)}
            className={`flex items-center justify-center px-4 h-10 leading-tight ${
              currentPage === page
                ? `border border-gray-300 ${
                    darkMode ? 'border-gray-700 bg-gray-700 text-white' : 'bg-gray-200'
                  }`
                : `border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                    darkMode ? 'border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white' : ''
                  }`
            }`}
          >
            {page}
          </button>
        </li>
      ))}

      <li>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700
            ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white' : ''}
            ${currentPage === totalPages ? 'cursor-not-allowed' : ''}
          `}
        >
          Selanjutnya
        </button>
      </li>
    </ul>
  </nav>
</div>



    </div>
  </section>
  );
};

export default Blog;
