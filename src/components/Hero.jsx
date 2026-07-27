// function Hero() {
//   return (
//     <section className="relative min-h-screen bg-[#15171E] flex items-center justify-center overflow-hidden">
      
//       {/* Left Arrow */}
// <button 
//   aria-label="Previous Slide" 
//   className="absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-80 transition-opacity"
// >
//   <svg 
//     width="48" 
//     height="48" 
//     viewBox="0 0 24 24" 
//     fill="currentColor" 
//     className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
//   >
//     <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
//   </svg>
// </button>
//       {/* Hero Content */}
//       <div className="text-center px-6 max-w-6xl">
        
//        <h1 className="font-['Courier_New'] text-[60px] font-normal uppercase text-white leading-none mb-0">
//   Welcome To{" "}
//   <span className="text-[#2BBBC0] font-bold">ONE</span>
//   <span className="font-bold">PAGER</span>
// </h1>

// <p className="mt-0 font-['Courier_New'] text-[20px] leading-[1.5] text-white">
//   we design and develop awesome websites and smart
//   <br />
//   applications, impactful identities using the latest
// </p>

//         {/* Learn More Button */}
//        <button className="mt-8 bg-[#2BBBC0] px-8 py-4 font-['Courier_New'] text-[16px] font-bold uppercase text-white skew-x-[-20deg]">
//   <span className="inline-block skew-x-[20deg]">
//     Learn More
//   </span>
// </button>

//       </div>

//       {/* Right Arrow */}
//       {/* <button className="absolute right-16 top-1/2 -translate-y-1/2 text-white text-3xl font-extrabold">
//   →
// </button> */}
// {/* Right Arrow */}
//    {/* <button className="arrow-right absolute right-16 top-1/2 -translate-y-1/2">
// </button> */}
// {/* Right Arrow */}
// <button 
//   aria-label="Next Slide" 
//   className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-80 transition-opacity"
// >
//   <svg 
//     width="48" 
//     height="48" 
//     viewBox="0 0 24 24" 
//     fill="currentColor" 
//     className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
//   >
//     <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
//   </svg>
// </button>
//     </section>
//   );
// }

// export default Hero;

// import { useState } from "react";

// function Hero() {
//   const slides = [
//     {
//       title: (
//         <>
//           Welcome To{" "}
//           <span className="text-[#2BBBC0] font-bold">ONE</span>
//           <span className="font-bold">PAGER</span>
//         </>
//       ),
//       text: (
//         <>
//           we design and develop awesome websites and smart
//           <br />
//           applications, impactful identities using the latest
//         </>
//       ),
//     },
//     {
//       title: (
//         <>
//           WE ARE GREAT <span className="font-bold">COMPANY</span>
//         </>
//       ),
//       text: (
//         <>
//           Lorem ipsum dolor sit amet, consectetur adipisicing
//           <br />
//           elit, sed do eiusmod
//         </>
//       ),
//     },
//     {
//       title: (
//         <>
//           <span className="text-[#2BBBC0] font-bold">ONE</span>
//           <span className="font-bold">PAGER</span> IS VERY SUITABLE
//         </>
//       ),
//       text: (
//         <>
//           Duis aute irure dolor in reprehenderit in voluptate
//           <br />
//           velit esse, consectetur adipisicing elit
//         </>
//       ),
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (currentSlide - 1 + slides.length) % slides.length
//     );
//   };

//   return (
//     <section className="relative min-h-screen bg-[#15171E] flex items-center justify-center overflow-hidden">

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-16 top-1/2 -translate-y-1/2 z-10"
//       >
//         <svg width="45" height="45" viewBox="0 0 45 45">
//           <path
//             d="M27 10L12 22.5L27 35V27H39V18H27V10Z"
//             fill="white"
//           />
//         </svg>
//       </button>

//       {/* Hero Content */}
//       <div className="text-center px-6 max-w-6xl">
//         <h1 className="font-['Courier_New'] text-[60px] font-normal uppercase text-white leading-none mb-0">
//           {slides[currentSlide].title}
//         </h1>

//         <p className="mt-0 font-['Courier_New'] text-[20px] leading-[1.5] text-white">
//           {slides[currentSlide].text}
//         </p>

//         {/* Learn More */}
//         <button className="mt-8 bg-[#2BBBC0] px-8 py-4 font-['Courier_New'] text-[16px] font-bold uppercase text-white skew-x-[-20deg]">
//           <span className="inline-block skew-x-[20deg]">
//             Learn More
//           </span>
//         </button>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-16 top-1/2 -translate-y-1/2 z-10"
//       >
//         <svg width="45" height="45" viewBox="0 0 45 45">
//           <path
//             d="M18 10L33 22.5L18 35V27H6V18H18V10Z"
//             fill="white"
//           />
//         </svg>
//       </button>

//     </section>
//   );
// }

// export default Hero;

// yahan sy complete wala code ha

// import { useState } from "react";

// function Hero() {
//   const slides = [
//     // 1st Slide: Welcome To ONEPAGER
//     {
//       title: (
//         <>
//           Welcome To{" "}
//           <span className="text-[#2BBBC0] font-bold">ONE</span>
//           <span className="font-bold">PAGER</span>
//         </>
//       ),
//       text: (
//         <>
//           we design and develop awesome websites and smart
//           <br />
//           applications, impactful identities using the latest
//         </>
//       ),
//     },

