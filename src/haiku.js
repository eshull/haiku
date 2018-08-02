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
    let cleanLines = this.line1
    for (let i = 0 ; i < cleanLines.length ; i++){
       if (cleanLines[i].includes('ee')) {
        cleanLines[i] = cleanLines[i].replace('ee', 'e')
      }
      else if (cleanLines[i].includes('oo')) {
        cleanLines[i] = cleanLines[i].replace('oo', 'o')
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

  countVowels(line){
    let vowelCount = 0
    if (line.length <= 3){
      vowelCount++
    }
    else {

      for (let i = 0 ; i < line.length ; i++){
        for(let x = 0 ; x < line[i].length ; x++) {
          if (line[i][x] == 'a') {
            vowelCount++
            console.log(x);
          }
          if (line[i][x] == 'e') {
            vowelCount++
          }
          if (line[i][x] == 'i') {
            vowelCount++
          }
          if (line[i][x] == 'o') {
            vowelCount++
          }
          if (line[i][x] == 'u') {
            vowelCount++
          }
          if (line[i][x] == 'y') {
            vowelCount++
          }
        }
      }
  }
  return vowelCount
}

cleanLines(line){
  line = line.removeSilentE()
  line = line.removeSilentDouble()

  return line
}


  isHaiku(){

    let line1 = this.cleanLines(this.line1)
    let line2 = this.cleanLines(this.line2)
    let line3 = this.cleanLines(this.line3)
    console.log(line1);

    let line1Count = this.countVowels(line1)
    let line2Count = this.countVowels(line2)
    let line3Count = this.countVowels(line3)

    if (line1Count == 5 && line2Count == 7 && line3ount == 5){
     return true
   }
  }





}
