import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const isServer = typeof window === 'undefined';
const __NEXT_FIREBASE_STORE__ = '__NEXT_FIREBASE_STORE__';

export function initializeStore() {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
  });

  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true });

  return db;
}

export function getOrCreateStore() {
  // Create store if unavailable on the server and set it on the global object
  if (isServer) {
    if (!global[__NEXT_FIREBASE_STORE__]) {
      global[__NEXT_FIREBASE_STORE__] = initializeStore();
    }
    return global[__NEXT_FIREBASE_STORE__];
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_FIREBASE_STORE__]) {
    window[__NEXT_FIREBASE_STORE__] = initializeStore();
  }
  return window[__NEXT_FIREBASE_STORE__];
}

export default App => {
  return class AppWithFirebase extends React.Component {
    static async getInitialProps(appContext) {
      // gIP called during SSR and when navigating to new page via Link
      const db = getOrCreateStore();

      // Provide the store to getInitialProps of pages
      appContext.ctx.db = db;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
      };
    }

    constructor(props) {
      super(props);
      this.db = getOrCreateStore();
    }

    render() {
      return <App {...this.props} db={this.db} />;
    }
  };
};
