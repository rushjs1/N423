var _db;

export function initFirebase() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log("There is a user");
    } else {
      console.log("No User");
      _db = "";
    }
    //callback();
  });
}

export function signIn(callback) {
  firebase
    .auth()
    .signInAnonymously()
    .then(function(result) {
      _db = firebase.firestore();
      callback();
    });
}

export function getStudentByClassNumber(genre) {
  $(".content").html("");
  $(".content").append(`<h3>${genre}</h3>`);

  _db
    .collection("Albums")
    .where("genre", "==", genre)
    .get()
    .then(function(querySnapshot) {
      console.log(querySnapshot);
      querySnapshot.forEach(function(doc) {
        let album = doc.data();
        $(".content").append(
          `<p> Album: ${album.albumName},  Artist:  ${album.artistName} <img src="${album.coverArt}" </p>`
        );
      });
    });
}
