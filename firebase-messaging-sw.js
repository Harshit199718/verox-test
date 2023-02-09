// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyDlBSWROKMKmC9saAXRe9BkoGnh8Uf-URk",
    authDomain: "verox-41537.firebaseapp.com",
    projectId: "verox-41537",
    storageBucket: "verox-41537.appspot.com",
    messagingSenderId: "437685966979",
    appId: "1:437685966979:web:f898988d18d048b71aa3b6",
    measurementId: "G-YK5WM8E7NP"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://www.veroxai.io/logo16.png'
    
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});