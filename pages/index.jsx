import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

class Index extends React.Component {
  static async getInitialProps({ db }) {
    const snapshot = await db
      .collection('footer-links')
      .where('enabled', '==', true)
      .get();

    snapshot.forEach(doc => {
      console.log(doc.id);
    });

    return {};
  }

  render() {
    return (
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
  }
}

export default Index;
