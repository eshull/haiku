export class Haiku {
  constructor(line1, line2, line3) {
  this.line1 = line1.split(' ')
  this.line2 = line2.split(' ')
  this.line3 = line3.split(' ')
}


  removeSilentE(){
    var cleanLines = this.line1
    for (var i = 0 ; i < cleanLines.length ; i++){
      if (cleanLines[i].endsWith('e')) {
        cleanLines[i] = cleanLines[i].slice('e', -1);
      }
   }
   return cleanLines
  }

  removeSilentDouble(){
    let cleanLines = this.line1;


    for (let i = 0 ; i < cleanLines.length ; i++){
      console.log(cleanLines);
       if (cleanLines[i].includes('ee')) {
        cleanLines[i] = cleanLines[i].replace('ee', 'e')
      }
      else if (cleanLines[i].includes('oo')) {
        cleanLines[i] = cleanLines[i].replace('oo', 'o')
        console.log(cleanLines[i]);
      }
      else if (cleanLines[i].includes('ea')) {
        cleanLines[i] = cleanLines[i].replace('ea', 'a')
      }
      else if (cleanLines[i].includes('aa')) {
        cleanLines[i] = cleanLines[i].replace('aa', 'a')
      }
      else if (cleanLines[i].includes('ie')) {
        cleanLines[i] = cleanLines[i].replace('ie', 'i')
      }
      else if (cleanLines[i].includes('ei')) {
        cleanLines[i] = cleanLines[i].replace('ei', 'i')
      }
      else if (cleanLines[i].includes('ey')) {
        cleanLines[i] = cleanLines[i].replace('ey', 'y')
      }

    }
      return cleanLines

  }

}
