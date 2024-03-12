
// import { Link } from 'react-router-dom';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';



// function Home() {
//   const images = [
//     'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',
//     'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
//     'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg',
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div>
//       {/* top */}
//       <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
//         <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>
//           Find your next <span className='text-slate-500'>perfect</span>
//           <br />
//           place with ease
//         </h1>
//         <div className='text-gray-400 text-xs sm:text-sm'>
//           Your space is the best place to find your next perfect place to
//           live.
//           <br />
//           We have a wide range of properties for you to choose from.
//         </div>
//         <Link
//           to={'/search'}
//           className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
//         >
//           Let's get started...
//         </Link>
//       </div>

//       {/* swiper image section */}
//       <div className='mx-auto max-w-screen-lg'>
//         <Slider {...sliderSettings} className=''>
//           {images.map((image, index) => (
//             <div key={index} className='h-80'>
//               <img
//                 src={image}
//                 alt={`Image ${index + 1}`}
//                 className='w-full h-full object-cover rounded-md'
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>


//      {/*offer, sale and rent section */}


//     </div>
//   );
// }

// export default Home;




import { Link } from 'react-router-dom';
import Slider from 'react-slick';

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
      image: 'https://example.com/house1.jpg',
      details: '3 Bed | 2 Bath | 1500 sqft',
      location: '123 Main St, Cityville',
      price: '$2000/month',
    },
    {
      image: 'https://example.com/house2.jpg',
      details: '4 Bed | 3 Bath | 2000 sqft',
      location: '456 Elm St, Townsville',
      price: '$2500/month',
    },
    {
      image: 'https://example.com/house3.jpg',
      details: '2 Bed | 1 Bath | 1000 sqft',
      location: '789 Oak St, Villagetown',
      price: '$1800/month',
    },
    {
      image: 'https://example.com/house4.jpg',
      details: '5 Bed | 4 Bath | 2500 sqft',
      location: '101 Pine St, Countryside',
      price: '$3000/month',
    },
  ];

  return (
    <div>
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
          Let's get started...
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
                className='w-full h-full object-cover rounded-md'
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* offer section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-screen-xl'>
        {offerData.map((offer, index) => (
          <div key={index} className='bg-white p-6 rounded-md shadow-md'>
            <img
              src={offer.image}
              alt={`House ${index + 1}`}
              className='w-full h-40 object-cover rounded-md mb-4'
            />
            <p className='text-gray-600 text-sm mb-2'>{offer.details}</p>
            <p className='text-gray-700 font-bold mb-2'>{offer.location}</p>
            <p className='text-blue-800 font-bold'>{offer.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
