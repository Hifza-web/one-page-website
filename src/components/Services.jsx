function Services() {
  return (
    <section id="services">
      <div className="mx-auto max-w-6xl px-8 mt-10 text-center">
        <h2 className="font-['Courier_New'] text-5xl font-bold uppercase text-[#15171E]">
          Our Services
        </h2>

        <p className="mt-2 font-['Courier_New'] text-lg text-[#999]">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-25 gap-y-12 px-20 ">
          <div className="group flex items-start gap-10">
            <div className="h-22 w-14 shrink-0 -skew-x-[20deg] bg-[#2BBBC0] flex items-center justify-center  transition-transform duration-300 group-hover:skew-x-0">
                 <i className="fa fa-bullhorn skew-x-[15deg] text-white text-3xl transition-transform duration-300 group-hover:skew-x-0"></i>
            </div>

            <div className="text-left">
              <h3 className="font-['Courier_New'] text-xl text-[#333] text-center">
                WEB DESIGN
              </h3>
              <p className="whitespace-pre font-['Courier_New'] text-15px text-[#aaa]">
                {` Duis sed odio sit 
amet nibh vulputate
 cursus a sit amet
    mauris morbi
      accumsan.`}
              </p>
            </div>
          </div>

           <div className="group flex items-start gap-10">
             <div className="h-22 w-14 shrink-0 -skew-x-[20deg] bg-[#2BBBC0] flex items-center justify-center transition-transform duration-300 group-hover:skew-x-0">
                 <i className="fa fa-plane skew-x-[15deg] text-white text-3xl transition-transform duration-300 group-hover:skew-x-0"></i>
            </div>

            <div className="text-left">
              <h3 className="font-['Courier_New'] text-xl text-[#333] text-center">
                Photography
              </h3>
              <p className="whitespace-pre font-['Courier_New'] text-15px text-[#aaa]">
                {` Duis sed odio sit 
amet nibh vulputate
 cursus a sit amet
    mauris morbi
      accumsan.`}
              </p>
            </div>
          </div>

           <div className="group flex items-start gap-10">
            <div className="h-22 w-14 shrink-0 -skew-x-[20deg] bg-[#2BBBC0] flex items-center justify-center transition-transform duration-300 group-hover:skew-x-0">
                <i className="fa fa-copy  skew-x-[15deg] text-white text-3xl transition-transform duration-300 group-hover:skew-x-0"></i>
            </div>

            <div className="text-left">
              <h3 className="font-['Courier_New'] text-xl text-[#333] text-center">
                HTML5
              </h3>
              <p className="whitespace-pre font-['Courier_New'] text-15px text-[#aaa]">
                {` Duis sed odio sit 
amet nibh vulputate
 cursus a sit amet
    mauris morbi
      accumsan.`}
              </p>
            </div>
          </div>

           <div className="group flex items-start gap-10">
            <div className="h-22 w-14 shrink-0 -skew-x-[20deg] bg-[#2BBBC0] flex items-center justify-center transition-transform duration-300 group-hover:skew-x-0">
                 <i className="fa fa-thumbs-up skew-x-[15deg] text-white text-3xl transition-transform duration-300 group-hover:skew-x-0"></i>
            </div>
            <div className="text-left">
              <h3 className="font-['Courier_New'] text-xl text-[#333] text-center">
               Jquery
              </h3>
              <p className="whitespace-pre font-['Courier_New'] text-15px text-[#aaa]">
                {` Duis sed odio sit 
amet nibh vulputate
 cursus a sit amet
    mauris morbi
      accumsan.`}
              </p>
            </div>
          </div>

           <div className="group flex items-start gap-10">
            <div className="h-22 w-14 shrink-0 -skew-x-[20deg] bg-[#2BBBC0] flex items-center justify-center transition-transform duration-300 group-hover:skew-x-0">
                <i className="fa fa-search   skew-x-[15deg] text-white text-3xl transition-transform duration-300 group-hover:skew-x-0"></i>
            </div>
            <div className="text-left">
              <h3 className="font-['Courier_New'] text-xl text-[#333] text-center">
                Seo
              </h3>
              <p className="whitespace-pre font-['Courier_New'] text-15px text-[#aaa]">
                {` Duis sed odio sit 
amet nibh vulputate
 cursus a sit amet
    mauris morbi
      accumsan.`}
              </p>
            </div>
          </div>

           <div className="group flex items-start gap-10">
            <div className="h-22 w-14 shrink-0 -skew-x-[20deg] bg-[#2BBBC0] flex items-center justify-center transition-transform duration-300 group-hover:skew-x-0">
                <i className="fa fa-code skew-x-[15deg] text-white text-3xl  transition-transform duration-300 group-hover:skew-x-0">

                </i>
            </div>
            <div className="text-left">
              <h3 className="font-['Courier_New'] text-xl text-[#333] text-center">
                Css3
              </h3>
              <p className="whitespace-pre font-['Courier_New'] text-15px text-[#aaa]">
                {` Duis sed odio sit 
amet nibh vulputate
 cursus a sit amet
    mauris morbi
      accumsan.`}
              </p>
            </div>
          </div>
          
        </div>
        <img  className="mx-auto mt-17" 
         src="	https://demoxml.com/html/onepager/images/image.png" alt="" />
      </div>
    </section>
  );
}

export default Services;
