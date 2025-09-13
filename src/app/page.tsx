// src/app/page.tsx
'use client';

import { useState } from 'react';
import BookGrid from './components/BookGrid';
import { books } from './data/books';

export default function HomePage() {
  // Simple cart handler for demo purposes
  const handleAddToCart = (bookId: string) => {
    console.log(`Added book ${bookId} to cart`);
    // Here you would typically dispatch to a cart state or call an API
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
<section className="text-center bg-gradient-to-r from-pink-200 to-purple-300 p-12 rounded-2xl
 mb-16 shadow-xl">
<h1 className="text-6xl font-extrabold text-gray-800 mb-2 leading-relaxed">
  Welcome to the Amana Bookstore!
</h1>
        <p className="text-lg text-gray-600">
          Your one-stop shop for the best books. Discover new worlds and adventures.
        </p>
      </section>

      {/* Book Grid */}
      <BookGrid books={books} onAddToCart={handleAddToCart} />
    </div>
  );
}
