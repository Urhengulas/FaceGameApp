import * as firebase from "firebase";

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCs2Dg_N8_XjNv-KDO0e9E0_UtJyuuH6-Q",
  authDomain: "testtest-f4e08.firebaseapp.com",
  databaseURL: "https://testtest-f4e08.firebaseio.com",
  projectId: "testtest-f4e08",
  storageBucket: "testtest-f4e08.appspot.com",
  messagingSenderId: "926407254703"
};

class Firebase {
  static init() {
    firebase.initializeApp(firebaseConfig);
    Firebase.auth = firebase.auth();
  }
}

export { Firebase };
