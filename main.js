var songs = [
  "Warhead > by The Presidents Of The United States of America on the album These Are The Good Times People | Rock",
  "Something About Us > by Daft Punk on the album Discovery | Electronic",
  "Speak Easy > by 311 on the album Don't Tread On Me | Rock",
  "Your Racist Friend > by They Might Be Giants on the album Flood | Rock",
];

songs.unshift("Poke & Destroy > by The Presidents of the United States of America on the album Love Everybody | Rock");
songs.push("Pluto > by 2 Skinnee J's on the album Supermercado | Rock");

var song_list = document.getElementById("song-list");

for (var i = 0; i < songs.length; i++) {
  var song_title = songs[i].slice(0,songs[i].indexOf(" > by "));
  console.log(song_title);
  var song_artist = songs[i].slice(songs[i].indexOf(" > by ") +  " > by ".length, songs[i].indexOf("on the album "));
  console.log(song_artist);
  var song_album = songs[i].slice(songs[i].indexOf(" on the album ") + " on the album ".length, songs[i].indexOf(" | "));
  console.log(song_album);
  var song_genre = songs[i].slice(songs[i].indexOf(" | ") + " | ".length, songs[i].length);
  console.log(song_genre);
  song_list.innerHTML += "<li><h3>" + song_title + "</h3><p>" + song_artist + " | " + song_album + " | " + song_genre + "</p></li>"
}