var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyA3pKD4hfe1uNIVOVRSDo6u2oEpaf7CCPs",
    authDomain: "loginform-c35a7.firebaseapp.com",
    projectId: "loginform-c35a7",
    storageBucket: "loginform-c35a7.appspot.com",
    messagingSenderId: "302784230748",
    appId: "1:302784230748:web:5e18a8a2447d3b295d7d99",
    measurementId: "G-GYH059D4XB"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}

var app_fireBase = {};

(function(){
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA3pKD4hfe1uNIVOVRSDo6u2oEpaf7CCPs",
    authDomain: "loginform-c35a7.firebaseapp.com",
    projectId: "loginform-c35a7",
    storageBucket: "loginform-c35a7.appspot.com",
    messagingSenderId: "302784230748",
    appId: "1:302784230748:web:5e18a8a2447d3b295d7d99",
    measurementId: "G-GYH059D4XB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  app_fireBase = firebase;
})