//     // 2nd Slide: We Are Great Company
//     {
//       title: (
//         <>
//           WE ARE GREAT <span className="font-bold">COMPANY</span>
//         </>
//       ),
//       text: (
//         <>
//           Lorem ipsum dolor sit amet, consectetur adipisicing
//           <br />
//           elit, sed do eiusmod
//         </>
//       ),
//     },

//     // 3rd Slide: Onepager Is Very Suitable
//     {
//    title: (
//   <>
//     <span className="text-[#2BBBC0] font-bold">ONE</span>
//     <span className="font-bold">PAGER</span> IS VERY
//     <br />
//     SUITABLE
//   </>
// ),
//       text: (
//         <>
//           Duis aute irure dolor in reprehenderit in voluptate
//           <br />
//           velit esse, consectetur adipisicing elit
//         </>
//       ),
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (currentSlide - 1 + slides.length) % slides.length
//     );
//   };

//   return (
//     <section className="relative min-h-screen bg-[#15171E] flex items-center justify-center overflow-hidden">

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-16 top-1/2 -translate-y-1/2 z-10"
//       >
//         <svg width="45" height="45" viewBox="0 0 45 45">
//           <path
//             d="M27 10L12 22.5L27 35V27H39V18H27V10Z"
//             fill="white"
//           />
//         </svg>
//       </button>

//       {/* Hero Content */}
//       <div className="text-center px-6 max-w-6xl">
//         <h1 className="font-['Courier_New'] text-[60px] font-normal uppercase text-white leading-none mb-0">
//           {slides[currentSlide].title}
//         </h1>

//         <p className="mt-0 font-['Courier_New'] text-[20px] leading-[1.5] text-white">
//           {slides[currentSlide].text}
//         </p>

//         {/* Learn More */}
//         <button className="mt-8 bg-[#2BBBC0] px-8 py-4 font-['Courier_New'] text-[16px] font-bold uppercase text-white skew-x-[-20deg]">
//           <span className="inline-block skew-x-[20deg]">
//             Learn More
//           </span>
//         </button>
//       </div>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-16 top-1/2 -translate-y-1/2 z-10"
//       >
//         <svg width="45" height="45" viewBox="0 0 45 45">
//           <path
//             d="M18 10L33 22.5L18 35V27H6V18H18V10Z"
//             fill="white"
//           />
//         </svg>
//       </button>

//     </section>
//   );
// }

// export default Hero;

// mari practice
import { useState } from "react";
function Hero(){
  const slides=[
   {
    title:(
      <>
      WELCOME TO{" "}
      <span className="text-[#2BBBC0] font-bold">ONE</span>
      <span className="font-bold">PAGER</span>
      </>
    ),
    text: (
       <>
    we design and develop awesome websites and smart
    <br />
    applications, impactful identities using the latest
  </>
  ), 
   },
   {
   title:(
    <>
    WE ARE GREAT{" "}
    <span className="font-bold">COMPANY</span>
    </>
   ),
  text:(
       <>
      Lorem ipsum dolor sit amet, consectetur adipisicing
      <br />
      elit, sed do eiusmod
    </>
  ),

   },
   {
    title:(
      <>
      <span className="text-[#2BBBC0] font-bold">ONE</span>
      <span className="font-bold">PAGER</span>
      IS VERY 
      <br />
      SUITABLE
      </>
    ),
    text:(
     <>
      Duis aute irure dolor in reprehenderit in voluptate
      <br />
      velit esse, consectetur adipisicing elit
     </>
    ),
   },

  ]
  const[currentSlide,setCurrentSlide]=useState(0);
  const nextSlide =()=>{
    setCurrentSlide((currentSlide+1)% slides.length);
  }
  const prevSlide = () => {
  setCurrentSlide(
    (currentSlide - 1 + slides.length) % slides.length
  );
};
return (
<section className="relative text-center bg-[#15171E] h-[573px] flex items-center justify-center bg-no-repeat bg-left-top bg-[length:100_700px]"
style={{backgroundImage:"url('https://task2onepagerwebsite1.vercel.app/assets/slide-WG9bbtGy.jpg')"}}>
  <div>
    <h1 className="text-white font-['Courier_New'] text-3xl sm:text-5xl md:text-6xl font-normal">
     {slides[currentSlide].title}
    </h1>
    <p className="text-white font-['Courier_New'] text-[16px] sm:text-[18px] md:text-[21px]" >
      {slides[currentSlide].text}
    </p>
  <button className="mt-8 bg-[#2BBBC0] px-5 py-3 sm:px-6 py-3 md:px-8 py-4 font-['Courier_New'] font-bold text-white skew-x-[-20deg]">
    <span className="inline-block skew-x-[20deg]">
      Learn More
    </span>
  </button>
  <button
  onClick={prevSlide}
  className="absolute left-4 sm:left-8 md:left-16 top-1/2 -translate-y-1/2"
>
  <svg width="45" height="45" viewBox="0 0 45 45">
    <path
     d="M27 10L12 22.5L27 35V27H39V18H27V10Z"
      fill="white"
    />
  </svg>
</button>
  <button onClick={nextSlide} className="absolute right-4 sm:right-8 md:right-16 top-1/2 -translate-y-1/2">
      <svg width="45" height="45" viewBox="0 0 45 45">
    <path
      d="M18 10L33 22.5L18 35V27H6V18H18V10Z"
      fill="white"
    />
  </svg>

  </button>
  </div>

</section>
);

}
export default Hero;