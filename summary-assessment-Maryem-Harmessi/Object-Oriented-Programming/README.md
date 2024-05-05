## Create a PlayList class by using OOP concept.

### Song object should look something like this:

```js
var song = {
  title: "Baka Mitai",
  artist: "Kiryu",
  duration: 4.8, // 4 minutes and 50 seconds
  played: "unplayed",
};
```

### The Playlist class should have the following properties:

**playedSongs**: Number of songs marked as played.

**unplayedSongs**: Number of songs not played yet.

**songsToPlay**: List of songs that you plan to play.

**playedSongsList**: List of songs that you have already played.

**nextSong**: A reference to the next song to play (song object).

**currentSong**: A reference to the current song being played (song object).

**lastPlayedSong**: A reference to the last song you played (song object).

### The Playlist class should have the following methods:

**addSong(song)**: Adds a song to the songsToPlay list and increments the number of unplayed songs.

**playCurrentSong()**:

- Marks the currentSong as "played," adds it to the playedSongsList,
- changes the lastPlayedSong to be the song that just got played,
- changes the currentSong to be the nextSong to be played,
- changes the nextSong property to be the first unplayed song you find in the list of songs,
- increments the "played" songs & decrements the number of "unplayed" songs.

**shufflePlay**: shuffles the unplayedSongs list
