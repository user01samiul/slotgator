'use client';

import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Reviews
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          This page is currently being updated.
        </p>
        <Link href="/">
          <button className="group inline-flex items-center px-8 py-4 bg-white text-purple-900 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
