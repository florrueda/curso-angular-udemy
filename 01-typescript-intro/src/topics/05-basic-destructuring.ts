interface AudioPlayer {
    audiovolume: number,
    songDuration: number,
    song: string,
    details: Details
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audiovolume: 90,
    songDuration: 36,
    song: "mess",
    details: {
        author: "ed sheeran",
        year: 2015
    }
}
const song =  "new song"
const { song: anotherSong, songDuration: duration, details } = audioPlayer;
// const {author} = audioPlayer.details
const { author } = details;


// console.log("Song: ", song);
// console.log("Song: ", anotherSong);
// console.log("Duration: ", duration);
// console.log("Author: ", author);

const [, , trunks = "Not found"]: string[] = ["Goku", "Vegeta"]
console.log("Personakje 3: " , trunks);


export {}