
import Image, { StaticImageData } from "next/image"; 
import logo from "../../../public/logo.svg";

interface NewsCardProps {
  src?: StaticImageData;
  title: string;
  height?: string;
}

export default function NewsCard({
  src = logo,
  title,
  height = "h-[103px]",
}: NewsCardProps) {
  return (
    <div className={`flex ${height} w-[403px] overflow-hidden bg-[#D9D9D9]`}>
      {/* Image wrapper must be relative with fixed height & width */}
      <div className="relative w-[170px] h-[103px] rounded-lg overflow-hidden bg-amber-300">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 p-3 flex items-center">
        <p className="text-sm font-medium text-gray-800">{title}</p>
      </div>
    </div>
  );
}
