import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen bg-base-100 font-sans">
      <Header />
      <Hero />
      <ToastContainer position="top-right" />
    </div>
  );
}