"use client";

import Header from '@components/Header';
import Footer from '@components/Footer';
import ToDoList from '@components/TodoList';

export default function Main() {
  return (
    <div className="flex bg-stone-50 box-border flex-col justify-between min-h-screen font-serif items-center">
      <Header />
      <ToDoList />
      <Footer />
    </div>
  )
}