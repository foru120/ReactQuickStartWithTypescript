enum Media {
    Newspaper,
    Broadcasting,
    SNS,
    Magazine,
    Youtube
};

let media1: Media = Media.Youtube;
console.log(media1);

enum Media2 {
    Newspaper = "신문",
    Broadcasting = "방송",
    SNS = "SNS",
    Magazine = "잡지",
    Youtube = "유튜브"
};

let media2: Media2 = Media2.Youtube;
console.log(media2);