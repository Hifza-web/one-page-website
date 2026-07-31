import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
   FaRss,
  FaPinterestP
} from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#2BB6B6] py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <p className="font-['Courier_New'] text-[16px] text-white">
          © 2014 OnePager, All Rights Reserved
        </p>
        <div className="flex gap-4 px-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#2BB6B6]">
            <FaFacebookF className="text-[30px]" />
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#2BB6B6]">
            <FaTwitter className="text-[30px]"/>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#2BB6B6]">
            <FaRss  className="text-[30px]"/>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#2BB6B6]">
            <FaGooglePlusG className="text-[30px]" />
          </div>
           <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#2BB6B6]">
            <FaLinkedinIn className="text-[30px]" />
          </div> <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-[#2BB6B6]">
            <FaPinterestP className="text-[30px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
