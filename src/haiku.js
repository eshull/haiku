export class Haiku {
  constructor(line1, line2, line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
}

  // called on one line only
  splitLines(){
    let splitLines = []
    let splitWords1 = this.line1.split(' ');
    let splitWords2 = this.line2.split(' ');
    let splitWords3 = this.line3.split(' ');

    // if (this.word == "a" || this.word == "e" || this == "i" || this == "o" || this == "u" || this == "y")
    // this.line1.
    //
    // split words of the line
    // check if e is at the end of word and if it is get rid of inspect it
    // check if two vowels are next to each other and get rid of one if true
    // count vowel in each word

    return splitLines = [splitWords1, splitWords2, splitWords3]
  }

//   checkSyllables(line){
//     let splitLine = line.split(' ');
//     //check characters
//     for (var i = 0; i < str.length; i++) {
//     alert(str.charAt(i));
//   }
//
// }



}
