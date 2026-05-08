'use client';

import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const shows = [
  {
    title: 'Voice of the Soul',
    image: '/images/shows/show8.jpg',
  },
  {
    title: 'Mumira\'s Mic Show',
    image: '/images/shows/show9.jpg',
  },
  {
    title: 'Swahili Vakili',
    image: '/images/shows/show11.jpg',
  },
  {
    title: 'Heart Chambers',
    image: '/images/shows/show10.jpg',
  },
  {
    title: 'The Vet',
    image: '/images/shows/show12.jpg',
  },
  {
    title: 'Alpha Show',
    image: '/images/shows/show3.jpg',
  },
  {
    title: 'The Gen-z content',
    image: '/images/shows/show4.jpg',
  },
   {
    title: 'Terrys Fashion show',
    image: '/images/shows/show2.jpg',
  },
   {
    title: 'Gen-z for Christ',
    image: '/images/shows/show5.jpg',
  },
  {
    title: 'Hustle spotlight',
    image: '/images/shows/show6.jpg',
  },
  {
    title: 'Sema na Ngene',
    image: '/images/shows/show7.jpg',
  },
  {
    title: 'The Tech-spot',
    image: '/images/shows/show4.jpg',
  },
];

const leaders = [
  {
    name: 'Mumira Waithaka',
    role: 'CEO / Executive Director',
    image: '/images/team/person1.jpg',
  },
  {
    name: 'Ngene William',
    role: 'MD / Executive Director',
    image: '/images/team/person3.jpg',
  },
  {
    name: 'Nyakundi Martin',
    role: 'Head of Legal Affairs',
    image: '/images/team/person2.jpg',
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <header className="border-b border-purple-900 sticky top-0 z-50 bg-black">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">

          <div className="flex items-center gap-3">
            <img
              src="/images/logos/logo.png"
              className="w-14 h-14 object-contain"
            />

             <div>
              <h1 className="text-2xl font-bold text-purple-500">
                NEXUS
              </h1>

              <p className="text-sm text-gray-400">
                MEDIA GROUP
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-semibold">
            <a href="#">HOME</a>
            <a href="#about">ABOUT US</a>
            <a href="#shows">SHOWS</a>
            <a href="#live">NEXUS TV</a>
            <a href="#news">NEWS</a>
            <a href="#advertise">ADVERTISE</a>
            <a href="#partners">PARTNERS</a>
            <a href="#contact">CONTACT US</a>
          </nav>

          <div className="flex items-center gap-4 text-lg">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaTiktok />

            <a
              href="https://www.youtube.com/@NEXUSTVKE"
              target="_blank"
              className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-full text-sm"
            >
              WATCH LIVE
            </a>
          </div>
        </div>
      </header>
       <section
        className="relative h-[550px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/images/hero-banner.jpg')",
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center w-full">

          <div>
            <h2 className="text-5xl font-extrabold leading-tight mb-4">
              ROOTED IN KENYA.
              <br />
              <span className="text-purple-500">
                HEARD GLOBALLY.
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              Informing. Empowering. Entertaining.
              <br />
              A bold new voice in media.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.youtube.com/@NEXUSTVKE"
                className="bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-full"
              >
                WATCH NEXUS TV
              </a>

               <a
                href="#shows"
                className="border border-purple-600 px-6 py-3 rounded-full"
              >
                OUR SHOWS
              </a>
            </div>
          </div>

          <div className="bg-black/80 border border-purple-800 rounded-xl overflow-hidden shadow-2xl">

            <div className="p-4 border-b border-purple-900 flex justify-between">
              <h3 className="font-bold text-xl">
                NEXUS TV
              </h3>

              <span className="bg-red-600 px-3 py-1 text-xs rounded-full">
                LIVE
              </span>
            </div>

            <iframe
              className="w-full h-[320px]"
              src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
              title="Nexus Live"
              allowFullScreen
            ></iframe>

            <div className="p-4">
              <a
                href="https://www.youtube.com/@NEXUSTVKE"
                target="_blank"
                className="w-full block bg-purple-700 text-center py-3 rounded-lg"
              >
                WATCH LIVE
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="shows" className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10 text-purple-500">
          OUR TOP SHOWS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {shows.map((show, index) => (
            <div
              key={index}
              className="bg-[#0d0d0d] border border-purple-900 rounded-xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={show.image}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <h3 className="font-bold text-sm mb-3">
                  {show.title}
                </h3>

                 <button className="w-full bg-purple-700 py-2 rounded-lg text-sm">
                  WATCH NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-10 text-purple-500">
          OUR LEADERSHIP
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {leaders.map((person, index) => (
            <div
              key={index}
              className="bg-[#0d0d0d] border border-purple-900 rounded-xl overflow-hidden"
            >
              <img
                src={person.image}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">
                  {person.name}
                </h3>

                <p className="text-purple-400">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-purple-900 mt-10">

        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

          <div>
            <img
              src="/images/logos/logo.png"
              className="w-16 mb-4"
            />
              <p className="text-gray-400 text-sm">
              Nexus Media Group is a modern media house delivering premium digital content globally.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-purple-400">
              QUICK LINKS
            </h3>

            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <a href="#">Home</a>
              <a href="#">Shows</a>
              <a href="#">Live TV</a>
              <a href="#">News</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-purple-400">
              CONTACT
            </h3>

            <div className="text-sm text-gray-300 flex flex-col gap-2">
              <p>+254 700 123 456</p>
              <p>info@nexusmedia.co.ke</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-purple-400">
              NEWSLETTER
            </h3>

            <input
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-black border border-purple-900 mb-3"
            />

            <button className="w-full bg-purple-700 py-3 rounded-lg">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="border-t border-purple-900 py-6 text-center text-sm text-gray-500">
          © 2026 Nexus Media Group. All Rights Reserved.
        </div>
            </footer>
    </main>
  );
}
              

 