var str = "Vedant";
var i;
var vowelcount = 0,
  conconentcount = 0;
for (i = 0; i < str.length; i++) {
  if (
    str[i] == "a" ||
    str[i] == "e" ||
    str[i] == "i" ||
    str[i] == "o" ||
    str[i] == "u"
  ) {
    vowelcount++;
  } else {
    conconentcount++;
  }
}
console.log("NO of vowels=" + vowelcount);
console.log("no of conconent=" + conconentcount);
