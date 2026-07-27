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
import { useState } from "react";
function Portfolio() {
  const [filter, setFilter] = useState("all");
  return (
    <section
      id="portfolio"
      className="bg-left-top bg-no-repeat py-20 bg-[length:100%_97%]"
      style={{
        backgroundImage:
          "url('https://demoxml.com/html/onepager/upload/background1.jpg')",
      }}
    >
      <div className="mx-auto max-w-6xl px-8 mt-20 text-center">
        {/* Heading */}
        <h2 className="font-['Courier_New'] text-5xl font-bold uppercase text-[#15171E]">
          Our Portfolio
        </h2>

        {/* Description */}
        <p className="mt-2 font-['Courier_New'] text-lg text-[#777]">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        {/* Divider */}
        <div className="mx-15 mt-10 h-[1px] bg-[#D6D6D6]"></div>

        {/* Filter Buttons */}
        <div className="mt-7 flex justify-center gap-6 font-['Courier_New'] text-[18px] font-normal">
          <button onClick={()=> setFilter("all")} 
             className="px-4 py-2 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
            <span>
              All
            </span >
            </button>
          <button onClick={()=> setFilter("web-design")}
             className="px-4 py-2 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
           <span >
             Web Design
           </span> 
            </button>
          <button onClick={()=>setFilter("photography")}
             className="px-4 py-2 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
            <span >
               Photography
            </span>
            </button>
          <button onClick={()=>setFilter("illustration")}
             className="px-4 py-2 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
            <span >
              Illustration
            </span>
            </button>
          <button onClick={()=>setFilter("branding")}
             className="px-4 py-2 transition hover:bg-[#2BBBC0] hover:text-white hover:skew-x-[-20deg]">
           <span>
             Branding
           </span>
            </button>
        </div>

        <div className="mx-15 mt-10 h-[1px] bg-[#D6D6D6]"></div>
      </div>

     {filter === "web-design" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10 w-full px-8 md:px-20">

    {/* Pehla Column */}
    <div className="flex flex-col gap-7">
      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/1.jpg"
      />

      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/8.jpg"
      />

      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/1.jpg"
      />
    </div>

    {/* Dusra Column */}
    <div className="flex flex-col gap-7">
      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/4.jpg"
      />

      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/10.jpg"
      />
    </div>

    {/* Teesra Column */}
    <div className="flex flex-col gap-7">
      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/5.jpg"
      />

      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/7.jpg"
      />
    </div>

  </div>
)}

 {filter === "photography" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10 w-full px-8 md:px-20">

    {/* Pehla Column */}
    <div className="flex flex-col gap-7">
      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/1.jpg"
      />

      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/10.jpg"
      />
    </div>

    {/* Dusra Column */}
    <div className="flex flex-col gap-7">
      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/3.jpg"
      />

      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/6.jpg"
      />

      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/1.jpg"
      />
    </div>

    {/* Teesra Column */}
    <div className="flex flex-col gap-7">
      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/5.jpg"
      />

      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/9.jpg"
      />
    </div>

  </div>
)}

{filter === "illustration" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10 w-full px-8 md:px-20">

    {/* Pehla Column */}
    <div className="flex flex-col gap-7">
      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/2.jpg"
      />
    </div>

    {/* Dusra Column */}
    <div className="flex flex-col gap-7">
      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/3.jpg"
      />

      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/9.jpg"
      />
    </div>

    {/* Teesra Column */}
    <div className="flex flex-col gap-7">
      <img
        className="w-full h-auto"
        alt=""
        src="https://demoxml.com/html/onepager/upload/7.jpg"
      />
    </div>

  </div>
)}

