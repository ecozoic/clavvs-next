import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const mapDocToObject = doc => ({ id: doc.id, ...doc.data() });

class Index extends React.Component {
  static async getInitialProps({ db }) {
    const footerSnapshot = db
      .collection('footer-links')
      .where('enabled', '==', true)
      .orderBy('sortIndex')
      .get();

    const heroSnapshot = db
      .collection('hero-links')
      .where('enabled', '==', true)
      .orderBy('sortIndex')
      .get();

    const socialSnapshot = db
      .collection('socials')
      .where('enabled', '==', true)
      .orderBy('sortIndex')
      .get();

    const footerLinks = (await footerSnapshot).docs.map(mapDocToObject);
    const heroLinks = (await heroSnapshot).docs.map(mapDocToObject);
    const socialLinks = (await socialSnapshot).docs.map(mapDocToObject);

    return { footerLinks, heroLinks, socialLinks };
  }

  render() {
    return (
      <>
        <Head>
          <title>CLAVVS</title>
        </Head>
        <Header links={this.props.socialLinks} />
        <main>
          <Hero links={this.props.heroLinks} />
        </main>
        <Footer links={this.props.footerLinks} />
        {/*<Link href="/about">
          <a>About</a>
        </Link>*/}
      </>
    );
  }
}

export default Index;
