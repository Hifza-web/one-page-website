// // function Portfolio() {
// //   const portfolioItems = [
// //     {
// //       image: "https://demoxml.com/html/onepager/images/portfolio/1.jpg",
// //       title: "Cool App Design",
// //       category: "development, mobile",
// //     },
// //     {
// //       image: "https://demoxml.com/html/onepager/images/portfolio/2.jpg",
// //       title: "Cool App Design",
// //       category: "development, mobile",
// //     },
// //     {
// //       image: "https://demoxml.com/html/onepager/images/portfolio/3.jpg",
// //       title: "Cool App Design",
// //       category: "development, mobile",
// //     },
// //     {
// //       image: "https://demoxml.com/html/onepager/images/portfolio/4.jpg",
// //       title: "Cool App Design",
// //       category: "development, mobile",
// //     },
// //     {
// //       image: "https://demoxml.com/html/onepager/images/portfolio/5.jpg",
// //       title: "Cool App Design",
// //       category: "development, mobile",
// //     },
// //     {
// //       image: "https://demoxml.com/html/onepager/images/portfolio/6.jpg",
// //       title: "Cool App Design",
// //       category: "development, mobile",
// //     },
// //   ];

// //   return (
// //     <section
// //       id="portfolio"
// //       className="bg-cover bg-center bg-no-repeat py-20"
// //       style={{
// //         backgroundImage:
// //           "url('https://demoxml.com/html/onepager/upload/background1.jpg')",
// //       }}
// //     >
// //       <div className="mx-auto max-w-6xl px-8 mt-20 text-center">
// //         {/* Heading */}
// // <h2 className="font-['Courier_New'] text-5xl font-bold uppercase text-[#15171E]">
// //   Our Portfolio
// // </h2>

// //         {/* Description */}
// //         <p className="mt-2 font-['Courier_New'] text-lg text-[#777]">
// //           This is Photoshop's version of Lorem Ipsum. Proin gravida
// //         </p>
// // <div className="mx-15 mt-10 h-[1px] bg-[#D6D6D6]"></div>

// //         {/* Filter Buttons */}
// //         <div className="mt-10 flex justify-center gap-6 font-['Courier_New'] uppercase font text-[18px] font-normal">
// //           <button>All</button>
// //           <button>Web Design</button>
// //           <button>Photography</button>
// //           <button>Illustration</button>
// //           <button>Branding</button>
// //         </div>

// //         <div className="mx-15 mt-10 h-[1px] bg-[#D6D6D6]"></div>

// //         {/* Portfolio Grid */}
// //         <div className="mt-12 grid grid-cols-3 gap-6">
// //           {portfolioItems.map((item, index) => (
// //             <div key={index} className="text-left">
// //               <img
// //                 src={item.image}
// //                 alt={item.title}
// //                 className="h-auto w-full"
// //               />

// //               <h3 className="mt-4 font-['Courier_New'] text-xl text-[#15171E]">
// //                 {item.title}
// //               </h3>

// //               <p className="font-['Courier_New'] text-sm text-[#777]">
// //                 {item.category}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Portfolio;
// import { useState } from "react";
// function Portfolio() {
//   const [filter, setFilter] = useState("all");
//   return (
//     <section
//       id="portfolio"
//       className="bg-left-top bg-no-repeat py-20 bg-[length:100%_97%]"
//       style={{
//         backgroundImage:
//           "url('https://demoxml.com/html/onepager/upload/background1.jpg')",
//       }}
//     >
//       {/* <div className="mx-auto max-w-6xl px-8 mt-20 text-center"> */}
//       <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10 pt-20 text-center">
//         {/* Heading */}
//         <h2 className="font-['Courier_New'] text-5xl font-bold uppercase text-[#15171E]">
//           Our Portfolio
//         </h2>

//         {/* Description */}
//         <p className="mt-2 font-['Courier_New'] text-lg text-[#777]">
//           This is Photoshop's version of Lorem Ipsum. Proin gravida
//         </p>

//         {/* Divider */}
//         {/* <div className="mx-15 mt-10 h-[1px] bg-[#D6D6D6]"></div> */}
//         <div className="mx-auto mt-10 h-[1px] w-full bg-[#D6D6D6]"></div>

