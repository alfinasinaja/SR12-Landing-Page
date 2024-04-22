// src/components/DetailPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const DetailPost = ({ darkMode }) => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch('/data/blog.json');
        const data = await response.json();

        // Find the post with the matching slug
        const selectedPost = data.find((p) => p.slug === slug);

        // Set the post in the state
        setPost(selectedPost);

        // Set all posts in the state
        setAllPosts(data);
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <section className="overflow-hidden py-24">
      <div className="container mx-auto px-4 flex flex-col gap-4 md:flex-row">
        {/* Left Side */}
        <div className="flex-1 lg:w-3/4 mb-4 md:mb-0">
          
        <div className="flex justify-center">
            
          <Link className="text-gray-500 group mb-12 inline-flex items-center gap-2 flex-wrap" to="/news">
            <div className="group-hover:text-gray-600 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15.4167 10H5M5 10L10 5M5 10L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <span className="group-hover:text-gray-600 transition duration-200 font-bold">Kembali ke Artikel</span>
          </Link>
        </div>
        
    <div className="px-8 lg:px-24 w-full">
    <h1 className="text-center text-3xl lg:text-5xl font-bold mb-12 max-w-xl lg:max-w-3xl mx-auto">{post.title}</h1>
    <img className="w-full rounded-2xl mb-12" src={post.image} alt={post.title} />
      <div className="w-full h-px bg-gray-200"></div>
      <div className="flex items-center justify-between flex-wrap gap-4 py-5">
        <div className="flex items-center gap-4 flex-wrap">
          <img src="solstice-assets/images/blog/avatar1.png" alt="" />
          <div>
            <p className="text-lg font-semibold">Alfinas Sandi</p>
            <span className="text-gray-500 font-medium">Graphic Designer</span>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="rounded-md py-0.5 px-2">
              <span className=" text-xs font-medium">{post.category}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="h-6 w-px bg-gray-200"></div>
            <span className="">{post.date}</span>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-200 mb-12"></div>
      <p className="mb-12">{post.description}</p>

      <div className="w-full h-px bg-gray-200 mb-12"></div>
      <div className="flex items-center justify-center flex-wrap gap-12">
        <div className="flex items-center gap-4 flex-wrap">
          <a className="p-5 h-16 w-16 rounded-full flex items-center justify-center border border-gray-200 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewbox="0 0 25 24" fill="none">
              <path d="M12.3751 3.42897L12.3751 3.42898L12.3771 3.42584C12.5221 3.20672 12.8006 2.98925 13.1518 2.86515C13.4985 2.74258 13.8706 2.72708 14.1951 2.84835L14.2028 2.85122L14.2106 2.85383C14.9628 3.10714 15.4551 3.96709 15.3012 4.68521L15.2984 4.69827L15.2963 4.71145L14.7763 7.98145L14.7762 7.98143L14.7745 7.99389C14.7168 8.42683 14.833 8.83524 15.0915 9.15457L15.0993 9.16417L15.1075 9.17337C15.3681 9.46467 15.7517 9.64997 16.1701 9.64997H20.2801C20.9354 9.64997 21.4508 9.91226 21.7423 10.3192C22.0135 10.7056 22.0838 11.231 21.8785 11.8139L21.8784 11.8139L21.8751 11.824L19.4151 19.314L19.4095 19.3312L19.4051 19.3487C19.1547 20.3501 18.0176 21.22 16.8901 21.22H12.9901C12.7058 21.22 12.3515 21.1702 12.0232 21.0721C11.6846 20.971 11.4337 20.8365 11.3037 20.7064L11.2812 20.6839L11.256 20.6645L9.97604 19.6745L9.97606 19.6744L9.97144 19.671C9.60889 19.3972 9.39014 18.9561 9.39014 18.49V8.32998C9.39014 8.03019 9.48007 7.73681 9.64563 7.48812C9.64581 7.48785 9.64598 7.48759 9.64616 7.48733L12.3751 3.42897Z" fill="#B8B8B8" stroke="#B8B8B8"></path>
              <path d="M5.71 6.37988H4.68C3.13 6.37988 2.5 6.97988 2.5 8.45988V18.5199C2.5 19.9999 3.13 20.5999 4.68 20.5999H5.71C7.26 20.5999 7.89 19.9999 7.89 18.5199V8.45988C7.89 6.97988 7.26 6.37988 5.71 6.37988Z" fill="#B8B8B8"></path>
            </svg>
          </a>
          <span className="text-sm font-medium">144</span>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <a className="p-5 h-16 w-16 rounded-full flex items-center justify-center border border-gray-200 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewbox="0 0 25 24" fill="none">
              <path d="M16.5 2H8.5C4.5 2 2.5 4 2.5 8V21C2.5 21.55 2.95 22 3.5 22H16.5C20.5 22 22.5 20 22.5 16V8C22.5 4 20.5 2 16.5 2ZM14.5 15.25H7.5C7.09 15.25 6.75 14.91 6.75 14.5C6.75 14.09 7.09 13.75 7.5 13.75H14.5C14.91 13.75 15.25 14.09 15.25 14.5C15.25 14.91 14.91 15.25 14.5 15.25ZM17.5 10.25H7.5C7.09 10.25 6.75 9.91 6.75 9.5C6.75 9.09 7.09 8.75 7.5 8.75H17.5C17.91 8.75 18.25 9.09 18.25 9.5C18.25 9.91 17.91 10.25 17.5 10.25Z" fill="#B8B8B8"></path>
            </svg>
          </a>
          <span className="text-sm font-medium">12</span>
        </div>
      </div>
    </div>



        </div>

        {/* Right Side */}
        <div className="flex lg:w-1/4">
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Artikel Terkait</h2>
            {/* Fetch and display links to 4 other posts */}
            {allPosts.slice(0, 4).map((relatedPost) => (
              <div key={relatedPost.id} className="mb-4 flex items-center">
                <img
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  className="w-24 h-16 object-cover rounded mr-4"
                />
                <div>
                  <Link to={`/news/${relatedPost.slug}`} className="font-bold">
                    {relatedPost.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>


          {/* Other content for the right side */}
        </div>
      </div>
    </section>
  );
};

export default DetailPost;
