/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyDPvlzgHtoZdrcdeN684JmE5Ri4yfETKnU",
  authDomain: "friendlychat-cc148.firebaseapp.com",
  projectId: "friendlychat-cc148",
  storageBucket: "friendlychat-cc148.appspot.com",
  messagingSenderId: "277512464229",
  appId: "1:277512464229:web:27cc14a16913d8467e638c"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
