import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Index = () => (
  <>
    <Head>
      <title>CLAVVS</title>
    </Head>
    <Header />
    <main>
      <Hero />
    </main>
    <Footer />
  </>
);

export default Index;
