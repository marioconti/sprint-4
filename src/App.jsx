import React, { useEffect, useState } from "react";
import { Container } from "./container/container";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADhdiUjp1FxcadYWApdV0GEpAQhm1WWsM",
  authDomain: "proyecto-mario-prueba-30c1d.firebaseapp.com",
  projectId: "proyecto-mario-prueba-30c1d",
  storageBucket: "proyecto-mario-prueba-30c1d.appspot.com",
  messagingSenderId: "397842382497",
  appId: "1:397842382497:web:9c7eabb5a1607448753ae0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState({
    tweet: "",
    autor: "",
  });

  useEffect(() => {
    // Get a list of cities from your database
    async function getTweets(db) {
      const tweetsCol = collection(db, "tweets");
      const tweetsSnapshot = await getDocs(tweetsCol);
      const tweetsList = tweetsSnapshot.docs.map((doc) => {
        return {...doc.data()}});
      setTweets(tweetsList);
      console.log(tweetsList);
      return tweetsList;
    }
    getTweets(db);
  }, []);
  // console.log(tweets);

  // ========================================
  // OPCION FACIL
  // const handleTweetChange = (e) => {
  //   let nuevoTweet = {
  //     ...tweet,
  //     tweet: e.target.value,
  //   };
  //   setTweet(nuevoTweet);
  // };

  // const handleAutorChange = (e) => {
  //   let nuevoTweet = {
  //     ...tweet,
  //     autor: e.target.value,
  //   };
  //   setTweet(nuevoTweet);
  // };
  // =======================================

  const handleChange = (e) => {
    console.log(e.target.name);
    let nuevoTweet = {
      ...tweet,
      // lo que estamos haciendo aquí es setear las propiedades que tenga el objeto tweet que al comienzo del estado estan definidas como un objeto con propiedades vacías. Cada vez que el name coincida con el name del handle se va a actualizar con el valor que le estemos pasando por el e.target.value

      //TODO: no me queda bien claro esto del e.target.name ¿Como funciona?
      [e.target.name]: e.target.value,
    };
    setTweet(nuevoTweet);
  };

  console.log(tweet);



  return (
    <div className="App">
      <Container />
      <div>
        <textarea
          name="tweet"
          value={tweet.tweet}
          onChange={handleChange}
          cols="30"
          rows="5"
          placeholder="escribe un tweet"
        />
        <div className="formulario">
          <input
            name="autor"
            value={tweet.autor}
            onChange={handleChange}
            type="text"
            placeholder="persona autora"
          />
          <button>Enviar tweet</button>
        </div>
      </div>
      <h1>TWEETS</h1>
      {tweets.map((tweet) => {
        return (
          <div key={tweet.id}>
            <h1>{tweet.tweet}</h1>
            <h4>{tweet.autor}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