//         {/* Filter Buttons */}
//         <div className="mt-7 flex justify-center gap-6 font-['Courier_New'] text-[18px] font-normal">
//           <button onClick={()=> setFilter("all")} 
//              className="px-4 py-2 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
//             <span>
//               All
//             </span >
//             </button>
//           <button onClick={()=> setFilter("web-design")}
//              className="px-4 py-2 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
//            <span >
//              Web Design
//            </span> 
//             </button>
//           <button onClick={()=>setFilter("photography")}
//              className="px-4 py-2 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
//             <span >
//                Photography
//             </span>
//             </button>
//           <button onClick={()=>setFilter("illustration")}
//              className="px-4 py-2 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
//             <span >
//               Illustration
//             </span>
//             </button>
//           <button onClick={()=>setFilter("branding")}
//              className="px-4 py-2 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
//            <span>
//              Branding
//            </span>
//             </button>
//         </div>

//         <div className="mx-15 mt-10 h-[1px] bg-[#D6D6D6]"></div>
//       </div>

//      {filter === "web-design" && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10 w-full px-6 lg:px-10">

//     {/* Pehla Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/1.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/8.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/1.jpg"
//       />
//     </div>

//     {/* Dusra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/4.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/10.jpg"
//       />
//     </div>

//     {/* Teesra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/5.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/7.jpg"
//       />
//     </div>

//   </div>
// )}

//  {filter === "photography" && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10 w-full px-6 lg:px-10">

//     {/* Pehla Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/1.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/10.jpg"
//       />
//     </div>

//     {/* Dusra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/3.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/6.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/1.jpg"
//       />
//     </div>

//     {/* Teesra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/5.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/9.jpg"
//       />
//     </div>

//   </div>
// )}

// {filter === "illustration" && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10 w-full px-6 lg:px-10">

//     {/* Pehla Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/2.jpg"
//       />
//     </div>

//     {/* Dusra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/3.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/9.jpg"
//       />
//     </div>

//     {/* Teesra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/7.jpg"
//       />
//     </div>

//   </div>
// )}

// {filter === "branding" &&(

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10 w-full px-6 lg:px-10">
//      {/* {Pehla column} */}
//     <div className="flex flex-col gap-5">
//      <img className="w-full h-auto"
//       src="https://demoxml.com/html/onepager/upload/2.jpg" 
//      alt="" />
//     </div>
//  {/* {Pehla column} */} 
//    <div className="flex flex-col gap-5">
//     <img className="w-full h-auto"
//     src="https://demoxml.com/html/onepager/upload/4.jpg" alt="" />
//    </div>

//    {/* {Tesara column} */}
//    <div className="flex flex-col gap-5">
//     <img 
//     src="https://demoxml.com/html/onepager/upload/6.jpg" alt="" />

//     <img  className="w-full h-auto"
//     src="https://demoxml.com/html/onepager/upload/8.jpg" 
//     alt="" />
//    </div>
//   </div>
//   )}
  
   
//    {filter !== "web-design" &&
//    filter !== "photography" &&
//    filter !== "illustration" &&
//    filter !== "branding"
//    &&(
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10 w-full px-6 lg:px-10">
//         {/* Pehla Column */}
//         <div className="flex flex-col gap-5">
//           {(filter === "all" ||
//             filter === "web-design" ||
//             filter === "photography") && (
//             <div className="work-post web-design photography">
//               <img
//                 className="w-full h-auto"
//                 alt=""
//                 src="https://demoxml.com/html/onepager/upload/1.jpg"
//               />
//             </div>
//           )}
//           {(filter === "all" ||
//             filter === "branding" ||
//             filter === "illustration") && (
//             <div className="work-post branding illustration">
//               <img
//                 className="w-full h-auto"
//                 alt=""
//                 src="https://demoxml.com/html/onepager/upload/5.jpg"
//               />
//             </div>
//           )}
//           {(filter === "all" ||
//             filter === "photography" ||
//             filter === "illustration") && (
//             <div className="work-post photography illustration">
//               <img
//                 className="w-full h-auto"
//                 alt=""
//                 src="https://demoxml.com/html/onepager/upload/7.jpg"
//               />
//             </div>
//           )}
//           {(filter === "all" ||
//             filter === "photography" ||
//             filter === "illustration") && (
//             <div className="work-post photography illustration">
//               <img
//                 className="w-full h-auto"
//                 alt=""
//                 src="https://demoxml.com/html/onepager/upload/10.jpg"
//               />
//             </div>
//           )}
//         </div>

