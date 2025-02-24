import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";


const Footer = () => {
  return (
    <footer className="w-full bg-greenleast  h-fit p-5">
      <div className="text-white/90 py-8 max-w-7xl mx-auto">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 mb-10">
        <div className='w-full h-full flex justify-start  items-center mb-10 col-span-2 mr-0 md:mr-28'>
          {/* <Image src={img} alt="img" className='w-64 ml-10' /> */}
        </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="flex flex-col gap-2 text-sm space-y-2">
              <li className="duration-300 cursor-pointer  hover:text-white/80">Home</li>
              <li className="duration-300 cursor-pointer  hover:text-white/80">Book your Seat</li>
              <li className="duration-300 cursor-pointer  hover:text-white/80">Faclits We Offer</li>
              <li className="duration-300 cursor-pointer  hover:text-white/80">Our Library Rules</li>
              <li className="duration-300 cursor-pointer  hover:text-white/80">Testimonials</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacts</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/90 font-semibold space-y-2">
              <li className="duration-300 cursor-pointer  hover:text-white/80 flex items-center justify-start gap-2"> <LuPhone size={18} /> +91 6203821043</li>
              <li className="duration-300 cursor-pointer  hover:text-white/80 flex items-center justify-start gap-2"> <MdOutlineMailOutline size={18} /> anissh946@gmail.com</li>
              <li className="duration-300 cursor-pointer  hover:text-white/80 flex items-center justify-start gap-2"> <GrLocation size={18} />Ganga Vihar, Gokalpur, Delhi</li>
            </ul>
          </div>
          <div className="col-span-2 h-full md:ml-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.444672591437!2d77.28192417521682!3d28.706254080729543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0015d14155%3A0x19694f7f3affd2fd!2sPath%20Catalyst%20Study%20Center!5e0!3m2!1sen!2sin!4v1740201297896!5m2!1sen!2sin" className="w-full h-full rounded-lg"></iframe>
          </div>
        </div>
      </div>
      <div className='border-t-2 max-w-7xl mx-auto border-gray-200  pt-2 flex justify-between items-center'>
        <p className=' text-white text-sm'>©2024 Path Catalst All rights Reserved</p>
        <p className="text-white text-sm">Developed By <a href="https://xcentic.in" className=" tracking-[2px] font-semibold hover:underline hover:text-white/80 duration-300 cursor-pointer">XCENTIC</a></p>
      </div>
    </footer>
  )
}

export default Footer