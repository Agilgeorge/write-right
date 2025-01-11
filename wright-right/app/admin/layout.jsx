import { assets } from "../Assets/assets";
import Sidebar from "../components/admincomponents/sidebar";
import Image from "next/image";


export default function Layout({ children }) {
  return (
    <>
    <div className="flex">
        <Sidebar/>
        <div className="fle flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border border-black">
           <h3 className="font-medium"> Admin panel</h3>
            <Image src={assets.profile_icon} width={40} alt='' />
          </div>
          {children}

        </div>
    </div>
   
    </>
  );
}