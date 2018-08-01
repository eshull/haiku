export class Haiku {
  constructor(line1, line2, line3) {
  this.line1 = line1.split(' ')
  this.line2 = line2.split(' ')
  this.line3 = line3.split(' ')
}


  removeSilentE(){
    var cleanLines = this.line1
    console.log(cleanLines);
    for (var i = 0 ; i < cleanLines.length ; i++){
      if (cleanLines[i].endsWith() == 'were') {
        cleanLines[i] = cleanLines[i].slice('e', -1);
      } else {
        console.log('dingus');
      }
      console.log(cleanLines[i]);
   }
   return cleanLines
  }

  // removeSilentDouble(){
  //   let cleanLines = this.line1;
  //
  //
  //   for (let i = 0 ; i <= cleanLines.length ; i++){
  //     console.log(cleanLines);
  //      if (cleanLines[i].includes('ee')) {
  //       cleanLines[i].replace('ee', 'e')
  //     }
  //     else if (cleanLines[i].includes('oo')) {
  //
  //       cleanLines[i].replace('oo', 'o')
  //     }
  //     else if (cleanLines[i].includes('ea')) {
  //       cleanLines[i].replace('ea', 'a')
  //     }
  //     else if (cleanLines[i].includes('aa')) {
  //       cleanLines[i].replace('aa', 'a')
  //     }
  //     else if (cleanLines[i].includes('ie')) {
  //       cleanLines[i].replace('ie', 'i')
  //     }
  //     else if (cleanLines[i].includes('ei')) {
  //       cleanLines[i].replace('ei', 'i')
  //     }
  //     else if (cleanLines[i].includes('ey')) {
  //       cleanLines[i].replace('ey', 'y')
  //     }
  //
  //   }
  //     return cleanLines
  //
  // }

// array1.forEach(function(element)
//
// }
// cleanLines.forEach(function(word) {
//     word.slice('e', -1);
//   }
}