//         {/* Dusra Column */}
//         <div className="flex flex-col gap-5">
//           {(filter === "all" ||
//             filter === "web-design" ||
//             filter === "photography") && (          
//           <div className="work-post web-design photography">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="https://demoxml.com/html/onepager/upload/2.jpg"
//             />
//           </div>
//             )}
//             {(filter === "all" ||
//               filter === "branding" ||
//               filter === "illustration") &&(            
//           <div className="work-post branding illustration">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="https://demoxml.com/html/onepager/upload/6.jpg"
//             />
//           </div>
//             )}
//             {(filter === "all" ||
//               filter === "photography" ||
//               filter === "illustration") &&(
            
//           <div className="work-post photography illustration">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="https://demoxml.com/html/onepager/upload/8.jpg"
//             />
//           </div>
//           )}
//           {(filter === "all" ||
//             filter === "photography" ||
//             filter === "illustration" ) &&(
          
//           <div className="work-post photography illustration">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="https://demoxml.com/html/onepager/upload/1.jpg"
//             />
//           </div>
//           )}
//         </div>
//         {/* Teesra Column (3 Images) */}
//         <div className="flex flex-col gap-5">
//           {(filter === "all" ||
//             filter === "web-desing" ||
//             filter === "branding") &&(
          
//           <div className="work-post web-design branding">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="	https://demoxml.com/html/onepager/upload/3.jpg"
//             />
//           </div>
//           )}
//           {(filter === "all" || 
//             filter === "illustration" ||
//             filter === "photography") && (
         
//           <div className="work-post illustration photography">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="https://demoxml.com/html/onepager/upload/4.jpg"
//             />
//           </div>
//            )}
//           {(filter=== "all" ||
//             filter=== "web-design" || 
//             filter=== "illustration" ) && (
          
//           <div className="work-post web-design illustration">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="	https://demoxml.com/html/onepager/upload/9.jpg"
//             />
//           </div>
//           )}
//         </div>
//       </div>
//       )}
//     </section>
//   );
// }
// export default Portfolio;



// function Portfolio() {
//   const portfolioItems = [
//     {
//       image: "https://demoxml.com/html/onepager/images/portfolio/1.jpg",
//       title: "Cool App Design",
//       category: "development, mobile",
//     },
//     {
//       image: "https://demoxml.com/html/onepager/images/portfolio/2.jpg",
//       title: "Cool App Design",
//       category: "development, mobile",
//     },
//     {
//       image: "https://demoxml.com/html/onepager/images/portfolio/3.jpg",
//       title: "Cool App Design",
//       category: "development, mobile",
//     },
//     {
//       image: "https://demoxml.com/html/onepager/images/portfolio/4.jpg",
//       title: "Cool App Design",
//       category: "development, mobile",
//     },
//     {
//       image: "https://demoxml.com/html/onepager/images/portfolio/5.jpg",
//       title: "Cool App Design",
//       category: "development, mobile",
//     },
//     {
//       image: "https://demoxml.com/html/onepager/images/portfolio/6.jpg",
//       title: "Cool App Design",
//       category: "development, mobile",
//     },
//   ];

//   return (
//     <section
//       id="portfolio"
//       className="bg-cover bg-center bg-no-repeat py-20"
//       style={{
//         backgroundImage:
//           "url('https://demoxml.com/html/onepager/upload/background1.jpg')",
//       }}
//     >
//       <div className="mx-auto max-w-6xl px-8 mt-20 text-center">
//         {/* Heading */}
// <h2 className="font-['Courier_New'] text-5xl font-bold uppercase text-[#15171E]">
//   Our Portfolio
// </h2>

//         {/* Description */}
//         <p className="mt-2 font-['Courier_New'] text-lg text-[#777]">
//           This is Photoshop's version of Lorem Ipsum. Proin gravida
//         </p>
// <div className="mx-15 mt-10 h-[1px] bg-[#D6D6D6]"></div>

//         {/* Filter Buttons */}
//         <div className="mt-10 flex justify-center gap-6 font-['Courier_New'] uppercase font text-[18px] font-normal">
//           <button>All</button>
//           <button>Web Design</button>
//           <button>Photography</button>
//           <button>Illustration</button>
//           <button>Branding</button>
//         </div>

