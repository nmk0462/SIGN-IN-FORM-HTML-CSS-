  
  (function(){
  
    
  const firebaseConfig = {
    apiKey: "AIzaSyCteaWx7PyqL_KC-SZPVtdllgTQbLl7Kbo",
    authDomain: "let-s-rock-4b72c.firebaseapp.com",
    databaseURL: "https://let-s-rock-4b72c.firebaseio.com",
    projectId: "let-s-rock-4b72c",
    storageBucket: "let-s-rock-4b72c.appspot.com",
    messagingSenderId: "1060556478367",
    appId: "1:1060556478367:web:bbfe54662c09295a2d0faa",
    measurementId: "G-XKJ4V8TK6W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const subBtn = document.getElementById('subBtn');
  const subBtn1 = document.getElementById('subBtn1');
  
  subBtn.addEventListener('click',e => {
	 
	  const email = txtEmail.value;
	  const pass = txtPassword.value;
	  const auth = firebase.auth();
 const promise = auth.signInWithEmailAndPassword(email,pass);
	  promise.catch(e => console.log(e.message));
	  
	  
	  
  });subBtn1.addEventListener('click',e => {
	  	  const email = txtEmail1.value;
	  const pass = txtPassword1.value;
	  const auth = firebase.auth();
 const promise = auth.createUserWithEmailAndPassword(email,pass);
        
	  promise.catch(e => console.log(e.message));
	  
  
  
  });
  
  
  firebase.auth().onAuthStateChanged(firebaseUser => {
	  if(firebaseUser) {
		  console.log(firebaseUser);
	  }
	  else
	  {
		  console.log('not logged in');
	  }
  });
  });
 
  
  
  
  
  
  
  
  
  
  
  
  
