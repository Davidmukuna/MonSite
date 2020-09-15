// fonction debogage
function msg(text) {
  console.log(text);
}

//les conditions

var age = 0;

age = prompt("Quel est votree age ? ");

msg(age);

if (age < 2) {
  msg("Vous etes un nourisson");
} else if (age < 10) {
  msg("Vous etes un enfant");
} else if (age < 18) {
  msg("Vous etes un adolescent");
} else if (age < 65) {
  msg("Vous etes un adulte");
} else {
  msg("Vous etes à la retraite");
}
