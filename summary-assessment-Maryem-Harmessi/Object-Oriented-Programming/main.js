// YOUR CODE HERE
function makePlaylist(){
    return{
        playedSongs:0,
        unplayedSongs:0,
        songsToPlay:[],
        playedSongsList:[],
        nextSong:{},
        currentSong:{},
        lastPlayedSong:{},
        addSong,
        playCurrentSong,
        shufflePlay
    }
}

function makeSong(title,artist,duration){
    return {
        title,
        artist,
        duration,
        played:'unplayed'
    }
}

function addSong(song){
    if(this.songsToPlay.length ===0){
        this.currentSong=song
    }
    if(this.songsToPlay.length ===1){
        this.nextSong=song
    }
    this.songsToPlay.push(song)
    this.unplayedSongs++
}

function playCurrentSong(){
    this.currentSong.played="played"
    this.playedSongsList.push(this.currentSong)
    this.lastPlayedSong=this.currentSong
    this.currentSong=this.nextSong
    this.songsToPlay.pop()
    this.nextSong=this.songsToPlay[this.songsToPlay.length -1]    
    this.playedSongs++
    this.unplayedSongs--
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    }
function shufflePlay(){
    shuffeled=[]
    var context=this
    this.songsToPlay.forEach(function(element){
        console.log(element);
        randomIndex= getRandomInt(context.songsToPlay.length)
        console.log(randomIndex);
        if(!shuffeled[randomIndex]){
        shuffeled[randomIndex]=element   
        console.log(shuffeled);    
        }
})
return shuffeled
}


var song1 = {
    title: "Baka Mitai",
    artist: "Kiryu",
    duration: 4.8,
    played: "unplayed",
    }

var song2 = {
    title: "Song",
    artist: "artist",
    duration: 4,
    played: "unplayed",
    }


var song3 = {
    title: "anotherSong",
    artist: "another artist",
    duration: 5,
    played: "unplayed",
    }

        var playlist=makePlaylist()
        playlist.addSong(song1)
        playlist.addSong(song2)
        playlist.addSong(song3)