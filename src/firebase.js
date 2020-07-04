import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD6ed6ut9qqabRCCLAWNv9vkA-y-PMMDts",
  authDomain: "project-burguer-queen.firebaseapp.com",
  projectId: "project-burguer-queen",
});

let db = firebase.firestore();
//db.settings({ timestampsInSnapshots: true });
export default db;