//         <div className="mx-15 mt-10 h-[1px] bg-[#D6D6D6]"></div>

//         {/* Portfolio Grid */}
//         <div className="mt-12 grid grid-cols-3 gap-6">
//           {portfolioItems.map((item, index) => (
//             <div key={index} className="text-left">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="h-auto w-full"
//               />

//               <h3 className="mt-4 font-['Courier_New'] text-xl text-[#15171E]">
//                 {item.title}
//               </h3>

//               <p className="font-['Courier_New'] text-sm text-[#777]">
//                 {item.category}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Portfolio;
// import { useState } from "react";
// function Portfolio() {
//   const [filter, setFilter] = useState("all");
  
//   return (
//     <section
//       id="portfolio"
//       // className="bg-left-top bg-no-repeat py-20 bg-[length:100%_97%]"
//       className="bg-cover bg-center bg-no-repeat py-20"

//       style={{
//         backgroundImage:
//           "url('https://demoxml.com/html/onepager/upload/background1.jpg')",
//       }}
//     >
//       {/* <div className="mx-auto max-w-6xl px-8 mt-20 text-center"> */}
//       {/* <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-10 pt-20 text-center"> */}
//       {/* <div className="mx-auto w-full max-w-[1600px] px-10 xl:px-16 pt-20 text-center"> */}
//       <div className="mx-auto w-full max-w-[1600px] px-10 xl:px-16 pt-20 text-center">
//         {/* Heading */}
//         <h2 className="font-['Courier_New'] text-[45px] font-bold uppercase text-[#15171E]">
//           Our Portfolio
//         </h2>

//         {/* Description */}
//         <p className=" font-['Courier_New'] text-lg text-[#777]">
//           This is Photoshop's version of Lorem Ipsum. Proin gravida
//         </p>

//         {/* Divider */}
//         {/* <div className="mx-15 mt-10 h-[1px] bg-[#D6D6D6]"></div> */}
//         {/* <div className="mx-auto mt-10 h-[1px] w-full bg-[#D6D6D6]"></div> */}
//        <div className="mx-auto mt-10 h-[1px] w-[70%] max-w-[1170px] bg-[#D6D6D6]"></div>


//         {/* Filter Buttons */}
//         {/* <div className="mt-7 flex justify-center gap-6 font-['Courier_New'] text-[18px] font-normal"> */}
//         <div className="mt-6 flex justify-center gap-3 font-['Courier_New'] text-[18px] font-normal">
//           <button onClick={()=> setFilter("all")} 
//              className="px-3 py-1.5 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
//             <span>
//               All
//             </span >
//             </button>
//           <button onClick={()=> setFilter("web-design")}
//              className="px-3 py-1.5 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
//            <span >
//              Web Design
//            </span> 
//             </button>
//           <button onClick={()=>setFilter("photography")}
//              className="px-3 py-1.5 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
//             <span >
//                Photography
//             </span>
//             </button>
//           <button onClick={()=>setFilter("illustration")}
//              className="px-3 py-1.5 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
//             <span >
//               Illustration
//             </span>
//             </button>
//           <button onClick={()=>setFilter("branding")}
//              className="px-3 py-1.5 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
//            <span>
//              Branding
//            </span>
//             </button>
//         </div>

//         {/* <div className="mx-15 mt-10 h-[1px] bg-[#D6D6D6]"></div> */}
//         {/* <div className="mx-auto mt-10 h-[1px] w-full bg-[#D6D6D6]"></div> */}
//        <div className="mx-auto mt-10 h-[1px] w-[70%] max-w-[1170px] bg-[#D6D6D6]"></div>

//       </div>

//      {filter === "web-design" && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 w-full px-10 xl:px-16">

//     {/* Pehla Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/1.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/8.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/1.jpg"
//       />
//     </div>

//     {/* Dusra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/4.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/10.jpg"
//       />
//     </div>

//     {/* Teesra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/5.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/7.jpg"
//       />
//     </div>

//   </div>
// )}

//  {filter === "photography" && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 w-full px-10 xl:px-16">

//     {/* Pehla Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/1.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/10.jpg"
//       />
//     </div>

//     {/* Dusra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/3.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/6.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/1.jpg"
//       />
//     </div>

//     {/* Teesra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/5.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/9.jpg"
//       />
//     </div>

//   </div>
// )}

