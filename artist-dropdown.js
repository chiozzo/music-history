var songs = [
  "Warhead > The Presidents Of The United States of America ~ These Are The Good Times People | Rock",
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

