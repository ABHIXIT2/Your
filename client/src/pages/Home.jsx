
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
// import RemoveScrollBar from 'react-remove-scroll-bar';
// import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const images = [
    'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
    'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const offerData = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693100979175luxury-home-in-dubai---3.png?alt=media&token=fa094ff8-7bc1-4c47-9028-67ae5983af27',
      details: '3 Bed | 2 Bath | 1500 sqft',
      location: '123 Main St, Cityville',
      price: '$2000/month',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693307829089home%203.jpeg?alt=media&token=8dcc9a22-a8d3-4737-b27f-7c77b417a7d0',
      details: '4 Bed | 3 Bath | 2000 sqft',
      location: '456 Elm St, Townsville',
      price: '$2500/month',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693270025466home-2.jpeg?alt=media&token=479040c7-953e-4d8c-9735-08c043d2e9f1',
      details: '2 Bed | 1 Bath | 1000 sqft',
      location: '789 Oak St, Villagetown',
      price: '$1800/month',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693270558286home%201.jpeg?alt=media&token=07a0caba-f3ef-4540-b448-6601b4ae008f',
      details: '5 Bed | 4 Bath | 2500 sqft',
      location: '101 Pine St, Countryside',
      price: '$3000/month',
    },
  ];


  const recentPlaces = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693307829089home%203.jpeg?alt=media&token=8dcc9a22-a8d3-4737-b27f-7c77b417a7d0',
      details: 'Ultra-Modern Penthouse in the Cloud',
      location: '456 Serenity Lane, Meadowville',
      price: '$500 / month',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693270558286home%201.jpeg?alt=media&token=07a0caba-f3ef-4540-b448-6601b4ae008f',
      details: 'Tranquil Lakeside Retreat',
      location: '789 Serenity Drive, Lakeview Haven, FAKE789',
      price: '$2000/month',
    },
    
    
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693307651154home-5.jpeg?alt=media&token=6bb7b8b4-9621-49d1-a440-bbfd2d0beeb6',
      details: 'Modern Loft with Stunning Views',
      location: '101 Serene Shore Road, Willow Lake',
      price: '$3000/month',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693270025466home-2.jpeg?alt=media&token=479040c7-953e-4d8c-9735-08c043d2e9f1',
      details: 'Cottage in the Heart of Willow',
      location: '123 Maple Lane, Willowbrook, FAKE123',
      price: '$1800/month',
    },
    
  ];

  const rPlaces = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693307733992home-4.jpeg?alt=media&token=dc67fc6a-34af-4231-95bb-f2d9e643ddc3',
      details: 'Beachfront Villa with Private Access',
      location: '456 Skyline Avenue, Metroville, FAKE456',
      price: '$945,000',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693308406407home-12.jpeg?alt=media&token=6845fe15-22bd-4c19-abee-9cd4a66d190c',
      details: 'Charming Log Cabin by the Lake',
      location: '789 Techno Plaza, Skyscape City',
      price: '$1,290,000',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693100979175luxury-home-in-dubai---3.png?alt=media&token=fa094ff8-7bc1-4c47-9028-67ae5983af27',
      details: 'Tranquil Lakeside Retreat',
      location: '789 Serenity Drive, Lakeview Haven, FAKE789',
      price: '$73000',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/mern-auth-1c4ae.appspot.com/o/1693308322076home-13.jpeg?alt=media&token=659d9c82-97c7-4db9-94c5-28d8e381dad6',
      details: 'Enchanted Cottage with Lush Gardens',
      location: '123 Artisan Avenue, Metropolis Heights',
      price: '$1233000',
    },
  ];
  

  return (
    <div >
      {/* top */}
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
          Find your next <span className='text-slate-500'>perfect</span>
          <br />
          place with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          Your space is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <Link
          to={'/search'}
          className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
        >
          Let&apos;s get started...
        </Link>
      </div>

      {/* swiper image section */}
      <div className='mx-auto max-w-screen-lg'>
        <Slider {...sliderSettings} className=''>
          {images.map((image, index) => (
            <div key={index} className='h-80'>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className='w-full h-full object-cover '
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* offer section */}
      <br />
      <h2 className='text-2xl font-semibold text-slate-600  ml-6'>Recent offers</h2>
      <Link className='text-sm text-blue-800 hover:underline ml-6'>Show more offers</Link>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-screen-xl my-2 p-5'>
        
        {offerData.map((offer, index) => (
          <div key={index} className='bg-white p- rounded-md shadow-md'>
            <img
              src={offer.image}
              alt={`House ${index + 1}`}
              className='w-full h-40 object-cover rounded-md mb-4 transition-transform duration-300 transform hover:scale-105'
            />
            <p className='text-gray-600 text-sm mb-2 ml-3'>{offer.details}</p>
            <p className='text-gray-700 font-bold mb-2 ml-2'>{offer.location}</p>
            <p className='text-blue-800 font-bold ml-2'>{offer.price}</p>
          </div>
        ))}
      </div>


      {/* Recent places for rent section*/}
       <br />
      <h2 className='text-2xl font-semibold text-slate-600  ml-6'>Recent places for rent</h2>
      <Link className='text-sm text-blue-800 hover:underline ml-6'>Show more places for rent</Link>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-screen-xl my-2 p-5'>
        
        {recentPlaces.map((offer, index) => (
          <div key={index} className='bg-white  rounded-md shadow-md'>
            <img
              src={offer.image}
              alt={`House ${index + 1}`}
              className='w-full h-40 object-cover rounded-md mb-4 transition-transform duration-300 transform hover:scale-105'
            />
            <p className='text-gray-600 text-sm mb-2 ml-3'>{offer.details}</p>
            <p className='text-gray-700 font-bold mb-2 ml-3'>{offer.location}</p>
            <p className='text-blue-800 font-bold ml-3'>{offer.price}</p>
          </div>
        ))}
      </div>

      {/* Recent places for sale section*/}
      <br />
      <h2 className='text-2xl font-semibold text-slate-600  ml-6'>Recent places for sale</h2>
      <Link className='text-sm text-blue-800 hover:underline ml-6'>Show more places for sale</Link>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-screen-xl my-2 p-5'>
        
        {rPlaces.map((offer, index) => (
          <div key={index} className='bg-white  rounded-md shadow-md'>
            <img
              src={offer.image}
              alt={`House ${index + 1}`}
              className='w-full h-40 object-cover rounded-md mb-4 transition-transform duration-300 transform hover:scale-105'
            />
            <p className='text-gray-600 text-sm mb-2 ml-3'>{offer.details}</p>
            <p className='text-gray-700 font-bold mb-2 ml-3'>{offer.location}</p>
            <p className='text-blue-800 font-bold ml-3'>{offer.price}</p>
          </div>
        ))}
      </div>
      {/* <RemoveScrollBar /> */}
    </div>
  );
}

export default Home;
