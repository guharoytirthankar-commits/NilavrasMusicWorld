'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { convertGoogleDriveUrl } from '../lib/urlConverter';
import BookingModal from './BookingModal';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

interface HomeClientProps {
  settingsMap: Record<string, string>;
  videos: any[];
  gallery: any[];
  events: any[];
}

export default function HomeClient({
  settingsMap,
  videos,
  gallery,
  events,
}: HomeClientProps) {
  console.log("SETTINGS MAP:", settingsMap);
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

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {settingsMap.heroTitle || "Songs that stay with you"}
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              {settingsMap.heroSubtitle ||
                "Nilavra Roy | 22 Years of Musical Excellence. Classical Roots. Modern Stage Energy."}
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">

              <a
                href="#about"
                className="px-8 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-400 transition"
              >
                About Nilavra
              </a>

              <BookingModal />

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
            {settingsMap.aboutShort ||
              "Nilavra Roy is a classically trained vocalist with over 22 years of musical training and performance experience."}
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
{videos.length > 0 && (
  <section className="py-24 px-6 md:px-0 bg-[#080808]">

    <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
      More Performances
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {videos.map((video, index) => (

        <iframe
          key={index}
          className="w-full aspect-video rounded-2xl"
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          allowFullScreen
        />

      ))}

    </div>

  </section>
)}
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
{gallery.length > 0 && (
  <section className="py-24 px-6 md:px-0">

    <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
      Latest Memories
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {gallery.map((image, index) => (

        <div
          key={index}
          className="overflow-hidden rounded-2xl"
        >

          <Image
            src={convertGoogleDriveUrl(image.imageUrl)}
            alt={image.title}
            width={600}
            height={600}
            className="w-full h-72 object-cover hover:scale-110 transition duration-500"
          />

        </div>

      ))}

    </div>

  </section>
)}

      </section>

      {/* UPCOMING EVENTS */}

      <section className="py-24 px-6 md:px-20 bg-[#080808]">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-yellow-500 text-center mb-12">
            Upcoming Events
          </h2>

          {events && events.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500 transition"
                >

                  <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                    {event.title}
                  </h3>

                  <div className="space-y-3 text-gray-300">

                    <div className="flex items-center gap-3">
                      <span className="text-yellow-500 font-semibold">📅 Date:</span>
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-yellow-500 font-semibold">📍 Venue:</span>
                      <span>{event.venue}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-yellow-500 font-semibold">🏙️ City:</span>
                      <span>{event.city}</span>
                    </div>

                  </div>

                </motion.div>
              ))}

            </div>
          ) : (
            <div className="text-center py-16">

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >

                <p className="text-2xl text-gray-400 mb-4">🎪</p>
                <p className="text-xl text-gray-300">
                  Coming Soon!
                </p>
                <p className="text-gray-500 mt-2">
                  Exciting performances are being planned. Stay tuned!
                </p>

              </motion.div>

            </div>
          )}

        </div>

      </section>

      {/* SOCIAL */}

      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-black to-[#080808]">

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-yellow-500 mb-4">
              Connect With Nilavra
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Follow along for updates, behind-the-scenes content, and live performance announcements
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 flex-wrap">

            <motion.a
              href={settingsMap.facebook}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white text-3xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              <FaFacebookF />
            </motion.a>

            <motion.a
              href={settingsMap.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white text-3xl hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href={settingsMap.youtube}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-3xl hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
            >
              <FaYoutube />
            </motion.a>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="bg-[#080808] py-24 px-6 md:px-20"
      >

        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-bold text-yellow-500 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to book a performance or have questions? Reach out through any of these channels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-yellow-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">Phone</h3>
                  <a href={`tel:${settingsMap.phone1}`} className="text-gray-300 hover:text-yellow-500 transition mb-2 block">
                    {settingsMap.phone1}
                  </a>
                  <a href={`tel:${settingsMap.phone2}`} className="text-gray-300 hover:text-yellow-500 transition block">
                    {settingsMap.phone2}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-500/20 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-yellow-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-500 mb-2">Email</h3>
                  <a href={`mailto:${settingsMap.email}`} className="text-gray-300 hover:text-yellow-500 transition">
                    {settingsMap.email}
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8 text-center"
          >
            <p className="text-gray-300 mb-4">
              💡 For inquiries, event bookings, or collaboration opportunities
            </p>
            <p className="text-gray-400 text-sm">
              Response time: Typically within 24-48 hours
            </p>
          </motion.div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="py-8 text-center border-t border-white/10 text-gray-500">
        © 2026 Nilavra Roy. All Rights Reserved.
      </footer>

    </main>
  );
}
