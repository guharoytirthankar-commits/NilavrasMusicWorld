'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

interface HomeClientProps {
  settingsMap: Record<string, string>;
}

export default function HomeClient({ settingsMap }: HomeClientProps) {
  return (
    <main className="bg-black text-white">

      {/* HERO */}

      <section className="relative h-screen">

        <Image
          src="/images/hero.jpg"
          alt="Nilavra Roy"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex h-full items-center px-6 md:px-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >

            <p className="text-yellow-500 tracking-[6px] uppercase mb-4">
              Live • Classical • Timeless
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Songs that stay
              <br />
              with you.
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              Nilavra Roy | 22 Years of Musical Excellence.
              Classical Roots. Modern Stage Energy.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">

              <a
                href="#about"
                className="px-8 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-400 transition"
              >
                About Nilavra
              </a>

              <a
                href="#contact"
                className="px-8 py-3 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                Book A Show
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="py-24 px-6 md:px-20 bg-[#080808]"
      >

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-yellow-500 mb-8">
            About Nilavra
          </h2>

          <p className="text-lg text-gray-300 leading-9">
            Nilavra Roy is a classically trained vocalist with over 22 years
            of musical training and performance experience. Rooted in Indian
            classical traditions, he brings versatility, emotion and stage
            presence to every performance.
          </p>

          <p className="text-lg text-gray-300 leading-9 mt-6">
            From timeless classical compositions to Bollywood, Sufi, Ghazal,
            Retro, Modern Bengali and contemporary fusion music, Nilavra
            creates musical experiences that resonate deeply with audiences.
            His performances blend technical excellence with heartfelt
            storytelling, making every concert an intimate journey through
            melody and emotion.
          </p>

        </div>

      </section>
      {/* FEATURED PERFORMANCES */}

      <section className="py-24 px-6 md:px-20">

        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
          Featured Performances
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <iframe
            className="w-full aspect-video rounded-2xl"
            src="https://www.youtube.com/embed/KkDMF6gx9Bs"
            title="Performance 1"
            allowFullScreen
          />

          <iframe
            className="w-full aspect-video rounded-2xl"
            src="https://www.youtube.com/embed/-BJScY0O-vU"
            title="Performance 2"
            allowFullScreen
          />

          <iframe
            className="w-full aspect-video rounded-2xl"
            src="https://www.youtube.com/embed/7R42vJAfx0E"
            title="Performance 3"
            allowFullScreen
          />

        </div>

      </section>

      {/* GALLERY */}

      <section className="bg-[#080808] py-24 px-6 md:px-20">

        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
          Performance Gallery
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery1.jpg"
              alt="Gallery 1"
              width={600}
              height={600}
              className="w-full h-72 object-cover hover:scale-110 transition duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery2.jpg"
              alt="Gallery 2"
              width={600}
              height={600}
              className="w-full h-72 object-cover hover:scale-110 transition duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery3.jpg"
              alt="Gallery 3"
              width={600}
              height={600}
              className="w-full h-72 object-cover hover:scale-110 transition duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/gallery4.jpg"
              alt="Gallery 4"
              width={600}
              height={600}
              className="w-full h-72 object-cover hover:scale-110 transition duration-500"
            />
          </div>

        </div>

      </section>
      {/* SOCIAL */}

      <section className="py-20 px-6 md:px-20">

        <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
          Connect With Nilavra
        </h2>

        <div className="flex justify-center gap-8 text-4xl">

          <a
            href="https://www.facebook.com/share/1CiKqEsL9z/"
            target="_blank"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/roynilavra"
            target="_blank"
          >
            <FaInstagram />
          </a>

          <a
            href="https://youtube.com/@nilavraroy11"
            target="_blank"
          >
            <FaYoutube />
          </a>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="bg-[#080808] py-24 px-6 md:px-20"
      >

        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-yellow-500 mb-10">
            Book Nilavra Roy
          </h2>

          <div className="space-y-6 text-lg">

            <div className="flex items-center gap-4">
              <FaPhone color="#eab308" />
              <span>{settingsMap.phone1}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone color="#eab308" />
              <span>{settingsMap.phone2}</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope color="#eab308" />
              <span>{settingsMap.email}</span>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="py-8 text-center border-t border-white/10 text-gray-500">
        © 2026 Nilavra Roy. All Rights Reserved.
      </footer>

    </main>
  );
}
