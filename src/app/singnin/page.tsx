"ues client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
export default function page() {
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="bg-[#2F2F2F] h-[800px] w-[834px]  flex justify-center items-center">
          <Image src={logo} alt="Logo" className="h-[337px] w-[337px] rounded-full" />
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
}
