var songs = [
  "Warhead > The Presidents of the United States of America ~ These Are The Good Times People | Rock",
  "Something About Us > Daft Punk ~ Discovery | Electronic",
  "Speak Easy > 311 ~ Don't Tread On Me | Rock",
  "Your Racist Friend > They Might Be Giants ~ Flood | Rock",
];

songs.unshift("Poke & Destroy > The Presidents of the United States of America ~ Love Everybody | Rock");
songs.push("Pluto > 2 Skinnee J's ~ Supermercado | Rock");

var artist = document.getElementById("artist");

for (var i = 0; i < songs.length; i++) {
  var song_artist = songs[i].slice(songs[i].indexOf(" > ") +  " > ".length, songs[i].indexOf("~ "));
  // console.log(song_artist);
  song_artist_value = song_artist.toLowerCase();
  song_artist_value = song_artist_value.replace(" ", "-")
  artist.innerHTML += "<option value='" + song_artist_value + "'>" + song_artist + "</option>"
}

var album = document.getElementById("album");

for (var i = 0; i < songs.length; i++) {
  var song_album = songs[i].slice(songs[i].indexOf(" ~ ") + " ~ ".length, songs[i].indexOf(" | "));
  // console.log(song_artist);
  song_album_value = song_album.toLowerCase();
  song_album_value = song_album_value.replace(" ", "-")
  album.innerHTML += "<option value='" + song_album_value + "'>" + song_album + "</option>"
}

var song_list = document.getElementById("song-list");

for (var i = 0; i < songs.length; i++) {
  var song_title = songs[i].slice(0,songs[i].indexOf(" > "));
  // console.log(song_title);
  var song_artist = songs[i].slice(songs[i].indexOf(" > ") +  " > ".length, songs[i].indexOf("~ "));
  // console.log(song_artist);
  var song_album = songs[i].slice(songs[i].indexOf(" ~ ") + " ~ ".length, songs[i].indexOf(" | "));
  // console.log(song_album);
  var song_genre = songs[i].slice(songs[i].indexOf(" | ") + " | ".length, songs[i].length);
  // console.log(song_genre);
  song_list.innerHTML += "<li><h3>" + song_title + "</h3><p>" + song_artist + " | " + song_album + " | " + song_genre + "</p></li>"
}

