const cardBox = document.querySelector(".card-box");
const cardTwit = document.createElement("div");
cardTwit.classList.add("card");
let twitImage = document.createElement("img");
twitImage.src = "images/twitter.png";
let twitTitle = document.createElement("span");
twitTitle.classList.add("title");
twitTitle.textContent = "twitter";
let twitSubTitle = document.createElement("span");
twitSubTitle.classList.add("title");
twitSubTitle.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium dolorem ut voluptatem corporis nihil amet? Quaerat eaque iusto delectus numquam voluptatum iure est!";
let twitButton = document.createElement("button");
twitButton.classList.add("read-more")
twitButton.textContent = "read more"
cardTwit.appendChild(twitImage)
cardTwit.appendChild(twitTitle)
cardTwit.appendChild(twitSubTitle)
cardTwit.appendChild(twitButton)


const cardInst = document.createElement("div");
cardInst.classList.add("card");
let instImage = document.createElement("img");
instImage.src = "images/instagram.png";
let instTitle = document.createElement("span");
instTitle.classList.add("title");
instTitle.textContent = "instagram";
let instSubTitle = document.createElement("span");
instSubTitle.classList.add("title");
instSubTitle.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium dolorem ut voluptatem corporis nihil amet? Quaerat eaque iusto delectus numquam voluptatum iure est!";
let instButton = document.createElement("button");
instButton.classList.add("read-more")
instButton.textContent = "read more"
cardInst.appendChild(instImage)
cardInst.appendChild(instTitle)
cardInst.appendChild(instSubTitle)
cardInst.appendChild(instButton)


const cardYT = document.createElement("div");
cardYT.classList.add("card");
let ytImage = document.createElement("img");
ytImage.src = "images/youtube.png";
let ytTitle = document.createElement("span");
ytTitle.classList.add("title");
ytTitle.textContent = "You tube";
let ytSubTitle = document.createElement("span");
ytSubTitle.classList.add("title");
ytSubTitle.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio praesentium dolorem ut voluptatem corporis nihil amet? Quaerat eaque iusto delectus numquam voluptatum iure est!";
let ytButton = document.createElement("button");
ytButton.classList.add("read-more")
ytButton.textContent = "read more"
cardYT.appendChild(ytImage)
cardYT.appendChild(ytTitle)
cardYT.appendChild(ytSubTitle)
cardYT.appendChild(ytButton)

cardBox.appendChild(cardTwit)
cardBox.appendChild(cardInst)
cardBox.appendChild(cardYT)
document.body.appendChild(cardBox)