// {filter === "illustration" && (
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 w-full px-10 xl:px-16">

//     {/* Pehla Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/2.jpg"
//       />
//     </div>

//     {/* Dusra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/3.jpg"
//       />

//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/9.jpg"
//       />
//     </div>

//     {/* Teesra Column */}
//     <div className="flex flex-col gap-5">
//       <img
//         className="w-full h-auto"
//         alt=""
//         src="https://demoxml.com/html/onepager/upload/7.jpg"
//       />
//     </div>

//   </div>
// )}

// {filter === "branding" &&(

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 w-full px-10 xl:px-16">
//      {/* {Pehla column} */}
//     <div className="flex flex-col gap-5">
//      <img className="w-full h-auto"
//       src="https://demoxml.com/html/onepager/upload/2.jpg" 
//      alt="" />
//     </div>
//  {/* {Pehla column} */} 
//    <div className="flex flex-col gap-5">
//     <img className="w-full h-auto"
//     src="https://demoxml.com/html/onepager/upload/4.jpg" alt="" />
//    </div>

//    {/* {Tesara column} */}
//    <div className="flex flex-col gap-5">
//     <img 
//     src="https://demoxml.com/html/onepager/upload/6.jpg" alt="" />

//     <img  className="w-full h-auto"
//     src="https://demoxml.com/html/onepager/upload/8.jpg" 
//     alt="" />
//    </div>
//   </div>
//   )}
  
   
//    {filter !== "web-design" &&
//    filter !== "photography" &&
//    filter !== "illustration" &&
//    filter !== "branding"
//    &&(
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 w-full px-10 xl:px-16">
//         {/* Pehla Column */}
//         <div className="flex flex-col gap-5">
//           {(filter === "all" ||
//             filter === "web-design" ||
//             filter === "photography") && (
//             <div className="work-post web-design photography">
//               <img
//                 className="w-full h-auto"
//                 alt=""
//                 src="https://demoxml.com/html/onepager/upload/1.jpg"
//               />
//             </div>
//           )}
//           {(filter === "all" ||
//             filter === "branding" ||
//             filter === "illustration") && (
//             <div className="work-post branding illustration">
//               <img
//                 className="w-full h-auto"
//                 alt=""
//                 src="https://demoxml.com/html/onepager/upload/5.jpg"
//               />
//             </div>
//           )}
//           {(filter === "all" ||
//             filter === "photography" ||
//             filter === "illustration") && (
//             <div className="work-post photography illustration">
//               <img
//                 className="w-full h-auto"
//                 alt=""
//                 src="https://demoxml.com/html/onepager/upload/7.jpg"
//               />
//             </div>
//           )}
//           {(filter === "all" ||
//             filter === "photography" ||
//             filter === "illustration") && (
//             <div className="work-post photography illustration">
//               <img
//                 className="w-full h-auto"
//                 alt=""
//                 src="https://demoxml.com/html/onepager/upload/10.jpg"
//               />
//             </div>
//           )}
//         </div>

//         {/* Dusra Column */}
//         <div className="flex flex-col gap-5">
//           {(filter === "all" ||
//             filter === "web-design" ||
//             filter === "photography") && (          
//           <div className="work-post web-design photography">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="https://demoxml.com/html/onepager/upload/2.jpg"
//             />
//           </div>
//             )}
//             {(filter === "all" ||
//               filter === "branding" ||
//               filter === "illustration") &&(            
//           <div className="work-post branding illustration">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="https://demoxml.com/html/onepager/upload/6.jpg"
//             />
//           </div>
//             )}
//             {(filter === "all" ||
//               filter === "photography" ||
//               filter === "illustration") &&(
            
//           <div className="work-post photography illustration">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="https://demoxml.com/html/onepager/upload/8.jpg"
//             />
//           </div>
//           )}
//           {(filter === "all" ||
//             filter === "photography" ||
//             filter === "illustration" ) &&(
          
//           <div className="work-post photography illustration">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="https://demoxml.com/html/onepager/upload/1.jpg"
//             />
//           </div>
//           )}
//         </div>
//         {/* Teesra Column (3 Images) */}
//         <div className="flex flex-col gap-5">
//           {(filter === "all" ||
//             filter === "web-desing" ||
//             filter === "branding") &&(
          
