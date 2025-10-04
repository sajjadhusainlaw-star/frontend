// app/page.tsx OR pages/index.tsx
import Image from "next/image";
import NewsCard from "@/components/ui/NewsCard";
import logo from "../../public/logo.svg";
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Breaking News Banner */}
      <div className="py-6 flex justify-center">
        <div className="bg-red-600 text-white text-base md:text-md flex items-center justify-center rounded-md w-full max-w-5xl h-auto min-h-[50px] text-center px-4">
          <p>
            <span className="font-bold">BREAKING NEWS</span> | Madras High Court
            has rejected the anticipatory bail petition of TVK district
            secretary Satish Kumar.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Big Card */}
        <div className="bg-amber-100 rounded-lg p-4 flex flex-col overflow-hidden">
          <div className="relative w-full h-48 md:h-64 rounded-md overflow-hidden">
            <Image
              src={logo}
              alt="News Thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 font-semibold text-lg md:text-xl line-clamp-2">
            Jobs, travel, national parks - what impact will US shutdown have?
          </h3>
          <p className="mt-2 text-sm md:text-base text-gray-700 line-clamp-3">
            Washington&apos;s political gridlock could inflict wide-ranging
            miseries, as anything deemed non-essential will be put on hold.
          </p>
        </div>

        {/* Right News Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Column */}
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i: number) => (
              <NewsCard
                key={i}
                title="Supreme Court Half Yearly Digest 2025: Family Law"
              />
            ))}
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-4">
            {[4, 5].map((i: number) => (
              <NewsCard
                key={i}
                title="Supreme Court Half Yearly Digest 2025: Family Law"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
