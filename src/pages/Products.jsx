
import React, { useEffect, useState } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { ChevronDownIcon, ChevronRightIcon, FilterIcon, SearchIcon, ViewGridIcon, XIcon } from "@heroicons/react/solid"
import { useMediaQuery } from '@react-hook/media-query'; // Import useMediaQuery
import { Link } from 'react-router-dom';




const CategoryFilter = ({darkMode}) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [products, setProducts] = useState([]);
    


  // Function untuk menangani perubahan halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
    
  // Fungsi untuk menangani perubahan nilai input harga minimum
  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  // Fungsi untuk menangani perubahan nilai input harga maksimum
  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  useEffect(() => {
    // Fetch products from JSON file
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);


      const md = useMediaQuery('(max-width: 768px)'); // Check if screen size is medium

  const [openFilter, setOpenFilter] = useState(true)
    // Set openFilter to false when the screen size is medium
    useEffect(() => {
      if (md) {
        setOpenFilter(false);
      }
    }, [md]);


    const sortBy = (value) => {
      let sortedProducts;
    
      switch (value) {
        case 'Termurah':
          sortedProducts = [...products].sort((a, b) => a.price - b.price);
          break;
        case 'Termahal':
          sortedProducts = [...products].sort((a, b) => b.price - a.price);
          break;
        default:
          // Default sorting (original order)
          sortedProducts = [...products];
          break;
      }
    
      setSortOptions((prevSortOptions) =>
        prevSortOptions.map((option) => ({
          ...option,
          current: option.name === value,
        }))
      );
    
      setFilteredProducts(sortedProducts);
    };
    
    
  const [sortOptions, setSortOptions] = useState([
    { name: 'Rekomendasi', href: '#', current: true },
    { name: 'Termurah', href: '#', current: false },
    { name: 'Termahal', href: '#', current: false },
  ])

  

  const uniqueCategories = [...new Set(products.map((product) => product.category))];
  const [filteredProducts, setFilteredProducts] = useState(products);


// Calculate the index range for the current page
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
const totalPages = Math.ceil(filteredProducts.length / productsPerPage);




  const filters = [

    {
        id: 'kategori',
        name: 'Kategori',
        options: uniqueCategories.map((category) => ({
          value: category,
          label: category,
          checked: true,
        })),
      },
  ];



 
  // Tambahkan state untuk menyimpan filter
const [activeFilters, setActiveFilters] = useState({
    kategori: uniqueCategories.map((category) => category),
  });
  
  // Tambahkan fungsi untuk menangani perubahan filter kategori
  const handleFilterChange = (filterType, value) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const [searchInput, setSearchInput] = useState('');

  // Function to filter products based on search input
  const filterProductsBySearch = (input, products) => {
    const lowercasedInput = input.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercasedInput) ||
        product.category.toLowerCase().includes(lowercasedInput)
    );
  };


  useEffect(() => {
    const filteredByCategory = activeFilters.kategori.length === 0
      ? products // If no categories are selected, show all products
      : products.filter((product) => activeFilters.kategori.includes(product.category));
  
    // Filter products based on search input
    const filteredBySearch = filterProductsBySearch(searchInput, filteredByCategory);
  
    // Filter products based on price range
    const filteredByPriceRange = filteredBySearch.filter((product) => {
      const productPrice = product.price;
      const isWithinRange =
        (minPrice === '' || productPrice >= parseFloat(minPrice)) &&
        (maxPrice === '' || productPrice <= parseFloat(maxPrice));
      return isWithinRange;
    });
  
    // Sort the filtered products based on the selected sort option
    let sortedProducts = [...filteredByPriceRange];
    if (sortOptions[1].current) {
      // "Termurah" selected
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOptions[2].current) {
      // "Termahal" selected
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
  
    setFilteredProducts(sortedProducts);
  }, [activeFilters, searchInput, minPrice, maxPrice, sortOptions, products]);
  
  

  


  

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  
  

// Fungsi untuk menambah atau menghapus nilai dari array filter
const toggleFilter = (filterArray, value) => {
    if (filterArray.includes(value)) {
      return filterArray.filter((item) => item !== value);
    } else {
      return [...filterArray, value];
    }
  };
  

  const formatCurrency = (amount) => {
    // Implement the logic for formatting currency as needed
    // Set minimumFractionDigits and maximumFractionDigits to 0
    return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 });
  };

  return (

    <div className="container px-4 mx-auto">
      <div className="grid pt-20 lg:mt-10 grid-cols-4 gap-y-8 gap-x-4">

        {/* :HEADING */}
        <div className="col-span-full pb-6 flex flex-col sm:flex-row items-center justify-between space-y-5 sm:space-y-0 border-b border-gray-200 ">
          {/* ::Title */}
          
          




          <nav class="flex" aria-label="Breadcrumb">
  <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-center">
      <a href="/" class="inline-flex items-center text-lg font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
        </svg>
        Home
      </a>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-lg font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Products</a>
      </div>
    </li>
  </ol>
</nav>












          {/* ::Inline Actions */}
          <div className="flex items-center space-x-5 ">
            {/* :::Input search (large devices) */}
            <div className="lg:inline-block relative ">
              {/* ::::label */}
              <label htmlFor="search" className="sr-only">Search</label>
              {/* ::::input */}
              <input
        type="search"
        id="search"
        name="search"
        placeholder="cari produk ..."
        value={searchInput}
        onChange={handleSearchInputChange}
        className={`w-full p-2 form-input pl-11 pr-5 w-44 block shadow-sm rounded-full text-sm placeholder-gray-300 focus:border-blue-300 focus:ring-1 focus:ring-gray-300 ${
          darkMode ? 'bg-gray-700' : 'bg-white border'
        }`}
      />
              {/* ::::icon */}
              <span className="absolute top-1/2 left-3 text-gray-400 transform -translate-y-1/2 ">
                <SearchIcon className="w-4 h-4" />
              </span>
            </div>
            {/* :::Sort menu */}
            <Menu as="div" className="flex-shrink-0 relative ">
              {/* ::::button sort by */}
              <Menu.Button className="inline-flex items-center text-base text-gray-400 font-semibold hover:text-gray-700">
                Urutkan
                <ChevronDownIcon className="ml-2 w-5 h-5" />
              </Menu.Button>
              {/* ::::options */}
              <Menu.Items className="absolute right-0 mt-4 p-2 w-40 flex flex-col rounded-md shadow-2xl bg-white origin-top-right">
                {sortOptions.map(option => (
                  <Menu.Item key={option.name}>
                    {({ active }) => (
                      <a href={option.href} 
                        className={`p-1 block rounded ${active ? "bg-gray-50" : option.current ? "bg-blue-50 text-blue-500" : "bg-transparent text-gray-400"} text-base font-medium whitespace-nowrap`}
                        onClick={() => sortBy(option.name)}
                      >
                        {option.name}
                      </a>
                    )}
                  </Menu.Item>
                ))
                }
              </Menu.Items>
            </Menu>

            {/* :::Filter button (small devices) */}
            <button className="sm:hidden text-gray-400 hover:text-blue-400" onClick={() => setOpenFilter(!openFilter)}>
  <FilterIcon className="w-6 h-6" />
</button>

          </div>
        </div>



        {/* :FILTER OPEN BACKGROUND (small devices) */}
        <div className={`lg:hidden absolute inset-0 bg-gray-500 bg-opacity-75 ${openFilter ? "visible" : "invisible"}`} style={{ overflowX: 'hidden', width: '100%' }} />




        <div className={`md:overflow-hidden col-span-full lg:col-span-1 absolute top-20 right-10 right-0 lg:inset-0 lg:relative w-full max-h-full max-w-xs overflow-y-scroll lg:overflow-auto ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'} rounded-md transition-all duration-300 ease-in-out transform
        ${openFilter ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 w-0 h-0"}`} >

          {/* ::Title (small devices) */}
    

          <div className="lg:hidden py-5 px-5 flex items-center justify-between border-b border-gray-200">
            <h3 className="text-2xl font-semibold">Filter</h3>
            <button className="text-gray-400 hover:text-gray-700" onClick={() => setOpenFilter(false)}>
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* ::Input Search (small devices) */}
          <div className="hidden relative m-5">
              {/* ::::label */}
              <label htmlFor="search" className="sr-only">Search</label>
              {/* ::::input */}
              <input
        type="search"
        id="search"
        name="search"
        placeholder="cari produk ..."
        value={searchInput}
        onChange={handleSearchInputChange}
        className={`w-full p-2 form-input pl-11 pr-5 w-44 block shadow-sm rounded-full text-sm placeholder-gray-300 focus:border-blue-300 focus:ring-1 focus:ring-gray-300 ${
          darkMode ? 'bg-gray-700' : 'bg-white border'
        }`}
      />
              {/* ::::icon */}
              <span className="absolute top-1/2 left-3 text-gray-400 transform -translate-y-1/2">
                <SearchIcon className="w-4 h-4" />
              </span>
            </div>
          


          {/* ::Filters */}
          <div className={`sm:hiddenpy-5 pl-5 pr-3 flex flex-col`}>

