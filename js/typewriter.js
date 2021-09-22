function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const typeWriter = [
  "sentence ending number one.",
  "sentence ending number two.",
  "sentence ending number three.",
  "sentence ending number four.",
  "sentence ending number five.",
  "sentence ending number six.",
  "sentence ending number seven.",
  "sentence ending number eight.",
];

shuffle(typeWriter);
console.log(typeWriter);

const instance = new Typewriter("#typewriter", {
  strings: typeWriter,
  autoStart: true,
  loop: true,
});
