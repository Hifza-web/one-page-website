function Team() {
  return (
    <section
      id="Team"
      // className=" min-h-[500px] w-full bg-center bg-cover bg-no-repeat py-20"
      className="relative min-h-[580px] w-full bg-[length:100%-100%] bg-no-repeat bg-cover "
      style={{ backgroundImage: "url('/team-background.png')" }}
    >
      {/* <div className="absolute inset-0 bg-[#15171E]/80"></div><div className="absolute inset-0 bg-[#15171E]/10"></div> */}
      <div className="absolute inset-0 bg-[#2B303CBF]"></div>

      <div className="relative z-10 text-center pt-20">
        <h1 className="font-['Courier_New'] text-[43px] font-bold text-white">
          MEET THE TEAM
        </h1>

        <p className=" mt-[-13px] font-['Courier_New'] text-[16px] text-white">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>
      </div>

      <div className="relative z-10 mt-8 grid grid-cols-1 gap-6 px-10 md:grid-cols-4 w-full">
        <div>
          {/* Member Image */}
          <img
            src="https://demoxml.com/html/onepager/upload/team1.jpg"
            alt="Mike William"
            className=" object-cover"
          />

          {/* Name & Profession */}
          <div className="bg-[#00000080] px-5 py-3 text-left">
            <h5 className="font-['Courier_New'] text-[15px] font-bold text-white leading-none">
              Owen Miller
            </h5>

            <p className="mt-1 font-['Courier_New'] text-[14px] text-[#aaa] leading-none">
              developer
            </p>
          </div>

          {/* Social Icons */}
          <ul className="flex gap-2 bg-[#2BB6B6] px-5 py-4">
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-facebook-f text-white"></i>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-twitter text-white"></i>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-solid fa-rss text-white"></i>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-google-plus-g text-white"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* {2nd card} */}

        <div>
          <img
            src="https://demoxml.com/html/onepager/upload/team2.jpg"
            alt=""
          />
          <div className="bg-[#00000080] px-5 py-3 text-left">
            <h5 className="font-['Courier_New'] text-[18px] font-bold text-white leading-none">
              Mike William
            </h5>
            <p className="mt-1 font-['Courier_New'] text-[14px] text-[#aaa] leading-none">
              developer
            </p>
          </div>
          <ul className="flex gap-2 bg-[#2BB6B6] px-5 py-4">
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-facebook-f text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-twitter text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-solid fa-rss text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-google-plus-g text-white"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* {3rd card} */}

        <div>
          <img
            src="https://demoxml.com/html/onepager/upload/team3.jpg"
            alt=""
          />
          <div className="bg-[#00000080] px-5 py-3 text-left">
            <h5 className="font-['Courier_New'] text-[18px] font-bold text-white leading-none">
              Besim Dauti
            </h5>
            <p className="mt-1 font-['Courier_New'] text-[14px] text-[#aaa] leading-none">
              developer
            </p>
          </div>
          <ul className="flex gap-2 bg-[#2BB6B6] px-5 py-4">
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-facebook-f text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-twitter text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-solid fa-rss text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-google-plus-g text-white"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* {4th card} */}

        <div>
          <img
            src="https://demoxml.com/html/onepager/upload/team4.jpg"
            alt=""
          />
          <div className="bg-[#00000080] px-5 py-3 text-left">
            <h5 className="font-['Courier_New'] text-[18px] font-bold text-white leading-none">
              Faton Avdiu
            </h5>
            <p className="mt-1 font-['Courier_New'] text-[14px] text-[#aaa] leading-none">
              developer
            </p>
          </div>
          <ul className="flex gap-2 bg-[#2BB6B6] px-5 py-4">
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-facebook-f text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-twitter text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-solid fa-rss text-white"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white"
              >
                <i className="fa-brands fa-google-plus-g text-white"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Left Arrow */}
      <button className="absolute left-0 top-[60%] z-20 flex h-21 w-11 -translate-y-1/2 items-center justify-center bg-black/70">
        <i className="fa fa-angle-left text-1xl text-white"></i>
      </button>

      {/* Right Arrow */}
      <button className="absolute right-0 top-[60%] z-20 flex h-21 w-11 -translate-y-1/2 items-center justify-center bg-black/70">
        <i className="fa fa-angle-right text-xl text-white"></i>
      </button>
    </section>
  );
}
export default Team;