{filter === "branding" &&(

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10 w-full px-8 md:px-20">
     {/* {Pehla column} */}
    <div className="flex flex-col gap-7">
     <img className="w-full h-auto"
      src="https://demoxml.com/html/onepager/upload/2.jpg" 
     alt="" />
    </div>
 {/* {Pehla column} */} 
   <div className="flex flex-col gap-7">
    <img className="w-full h-auto"
    src="https://demoxml.com/html/onepager/upload/4.jpg" alt="" />
   </div>

   {/* {Tesara column} */}
   <div className="flex flex-col gap-7">
    <img 
    src="https://demoxml.com/html/onepager/upload/6.jpg" alt="" />

    <img  className="w-full h-auto"
    src="https://demoxml.com/html/onepager/upload/8.jpg" 
    alt="" />
   </div>
  </div>
  )}
  
   
   {filter !== "web-design" &&
   filter !== "photography" &&
   filter !== "illustration" &&
   filter !== "branding"
   &&(
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-10 w-full px-4 md:px-20">
        {/* Pehla Column */}
        <div className="flex flex-col gap-7">
          {(filter === "all" ||
            filter === "web-design" ||
            filter === "photography") && (
            <div className="work-post web-design photography">
              <img
                className="w-full h-auto"
                alt=""
                src="https://demoxml.com/html/onepager/upload/1.jpg"
              />
            </div>
          )}
          {(filter === "all" ||
            filter === "branding" ||
            filter === "illustration") && (
            <div className="work-post branding illustration">
              <img
                className="w-full h-auto"
                alt=""
                src="https://demoxml.com/html/onepager/upload/5.jpg"
              />
            </div>
          )}
          {(filter === "all" ||
            filter === "photography" ||
            filter === "illustration") && (
            <div className="work-post photography illustration">
              <img
                className="w-full h-auto"
                alt=""
                src="https://demoxml.com/html/onepager/upload/7.jpg"
              />
            </div>
          )}
          {(filter === "all" ||
            filter === "photography" ||
            filter === "illustration") && (
            <div className="work-post photography illustration">
              <img
                className="w-full h-auto"
                alt=""
                src="https://demoxml.com/html/onepager/upload/10.jpg"
              />
            </div>
          )}
        </div>

        {/* Dusra Column */}
        <div className="flex flex-col gap-7">
          {(filter === "all" ||
            filter === "web-design" ||
            filter === "photography") && (          
          <div className="work-post web-design photography">
            <img
              className="w-full h-auto"
              alt=""
              src="https://demoxml.com/html/onepager/upload/2.jpg"
            />
          </div>
            )}
            {(filter === "all" ||
              filter === "branding" ||
              filter === "illustration") &&(            
          <div className="work-post branding illustration">
            <img
              className="w-full h-auto"
              alt=""
              src="https://demoxml.com/html/onepager/upload/6.jpg"
            />
          </div>
            )}
            {(filter === "all" ||
              filter === "photography" ||
              filter === "illustration") &&(
            
          <div className="work-post photography illustration">
            <img
              className="w-full h-auto"
              alt=""
              src="https://demoxml.com/html/onepager/upload/8.jpg"
            />
          </div>
          )}
          {(filter === "all" ||
            filter === "photography" ||
            filter === "illustration" ) &&(
          
          <div className="work-post photography illustration">
            <img
              className="w-full h-auto"
              alt=""
              src="https://demoxml.com/html/onepager/upload/1.jpg"
            />
          </div>
          )}
        </div>
        {/* Teesra Column (3 Images) */}
        <div className="flex flex-col gap-7">
          {(filter === "all" ||
            filter === "web-desing" ||
            filter === "branding") &&(
          
          <div className="work-post web-design branding">
            <img
              className="w-full h-auto"
              alt=""
              src="	https://demoxml.com/html/onepager/upload/3.jpg"
            />
          </div>
          )}
          {(filter === "all" || 
            filter === "illustration" ||
            filter === "photography") && (
         
          <div className="work-post illustration photography">
            <img
              className="w-full h-auto"
              alt=""
              src="https://demoxml.com/html/onepager/upload/4.jpg"
            />
          </div>
           )}
          {(filter=== "all" ||
            filter=== "web-design" || 
            filter=== "illustration" ) && (
          
          <div className="work-post web-design illustration">
            <img
              className="w-full h-auto"
              alt=""
              src="	https://demoxml.com/html/onepager/upload/9.jpg"
            />
          </div>
          )}
        </div>
      </div>
      )}
    </section>
  );
}
export default Portfolio;

