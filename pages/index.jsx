import React from 'react';
import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Section from '../components/Section';

import FirebaseContext from '../lib/firebase-context';
import mapDocToObject from '../lib/map-doc-to-object';
import { TITLE } from '../lib/constants';

class Index extends React.Component {
  static async getInitialProps(ctx) {
    const db = ctx.db;

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

    const sectionSnapshot = db
      .collection('sections')
      .where('enabled', '==', true)
      .orderBy('sortIndex')
      .get();

    const footerLinks = (await footerSnapshot).docs.map(mapDocToObject);
    const heroLinks = (await heroSnapshot).docs.map(mapDocToObject);
    const socialLinks = (await socialSnapshot).docs.map(mapDocToObject);

    // handle contents subcollections
    const contentSnapshotPromises = [];
    const sections = [];

    (await sectionSnapshot).docs.forEach(doc => {
      contentSnapshotPromises.push(
        doc.ref
          .collection('contents')
          .where('enabled', '==', true)
          .orderBy('sortIndex')
          .get(),
      );
      sections.push(mapDocToObject(doc));
    });

    const contentSnapshots = await Promise.all(contentSnapshotPromises);
    contentSnapshots.forEach((contentSnapshot, idx) => {
      sections[idx].contents = contentSnapshot.docs.map(mapDocToObject);
    });

    return { footerLinks, heroLinks, socialLinks, sections };
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.props}>
        <Head>
          <title>{TITLE}</title>
        </Head>
        <Header links={this.props.socialLinks} />
        <main>
          <Hero links={this.props.heroLinks} />
          {this.props.sections.map(section => (
            <Section key={section.id} section={section} />
          ))}
        </main>
        <Footer links={this.props.footerLinks} />
      </FirebaseContext.Provider>
    );
  }
}

export default Index;
