"use client";

import React, { useState } from "react";
import featured from "../../assets/Group 629745.png";
import Image from 'next/image';
import Breadcrumb from "../../components/Breadcrumb/page"

type RecommendedItem = {
  id: string;
  title: string;
  excerpt: string;
  img: string;
};

type Article = {
  id: string;
  title: string;
  subtitle?: string;
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  date: string;
  readTime?: string;
  featuredImage: string;
  content: string[];
};

const FEATURED_IMAGE = "/mnt/data/d7e5cb93-0439-4680-9a53-3460eeeb2629.png";

const sampleArticle: Article = {
  id: "stamp-act-2025",
  title:
    "Stamp Act | Stamp Duty Determined By Instruments' Legal Character, Not Its Nomenclature: Supreme Court",
  // subtitle:
  //   "The Supreme Court held that while determining the chargeability of the Stamp Duty, the decisive factor is the nature of the transaction, not merely the name applied to it.",
  author: {
    name: "Mr. Gopal Sankaranarayanan",
    role: "Senior Advocate",
    avatar: "", // can set avatar path if available
  },
  date: "24 Aug, 2025",
  readTime: "6 min read",
  featuredImage: FEATURED_IMAGE,
  content: [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni deserunt inventore rem doloribus fugit atque porro delectus, aliquam ea ab veritatis cumque consequuntur eligendi, hic dolorem laboriosam iusto quis reprehenderit necessitatibus a. Tenetur ad voluptates ab dolore ipsum animi odio, et soluta laborum adipisci natus nostrum voluptate! Dolorem provident nostrum suscipit adipisci eveniet quos eligendi, veniam omnis! Velit tempora repellat soluta error exercitationem. Quo quas expedita culpa blanditiis totam recusandae magni iusto tempore ipsam et, dolore officia optio ducimus incidunt possimus eum molestiae omnis ea, sit consequuntur voluptatibus. Velit sint blanditiis nostrum? Porro reiciendis veniam illum! Et, ullam. Sed unde tenetur explicabo reprehenderit autem illo corporis reiciendis a, modi quidem, saepe ex cumque quod rerum optio eius, repellat delectus quos voluptates. Quam ab minus labore cum in, at molestias facilis ullam ducimus ipsam cupiditate ea reiciendis, asperiores eveniet, corporis iusto sunt inventore iste. Nostrum, mollitia? Minima veritatis expedita asperiores excepturi quae dolores, voluptatem quod amet dolorem sed suscipit molestias quis ipsa alias repudiandae iusto sint unde architecto soluta perferendis quam non. Ducimus, ullam non ex quisquam beatae at dolore doloribus, odit omnis distinctio iusto molestias esse minima rerum numquam. Rem quibusdam magni aperiam, facere autem debitis dicta nisi, hic fuga, adipisci qui totam! Cupiditate cumque explicabo ex magnam? Beatae ratione repellat ipsa blanditiis obcaecati qui, culpa unde ducimus voluptatibus cupiditate id consequatur maxime adipisci reprehenderit eos quas velit veritatis, corporis perferendis sapiente atque! Obcaecati repudiandae ea repellat nobis, nihil facere accusamus placeat, illum est dolorem iure voluptatum itaque quo unde. Nostrum, placeat. Sequi et vitae exercitationem, quis mollitia id dolorum amet suscipit alias incidunt delectus aliquid necessitatibus, placeat sed repudiandae deleniti aliquam iusto, perferendis quas eos laudantium aspernatur? Eaque enim a sequi totam libero, tenetur debitis incidunt sunt voluptatibus id maiores officiis, sapiente officia natus quos obcaecati maxime sed corporis iure autem, suscipit quasi. Dolore, esse. Reiciendis distinctio hic obcaecati dignissimos perspiciatis sed eligendi accusamus ducimus magni rem quia ratione aperiam, alias voluptates quis tempora delectus! Adipisci, hic iste, quos numquam molestiae assumenda fuga libero officia nisi harum reprehenderit impedit pariatur iure corrupti accusamus eveniet atque delectus ut quasi commodi. Aspernatur quis blanditiis eligendi et labore nulla consequuntur? Omnis, tempore. Ratione aperiam aliquid facere suscipit, nemo deserunt voluptatum non. Sed illum, odit fugit aperiam cumque incidunt atque labore voluptatem? Minima corporis nobis dolores itaque ipsum placeat quo, quisquam, voluptas neque provident nisi quod est eligendi velit qui obcaecati commodi vel, reprehenderit ducimus corrupti voluptatum. Unde nisi atque, assumenda sit expedita esse commodi itaque quisquam a sequi reiciendis, dicta, eos odit voluptatem distinctio tenetur accusantium facilis earum dolorum quia repudiandae ipsa maiores debitis! Minus eius iure mollitia, ullam illo ipsum debitis enim earum illum commodi expedita, nihil corrupti neque placeat. A, modi. Cumque laudantium aliquam, molestias similique vitae excepturi illum. Ipsam amet sunt similique eos a corporis recusandae? Architecto consectetur nisi qui dolorem eius quam magni, blanditiis eos ab sit asperiores ducimus tempore minus nam pariatur sequi commodi nihil natus perferendis? Quibusdam, minima voluptate? Eveniet aperiam sint magnam ullam dolores aliquid harum repellendus ea eum molestias autem eius quae repudiandae facere totam, maiores sit vitae mollitia, dolorem rem debitis itaque nesciunt quibusdam cupiditate! Esse, fuga quam, odio nemo pariatur fugit molestias ipsam deleniti doloremque molestiae voluptatibus. Numquam iure minus eaque placeat ad. Iste explicabo esse dolores, eligendi, cupiditate provident saepe cumque voluptatibus sed fugit perspiciatis minima expedita commodi atque neque, rerum nobis nesciunt tempora et. Soluta velit voluptatibus aspernatur molestias, accusamus laborum ea veniam corrupti repellendus! Facere unde quo sequi neque aut alias accusantium dolorem commodi, laborum autem ea mollitia ad nesciunt nam ipsum. Illo sint impedit provident veniam explicabo dignissimos soluta assumenda ratione quam, exercitationem vero vitae architecto cupiditate sed voluptatem minima ipsum mollitia odit nesciunt consequatur! Beatae, alias earum eligendi nihil repellendus suscipit odio porro officiis laborum ad. Cupiditate maxime quo enim blanditiis cum dolorum, veniam ut culpa ex ducimus laborum possimus aliquam temporibus ullam consectetur atque tenetur totam quia sunt error facere harum? Facilis ipsa, dolor nesciunt rerum a ullam impedit? Minima recusandae quis, eveniet odio quos id accusamus rerum nisi. Veritatis odit facere labore? Illo velit perferendis odio saepe nulla id qui assumenda distinctio, esse natus accusantium aliquid provident atque veritatis expedita dolorum numquam minus excepturi minima obcaecati cupiditate doloribus blanditiis tenetur. Error, ut iure beatae, velit sapiente laborum qui sequi numquam fugiat tempore laboriosam aperiam veritatis consequatur! In dicta at saepe odio! Ipsa sequi quo nam voluptatem aliquid a laboriosam earum odit ipsum corporis dolor ducimus, cupiditate, repellat pariatur atque neque. Placeat ullam illum accusamus, omnis voluptatibus perferendis nobis atque libero reiciendis praesentium, amet architecto ea sed voluptatum cumque. Iure, excepturi beatae fugit repudiandae molestiae quibusdam commodi quasi iusto quod quis laudantium nihil quia alias velit dolores magnam ab voluptatibus earum nisi vero nulla! Quidem libero nisi fugit dolore eveniet ex aliquam nemo similique, error possimus voluptas debitis doloremque saepe eos dolores inventore atque accusantium placeat, corporis non quo quasi veritatis. Dolores rem quasi eum quod laboriosam ipsam recusandae, unde cupiditate porro doloribus possimus sit voluptatem quam ratione officia repellat inventore accusamus numquam veniam earum amet! Repudiandae dolorem aspernatur atque dolores excepturi deserunt vero blanditiis temporibus amet sequi culpa, laborum vitae sed explicabo dignissimos perspiciatis quibusdam aliquid nobis quidem. Reprehenderit omnis aperiam magnam necessitatibus odio praesentium distinctio dolores tempore illum eveniet, laborum nemo recusandae sequi amet! Cupiditate amet quos animi facere, minus magni veritatis sapiente nulla consectetur suscipit non totam cumque quam, placeat praesentium, harum qui quibusdam sunt! Iure ex sed iste quos tempora, laboriosam voluptatum adipisci dignissimos similique in assumenda debitis nobis culpa quod? Beatae, praesentium repellat. Quidem dolorem porro enim harum eligendi ea reiciendis ipsum nam voluptate qui quae, sapiente maxime a temporibus, perspiciatis dicta vel dolor ipsam rerum esse nostrum animi ducimus! Quisquam dolorem aliquam modi! Dolores quia pariatur id illo facere mollitia architecto sit cupiditate aliquam voluptates quod dignissimos deserunt eaque similique, ut exercitationem rerum sint? Dolore doloribus distinctio iste laborum rerum minima, ad dolorum ullam qui dolor recusandae ipsa est sit autem laudantium voluptates nemo modi beatae tempore praesentium nesciunt nihil",
  ],
};

