const quotes = [
  {
    quote:
      "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness",
    author: "Audrey Hepburn",
  },
  {
    quote: "If you would be loved, love and be lovable.",
    author: "Benjamin Franklin",
  },

  {
    quote:
      "아쉽지 않고 아프지 않은 인생은 없다. 다 아프고 다 아쉬운 게 인생이다.",
    author: "배우 윤여정",
  },
  {
    quote:
      "어린아이 너무 나무라지 마라. 내가 걸어왔던 길이다. 노인 너무 무시하지 마라. 내가 갈 길이다.",
    author: "배우 박중훈 母",
  },
  {
    quote: "Be yourself. No one can say you’re doing it wrong.",
    author: "Snoopy",
  },
  {
    quote:
      "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
    author: "Charlie Chaplin",
  },
  {
    quote:
      "Nature gives you the face you have at twenty; it is up to you to merit the face you have at fifty.",
    author: "Gabriel Coco Chanel",
  },
  {
    quote:
      "60이 되어도 몰라요. 이게 내가 처음 살아보는 거잖아. 나 67살이 처음이야. 나도 이 나이는 처음이야.",
    author: "배우 윤여정",
  },
  {
    quote: "Everything comes to him who hustles while he waits.",
    author: "Thomas A. Edison",
  },

  { quote: "I'd rather be hated for who I am than be loved for who I'm not." },

  {
    quote:
      "세상은 서러움 그 자체고, 인생은 그냥 불공정 불공평이야. 근데 그 서러움을 내가 극복해야 되는 것 같아. 난 내가 극복했어.",
    author: "배우 윤여정",
  },
  {
    quote:
      "There are many in the world dying for a piece of bread, but there are many more dying for a little love.",
    author: "Mother Teresa",
  },
];

const footer = document.querySelector("#quote");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function randomQuote() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

function hanldeQuotes() {
  footer.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", hanldeQuotes);

randomQuote();
setInterval(randomQuote, 6000);