<h3 className="text-lg font-semibold mt-4 mb-2">Rentang Harga:</h3>

<div className="flex flex-col">
  <label className="mr-2 mb-1">Minimal (Rp):</label>
  <input
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
              className={`p-2 rounded ${darkMode ? 'bg-gray-700' : 'border rounded-md bg-gray-100'}`}
            />
</div>

<div className="flex flex-col mt-2">
  <label className="mr-2 mb-1">Maksimal (Rp):</label>
  <input
    type="number"
    value={maxPrice}
    onChange={handleMaxPriceChange}
    className={`p-2 rounded ${darkMode ? 'bg-gray-700' :'border rounded-md bg-gray-100'}`}
  />
</div>

</div>

          <div>
  {filters.map((section) => (
    <Disclosure as="div" key={section.id} defaultOpen={true} className="border-b border-gray-200">
      {({ open }) => (
        <div className={`py-5 pl-5 pr-3 flex flex-col ${open && ""}`}>
          {/* :::Category name */}
          <Disclosure.Button className="group flex items-center justify-between">
            <span className="text-base font-semibold">{section.name}</span>
            <ChevronRightIcon
              className={`w-6 h-6 ${open ? "transform rotate-90" : "text-gray-400 group-hover:text-gray-700 "}`}
            />
          </Disclosure.Button>

          <Disclosure.Panel className="mt-5 flex flex-col">
            {section.options.map((option) => (
              <div className="m-1 flex items-center space-x-3">
                <div>
                  <label htmlFor={option.label} className="sr-only">{`Color ${option.label}`}</label>
                  <input
                    type="checkbox"
                    name={option.label}
                    id={option.label}
                    value={option.value}
                    checked={activeFilters.kategori.includes(option.value)}
                    onChange={() =>
                      handleFilterChange("kategori", toggleFilter(activeFilters.kategori, option.value))
                    }
                    className="form-checkbox h-5 w-5 border-gray-300 rounded text-blue-400 focus:ring-blue-400"
                  />
                </div>
                <span className="text-base">{option.label}</span>
              </div>
            ))}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  ))}
</div>


        </div>



{/* :RESULT CONTENT */}




<div className="col-span-full lg:col-span-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
{currentProducts.map((product) => (
  <div key={product.id} className={`p-4 rounded-md shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
    {/* Display product information here */}
    <img className='rounded-md' src={product.image} alt={product.name} />
    <Link to={`/product/${product.slug}`}>
  <h3 className="text-lg font-bold mb-2 mt-2">{product.name}</h3>
</Link>

    <p className="mb-2">{product.category}</p>
    <p className="font-bold mb-2">{formatCurrency(product.price)}</p>
  </div>
))}

      </div>




      </div>

      <div className="flex justify-center mt-4">
      <nav aria-label="Page navigation example" className="flex justify-end mt-10">
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
                    ? ` border border-gray-300 ${
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

      
<div className="items-right">

</div>
      
      
    </div>
  )
  
}

export default CategoryFilter
