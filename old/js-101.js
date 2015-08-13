var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.unshift("Poke & Destroy > by The Presidents of the United States of America on the album Love Everybody");
songs.push("Pluto > by 2 Skinnee J's on the album Supermercado");

for (var i = 0; i < songs.length; i++) {
  var current_song = songs[i];
  current_song = current_song.replace(/[*@(!]/g, "")
  current_song = current_song.replace(">", "-");
  songs[i] = current_song;
}

var song_list = document.getElementById("song-list");

for (var i = 0; i < songs.length; i++) {
  var song_title = songs[i].slice(0,songs[i].indexOf(" - by "));
  console.log(song_title);
  var song_artist = songs[i].slice(songs[i].indexOf(" - by ") +  " - by ".length, songs[i].indexOf("on the album "));
  console.log(song_artist);
  var song_album = songs[i].slice(songs[i].indexOf(" on the album ") + " on the album ".length, songs[i].length);
  console.log(song_album);
  song_list.innerHTML += "<li><h3>" + song_title + "</h3><p>" + song_artist + " | " + song_album + " | " + "Genre</p></li>"
}