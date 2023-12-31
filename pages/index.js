import Navbar from "@/components/navbar/navbar";
import logo from '../public/logo.jpg';
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden wrapper">
      <div className="w-screen h-screen overflow-x-hidden">
        <Navbar />
        <div className="w-full h-full flex items-center justify-center flex-col ">
          <div className="Imgclass mb-8">
            <img src={logo} />
          </div>

          <div className=" flex flex-col items-center">
            <h1 className="text-white mb-6 text-4xl" >Newton School Coding Club</h1>
            <h1 className=" text-cyan-500 text-4xl">SRMIST</h1>
            <h2 className=" text-cyan-500 text-3xl">Coder's Vertex</h2>
          </div>
        </div>


      </div>
      <div className="w-screen h-[100vh] flex items-center justify-center flex-col gap-y-[30vh]">
        <div className="Aboutus rounded-full">
          <h1>About Us</h1>
        </div>
        <div className="greyDiv rounded-3xl">
        </div>
      </div>
      <div className="w-screen h-screen relative">
        <Footer/>
      </div>
    </div>
  )
}