const recommended: RecommendedItem[] = new Array(6).fill(0).map((_, idx) => ({
  id: `rec-${idx + 1}`,
  title: `Related: Legal update ${idx + 1}`,
  excerpt:
    "A short summary of the article or case, useful for the sidebar. It may be 2 lines long.",
  img: FEATURED_IMAGE,
}));

export default function ArticlePage({ params }: { params?: { slug?: string } }) {
  const [showFull, setShowFull] = useState(false);

  // If you want to dynamically fetch by slug, replace the sampleArticle with fetch logic.
  const article = sampleArticle;

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-lg font-bold text-[#0B2149]">LS</div>
            <div className="hidden md:block text-sm text-gray-600">
              The Law Stream's
            </div>
          </div>

          <div className="flex-1 max-w-xl mx-4 hidden sm:block">
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="w-full border rounded-full px-4 py-2 text-sm outline-none"
              />
              <button
                aria-label="search"
                className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 text-sm"
              >
                🔍
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="text-sm text-gray-600 hidden md:block">
              <button className="px-3 py-1 rounded hover:bg-gray-100">Menu</button>
            </nav>
            <button className="md:hidden px-2 py-1 border rounded">☰</button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Article column */}
        <article className="lg:col-span-8 bg-white rounded-2xl shadow-sm p-6">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-500 mb-3">
            {/* Home / Supreme court / Stamp Act / Stamp Duty Determined... */}
            <Breadcrumb />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-[#0B2149] leading-tight mb-3">
            {article.title}
          </h1>

          {/* Subtitle and meta */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-gray-700">{article.subtitle}</p>
          </div>
          <div className="text-gray-600 text-sm">
            <div className="flex items-center gap-2 text-xs text-gray-600 mb-5 ">
              <span>{article.date}</span>
              <span className="font-bold">.</span>
              <span> {article.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full rounded-md overflow-hidden mb-5 border">
            <Image
              // src={article.featuredImage}
              src={featured}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* <div className="flex items-center gap-4 text-xs text-gray-600 mb-2">
              <span>{article.date}</span>
              
              <span>{article.readTime}</span>
            </div> */}


          <div className="flex justify-between mt-3 mb-6 w-full ">
            <button
              className="bg-[#0B2149] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#0d2b63] transition ml-auto "
              onClick={() => console.log("AI Summary Clicked")}
            >
              AI Summary
            </button>
          </div>



          {/* Content */}
          <div className="prose prose-sm max-w-none text-gray-800">
            {article.content.slice(0, showFull ? article.content.length : 1).map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            {!showFull && article.content.length > 1 && (
              <button
                onClick={() => setShowFull(true)}
                className="mt-3 inline-block px-4 py-2 border rounded text-sm"
              >
                Read More
              </button>
            )}
          </div>

          {/* Read more / actions
          <div className="mt-6 flex items-center gap-3">
            <button className="px-4 py-2 bg-[#0B2149] text-white rounded-md text-sm hover:opacity-95">
              Read More
            </button>
            <button className="px-4 py-2 border rounded-md text-sm">Save</button>
          </div> */}

          {/* Small footer / legal citation area */}
          <div className="mt-8 text-xs text-gray-900  font-bold">
            <p>
              Case title: UOI v. State of Karnataka. Citation: (2025) SCC 123. For full
              text, refer to the official judgment.
            </p>
          </div>

          {/* Author box */}
          <div className="mt-8 border-t pt-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              {/* Author avatar placeholder */}
              <span className="text-sm text-gray-600">
                {article.author.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <div>
              <div className="text-sm font-medium text-[#0B2149]">
                {article.author.name}
              </div>
              <div className="text-xs text-gray-500">{article.author.role}</div>
              <div className="mt-2 text-sm text-gray-700">
                Author bio or short description. You can expand this with links to
                more articles or social profiles.
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-6 space-y-4">
            {/* Recommended box */}
            <div className="bg-white rounded-2xl shadow-sm p-4">
              <div className="text-sm font-semibold text-gray-700 mb-3">
                Recommended: For you
              </div>

              <div className="space-y-3">
                {recommended.map((r) => (
                  <a
                    key={r.id}
                    href="#"
                    className="flex items-start gap-3 text-sm hover:bg-gray-50 rounded p-2"
                  >
                    <div className="w-16 h-10 flex-shrink-0 overflow-hidden rounded">
                      <img
                        src={r.img}
                        alt={r.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{r.title}</div>
                      <div className="text-xs text-gray-500 line-clamp-2">{r.excerpt}</div>
                      <div className="text-xs text-gray-400 mt-1">2h ago</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-3 text-center">
                <button className="text-xs text-[#0B2149] px-3 py-1 border rounded">
                  View All
                </button>
              </div>
            </div>

            {/* Small ad / newsletter box */}
            <div className="bg-white rounded-2xl shadow-sm p-4 text-sm">
              <div className="font-semibold text-gray-700 mb-2">Newsletter</div>
              <p className="text-xs text-gray-600 mb-3">
                Get legal updates delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 border rounded text-sm outline-none"
                />
                <button className="px-3 py-2 bg-[#0B2149] text-white rounded text-sm">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Compact list / popular */}
            <div className="bg-white rounded-2xl shadow-sm p-4 text-sm">
              <div className="font-semibold text-gray-700 mb-2">Popular</div>
              <ol className="text-xs text-gray-600 list-decimal list-inside space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Landmark judgment on property rights
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Recent amendment explained
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Procedure for filing appeal
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white mt-8">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} The Law Stream's. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
