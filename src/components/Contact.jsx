import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaGlobe,
} from "react-icons/fa";
function Contact() {
  return (
    <section id="contact" className="bg-[#262626] py-20 mt-14 ">
      <div className="mx-auto max-w-7xl px-8">
        <h1 className="font-['Courier_New'] text-[41px] font-bold uppercase text-white leading-none text-center mt-5">
          Get In Touch!
        </h1>

        <p className=" font-['Courier_New'] text-[18px] text-[#b5b5b5] text-white text-center">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        <div className="mt-11 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* {left column} */}

          <div>
            <h2 className="font-['Courier_New'] text-[28px]  text-white">
              Contact Info
            </h2>

            <p className="mt-3 whitespace-pre font-['Courier_New'] text-[16px] leading-7 text-white text-bold">
              {
              "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non\n"
              }
              {"mauris vitae erat consequat."}
            </p>

            <p className="mt-3 whitespace-pre font-['Courier_New'] text-[16px] leading-7 text-white ">
              {
                "Nullam ac urna eu felis dapibus condimentum sit amet a augue.\n"
              }
              {"Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum\n"}
            </p>

            <div className="mt-6 h-[1px] w-full bg-[#4a4a4a]"></div>

            <div className="mt-5 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <FaHome className="text-white" />
                <span className="font-['Courier_New'] text-[16px] text-white">
                  lorem ipsum street
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-white" />
                <span className="font-['Courier_New'] text-[16px] text-white">
                  +399 (500) 321 9548
                </span>
              </div>
            </div>
            <div className=" flex items-center">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-white" />
                <span className="font-['Courier_New'] text-[16px] text-white hover:underline">
                  info@domain.com
                </span>
              </div>
            </div>
          </div>

          {/* {right column} */}

          <div>
            <div className="grid grid-cols-2 gap-4">
              {/* {left side} */}

              <div>
                <div className="flex h-16">
                  <div className="flex w-16 items-center justify-center border border-r-0 border-black-300 bg-white">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
                      <FaUser className="text-[14px] text-black" />
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 px-5 font-['Courier_New'] outline-none
                    bg-white"
                  />
                </div>
                {/* {dusra} */}
                <div className="mt-3 flex h-16">
                  <div className="flex w-16 items-center justify-center border border-r-0 border-black-300 bg-white">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
                      <FaEnvelope className="text-[14px] text-black" />
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="e-mail"
                    className="w-full border border-gray-300 px-5 font-['Courier_New'] outline-none
                    bg-white"
                  />
                </div>

                {/* {tesra} */}
                <div className="mt-3 flex h-16">
                  <div className="flex w-16 items-center justify-center border border-r-0 border-black-300 bg-white">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
                      <FaGlobe className="text-[14px] text-black" />
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="webiste"
                    className="w-full border border-gray-300 px-5 font-['Courier_New'] outline-none
                    bg-white"
                  />
                </div>
              </div>

              {/* {right side} */}
              <div>
                <textarea
                  placeholder="Message"
                  className="h-[140px] w-full resize-none border border-gray-300 bg-white p-5 font-['Courier_New'] outline-none"
                />
                <button className="mt-2 h-16 w-full bg-[#2BB6B6] font-['Courier_New'] text-[18px]  uppercase text-white transition-colors duration-300 hover:bg-[#26a3a3]">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
