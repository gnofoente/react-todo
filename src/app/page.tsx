"use client";

import Header from '@components/Header';
import Footer from '@components/Footer';
import ToDoList from '@components/TodoList';

export default function Main() {
  return (
    <>
      <Header />
      <ToDoList />
      <Footer />
    </>
  )
}