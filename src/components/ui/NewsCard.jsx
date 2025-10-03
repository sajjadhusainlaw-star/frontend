// components/ui/NewsCard.jsx
import Image from "next/image";
import logo from '../../../public/logo.svg'

export default function NewsCard({ src = logo, title, height = "h-[120px]" }) {
  return (
    <div className={`flex bg-pink-200 rounded-lg ${height} sm:h-[150px] overflow-hidden`}>
      
   
      <div className="relative w-1/3 sm:w-1/4 h-full">
        <Image
          src={logo}
          alt={title}
          fill
          className="object-cover rounded-r-lg"
        />
      </div>
      <div className="flex-1 p-3 flex items-center">
        <p className="text-sm font-medium text-gray-800">{title}</p>
      </div>

      
    </div>
  );
}
