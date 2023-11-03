let audio = document.querySelector("audio")
let previos = document.querySelector(".previos")
let next = document.querySelector(".next")
let image = document.querySelector(".image")
let pause = document.querySelector(".pause")
let valum = document.querySelector("input")
let duraction = document.querySelector(".duraction")
// let olay = document.querySelector(".pause")
console.log(duraction)

let i = 0;
let audioArray = [
    "audio/3najaa-sooryavanshi.mp3",
    "audio/Ram Siya Ram - Sachet Tandon 128 Kbps.mp3",
    "audio/bestringtones.net_bam-bam-bhole-ringtone-download-single-by-siddharth-mohan.mp3",
    "audio/Tum Jo Aaye Jindagi - Once Upon A Time In Mumbaai 128 Kbps.mp3",
    "audio/Bheegi-bheegi-.mp3",
    "audio/Hamari Adhuri Kahani (Title Song) Arijit Singh 320Kbps.mp3"
];

let imageArray = [
    "image/Sooryavanshi-banner.jpg",
    "image/ram-ji.webp",
    "image/sankar-ji.jpg",
    "image/bolna-halke-halke.jpeg",
    "image/bheegi.jpeg",
    "image/hmari-adhuri.jpg"
];

next.addEventListener("click", () => {
    i++;
    if (i > 5)
        i = 0;
    image.setAttribute("src", imageArray[i])
    audio.setAttribute("src", audioArray[i])
    audio.play();
    pause.setAttribute("src", "image/pause.webp")

})

previos.addEventListener("click", () => {
    i--;
    if (i < 0)
        i = 5;
    image.setAttribute("src", imageArray[i])
    audio.setAttribute("src", audioArray[i])
    audio.play();
    pause.setAttribute("src","image/pause.webp")

})


// This is play and pause button
let number = 1;
pause.addEventListener("click", () => {
    if (number === 0) {
        audio.pause();
        pause.setAttribute("src", "image/video.png")
        number = 1;
    }
    else {
        audio.play();
        pause.setAttribute("src",  "image/pause.webp")
        number = 0
    }
})


// This is volume
const volumeSlider = (e) => {
    audio.volume = e.target.value
}
valum.addEventListener("input", volumeSlider)




setInterval(() => {
    duraction.value = audio.currentTime * 100 / audio.duration
}, 1000)

duraction.addEventListener("change", () => {
    audio.currentTime = duraction.value / 100 * audio.duration
})