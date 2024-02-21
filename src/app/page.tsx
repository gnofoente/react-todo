"use client";

import Header from '@components/Header';
import Footer from '@components/Footer';
import Main from '@components/Main';

export default function Index() {
  return (
    <div className="flex bg-stone-50 box-border flex-col justify-around min-h-screen font-serif items-center">
      <Header />

      <Main />

      <Footer />
    </div>
  )
}