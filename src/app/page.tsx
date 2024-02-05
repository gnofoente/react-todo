"use client";

import Header from '@components/Header';
import Footer from '@components/Footer';
import ToDoList from '@components/TodoList';

export default function Main() {
  return (
    <div className="flex bg-stone-50 box-border flex-col justify-around min-h-screen font-serif items-center">
      <Header />

      <main className="text-xl w-10/12 max-w-xl h-96 max-h-96 flex flex-col justify-center items-center">
        <ToDoList />
      </main>

      <Footer />
    </div>
  )
}