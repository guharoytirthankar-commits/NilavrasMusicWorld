'use client';

import { useState } from 'react';
import BookingForm from './BookingForm';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-3 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black transition"
      >
        Book A Show
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-950 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-10"
            >
              ✕
            </button>

            <div className="p-8">
              <BookingForm onSuccess={() => setIsOpen(false)} />
            </div>

          </div>
        </div>
      )}
    </>
  );
}