//           <div className="work-post web-design branding">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="	https://demoxml.com/html/onepager/upload/3.jpg"
//             />
//           </div>
//           )}
//           {(filter === "all" || 
//             filter === "illustration" ||
//             filter === "photography") && (
         
//           <div className="work-post illustration photography">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="https://demoxml.com/html/onepager/upload/4.jpg"
//             />
//           </div>
//            )}
//           {(filter=== "all" ||
//             filter=== "web-design" || 
//             filter=== "illustration" ) && (
          
//           <div className="work-post web-design illustration">
//             <img
//               className="w-full h-auto"
//               alt=""
//               src="	https://demoxml.com/html/onepager/upload/9.jpg"
//             />
//           </div>
//           )}
//         </div>
//       </div>
//       )}
//     </section>
//   );
// }
// export default Portfolio;

import { useState } from "react";

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const portfolioItems = [
    { id: 1, category: "web-design", src: "https://demoxml.com/html/onepager/upload/1.jpg", column: 1 },
    { id: 2, category: "photography", src: "https://demoxml.com/html/onepager/upload/2.jpg", column: 2 },
    { id: 3, category: "branding", src: "https://demoxml.com/html/onepager/upload/3.jpg", column: 3 },
    { id: 4, category: "illustration", src: "https://demoxml.com/html/onepager/upload/4.jpg", column: 4 },

    { id: 5, category: "branding", src: "https://demoxml.com/html/onepager/upload/6.jpg", column: 1 },
    { id: 6, category: "illustration", src: "	https://demoxml.com/html/onepager/upload/7.jpg", column: 2 },
    { id: 7, category: "photography", src: "	https://demoxml.com/html/onepager/upload/5.jpg", column: 3 },
    { id: 8, category: "web-design", src: "https://demoxml.com/html/onepager/upload/8.jpg", column: 4 },

    { id: 9, category: "illustration", src: "	https://demoxml.com/html/onepager/upload/10.jpg", column: 1 },
    { id: 10, category: "photography", src: "	https://demoxml.com/html/onepager/upload/1.jpg", column: 2 },

    { id: 11, category: "web-design", src: "	https://demoxml.com/html/onepager/upload/9.jpg", column: 3 },
    
  ];

  return (
    <section
      id="portfolio"
      className="bg-cover bg-center bg-no-repeat pt-20 pb-10 "
      style={{
        backgroundImage:
          "url('https://demoxml.com/html/onepager/upload/background1.jpg')",
      }}
    >
      <div className="mx-auto max-w-[1170px] px-4 text-center">
        <h2 className="font-['Courier_New'] text-[45px] font-bold uppercase text-[#15171E] leading-none mt-10">
          Our Portfolio
        </h2>

        <p className=" font-['Courier_New'] text-[18px] text-[#777]">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        <div className="mx-auto mt-8 h-[1px] w-full bg-[#D6D6D6]"></div>

        <div className="mt-6 flex flex-wrap justify-center gap-3 font-['Courier_New'] text-[16px]">
          <button
            onClick={() => setFilter("all")}
            className="px-3 py-2 hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]"
          >
            <span>All</span>
          </button>

          <button
            onClick={() => setFilter("web-design")}
            className="px-3 py-2 hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]"
          >
            <span>Web Design</span>
          </button>

          <button
            onClick={() => setFilter("photography")}
            className="px-3 py-2 hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]"
          >
            <span>Photography</span>
          </button>

          <button
            onClick={() => setFilter("illustration")}
            className="px-3 py-2 hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]"
          >
            <span>Illustration</span>
          </button>

          <button
            onClick={() => setFilter("branding")}
            className="px-3 py-2 hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]"
          >
            <span>Branding</span>
          </button>
        </div>

        <div className="mx-auto mt-8 h-[1px] w-full bg-[#D6D6D6]"></div>
      </div>

            <div className="mx-auto mt-12 grid max-w-[1170px] grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">

        {[1, 2, 3, 4].map((column) => (
          <div key={column} className="flex flex-col gap-8">

            {portfolioItems
              .filter((item) => item.column === column)
              .filter(
                (item) =>
                  filter === "all" || item.category === filter
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden"
                >
                  <img
                    src={item.src}
                    alt=""
                    className="w-full transition duration-300 hover:scale-105"
                  />
                </div>
              ))}

          </div>
        ))}

      </div>
    </section>
  );
}

export default Portfolio;