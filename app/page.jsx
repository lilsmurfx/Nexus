'use client';

import { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

const shows = [
  {
    title: 'Voice of the Soul',
    image: '/images/shows/show8.JPG',
  },
  {
    title: "Mumira's Mic Show",
    image: '/images/shows/show9.JPG',
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
    title: 'The Gen-z Content',
    image: '/images/shows/show4.jpg',
  },
  {
    title: 'Terrys Fashion Show',
    image: '/images/shows/show2.jpg',
  },
  {
    title: 'Gen-z for Christ',
    image: '/images/shows/show5.jpg',
  },
  {
    title: 'Hustle Spotlight',
    image: '/images/shows/show6.jpg',
  },
  {
    title: 'Sema na Ngene',
    image: '/images/shows/show7.jpg',
  },
  {
    title: 'The Tech-Spot',
    image: '/images/shows/show4.jpg',
  },
];

const leaders = [
  {
    name: 'Mumira Waithaka',
    role: 'CEO / Executive Director',
    image: '/images/team/person1.jpg',
    bio: `Mumira Waithaka is a seasoned accountant with over a decade of dedicated service at Dagoretti South Constituency, having served since 2011.

Throughout his career, he has built a strong reputation for integrity, financial discipline, and commitment to public service.

Beyond accounting, Mumira has expanded his expertise through professional training in Project Management (Post-Diploma) and Management Information Systems (Higher Diploma), equipping him with a well-rounded approach to leadership, strategy, and organizational efficiency.

He is also a Director at Mumira Waithaka & O'barimo Associates, a respected law firm and consultancy, where he contributes to strategic advisory and governance matters.

Passionate about youth empowerment and media transformation, Mumira is deeply committed to creating a platform where young voices can be heard, nurtured, and amplified globally.`,
  },
  {
    name: 'William Ngene Edith',
    role: 'Managing Director / Executive Director',
    image: '/images/team/person3.jpg',
    bio: `William Edith Ngene is a dynamic multi-talented Kenyan media personality, MC, TV and radio producer, broadcaster, video editor, graphics designer, sound designer, and entrepreneur.

He is CEO of We Entertainment Kenya and founder of Uwezo Community Based Organization.

He is also band leader of Mabalozi Band and passionate about youth empowerment, media innovation, and social transformation.`,
  },
  {
    name: 'Martin Nyakundi O’Barimo',
    role: 'Head of Legal Affairs / Executive Director',
    image: '/images/team/person2.jpg',
    bio: `Wakili Martin Nyakundi O’Barimo is a lawyer, former mathematics teacher, and legal scholar with First-Class Honours.

He leads O’Barimo Nyakundi & Associates Advocates and lectures at Mt. Kenya University.

He serves on multiple boards and is committed to governance, justice, and education.`,
  },
];

export default function Home() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-purple-900 bg-black/95 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logos/logo.png"
              alt="Nexus Media Group"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="text-2xl font-extrabold text-purple-500 tracking-wide">
                NEXUS
              </h1>

              <p className="text-xs text-gray-400 tracking-[4px]">
                MEDIA GROUP
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <a href="#" className="hover:text-purple-400 transition">
              HOME
            </a>

            <a
              href="#about"
              className="hover:text-purple-400 transition"
            >
              ABOUT US
            </a>

            <a
              href="#shows"
              className="hover:text-purple-400 transition"
            >
              SHOWS
            </a>

            <a
              href="/news"
              className="hover:text-purple-400 transition"
            >
              NEWS
            </a>

            <a
              href="#contact"
              className="hover:text-purple-400 transition"
            >
              CONTACT
            </a>
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            {/* SOCIALS */}
            <div className="hidden md:flex items-center gap-4 text-lg text-gray-300">
              <a href="#">
                <FaFacebookF className="hover:text-purple-400 transition" />
              </a>

              <a href="#">
                <FaXTwitter className="hover:text-purple-400 transition" />
              </a>

              <a href="#">
                <FaInstagram className="hover:text-purple-400 transition" />
              </a>

              <a href="#">
                <FaYoutube className="hover:text-purple-400 transition" />
              </a>

              <a href="#">
                <FaTiktok className="hover:text-purple-400 transition" />
              </a>
            </div>

            {/* LIVE BUTTON */}
            <a
              href="https://www.youtube.com/@NEXUSTVKE"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-purple-700 hover:bg-purple-600 transition px-5 py-2 rounded-full text-sm font-semibold"
            >
              WATCH LIVE
            </a>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden border-t border-purple-900 bg-black px-6 py-5 space-y-5 text-sm font-medium">
            <a
              href="#"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </a>

            <a
              href="#about"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              ABOUT US
            </a>

            <a
              href="#shows"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              SHOWS
            </a>

            <a
              href="/news"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              NEWS
            </a>

            <a
              href="#contact"
              className="block"
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </a>

            <a
              href="https://www.youtube.com/@NEXUSTVKE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-700 px-4 py-2 rounded-full"
            >
              WATCH LIVE
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        className="relative min-h-[650px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/images/hero-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <p className="text-purple-400 uppercase tracking-[4px] mb-4">
              Kenya’s Digital Media Network
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              ROOTED IN KENYA.
              <br />
              <span className="text-purple-500">
                HEARD GLOBALLY.
              </span>
            </h2>

            <p className="mt-6 text-gray-300 text-lg max-w-2xl">
              Empowering voices through digital storytelling,
              entertainment, culture, faith, business, and youth-driven
              media innovation.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://www.youtube.com/@NEXUSTVKE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-700 hover:bg-purple-600 transition px-6 py-3 rounded-full font-semibold"
              >
                WATCH LIVE
              </a>

              <a
                href="#shows"
                className="border border-purple-500 hover:bg-purple-500/10 transition px-6 py-3 rounded-full font-semibold"
              >
                EXPLORE SHOWS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE TV */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-purple-500">
              LIVE TV
            </h2>

            <p className="text-gray-400 mt-2">
              Stream Nexus TV live anytime, anywhere.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@NEXUSTVKE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-500 transition px-5 py-3 rounded-full font-semibold"
          >
            🔴 LIVE NOW
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-purple-900 shadow-2xl">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/live_stream?channel=NEXUSTVKE"
              title="Nexus TV Live"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#080808] border-y border-purple-900"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-purple-500 mb-6">
              ABOUT NEXUS MEDIA GROUP
            </h2>

            <p className="text-gray-300 leading-8 mb-5">
              Nexus Media Group is a modern Kenyan media platform
              focused on empowering communities through storytelling,
              digital broadcasting, youth engagement, entertainment,
              and transformative conversations.
            </p>

            <p className="text-gray-400 leading-8">
              Our mission is to build a globally respected African
              media brand that amplifies authentic voices and creates
              meaningful social impact.
            </p>
          </div>

          <div>
            <img
              src="/images/hero-banner.jpg"
              alt="Nexus Media"
              className="rounded-2xl border border-purple-900 object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* SHOWS */}
      <section
        id="shows"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-purple-500">
              OUR TOP SHOWS
            </h2>

            <p className="text-gray-400 mt-2">
              Discover our most popular productions and programs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {shows.map((show, i) => (
            <div
              key={i}
              className="group bg-[#0d0d0d] border border-purple-900 rounded-2xl overflow-hidden hover:border-purple-500 transition"
            >
              <div className="overflow-hidden">
                <img
                  src={show.image}
                  alt={show.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold mb-4 text-sm min-h-[40px]">
                  {show.title}
                </h3>

                <a
                  href="https://www.youtube.com/@NEXUSTVKE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-purple-700 hover:bg-purple-600 transition py-2 rounded-lg text-sm font-semibold"
                >
                  ▶ WATCH LIVE
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#080808] border-y border-purple-900">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-purple-500">
              OUR LEADERSHIP
            </h2>

            <p className="text-gray-400 mt-2">
              Meet the visionary team behind Nexus Media Group.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((person, i) => (
              <div
                key={i}
                onClick={() => setSelectedLeader(person)}
                className="cursor-pointer bg-[#0d0d0d] border border-purple-900 rounded-2xl overflow-hidden hover:border-purple-500 transition"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {person.name}
                  </h3>

                  <p className="text-purple-400">
                    {person.role}
                  </p>

                  <button className="mt-5 bg-purple-700 hover:bg-purple-600 transition px-4 py-2 rounded-lg text-sm">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedLeader && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-[#0d0d0d] border border-purple-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-purple-400"
            >
              ✕
            </button>

            <img
              src={selectedLeader.image}
              alt={selectedLeader.name}
              className="w-full h-80 object-cover"
            />

            <div className="p-8">
              <h2 className="text-3xl font-bold text-purple-400 mb-2">
                {selectedLeader.name}
              </h2>

              <p className="text-gray-400 mb-6">
                {selectedLeader.role}
              </p>

              <p className="text-gray-300 leading-8 whitespace-pre-line">
                {selectedLeader.bio}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="bg-[#0d0d0d] border border-purple-900 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold text-purple-500 mb-4">
            CONTACT US
          </h2>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Partner with us, advertise with us, or connect with our
            media team today.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>Email: info@nexusmedia.co.ke</p>
            <p>Phone: +254 700 000 000</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-900 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-purple-500">
                NEXUS MEDIA GROUP
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                Rooted in Kenya. Heard Globally.
              </p>
            </div>

            <div className="flex gap-5 text-xl text-gray-300">
              <a href="#">
                <FaFacebookF className="hover:text-purple-400 transition" />
              </a>

              <a href="#">
                <FaXTwitter className="hover:text-purple-400 transition" />
              </a>

              <a href="#">
                <FaInstagram className="hover:text-purple-400 transition" />
              </a>

              <a href="#">
                <FaYoutube className="hover:text-purple-400 transition" />
              </a>

              <a href="#">
                <FaTiktok className="hover:text-purple-400 transition" />
              </a>
            </div>
          </div>

          <div className="border-t border-purple-900 mt-8 pt-6 text-center text-gray-500 text-sm">
            © 2026 Nexus Media Group. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
