export class Haiku {
  constructor(line1, line2, line3) {
  this.line1 = line1.split(' ')
  this.line2 = line2.split(' ')
  this.line3 = line3.split(' ')
}
  removeSilentE(line){
    for (var i = 0 ; i < line.length ; i++){
      if (line[i].endsWith('e')) {
        line[i] = line[i].slice('e', -1);
      }
   }
   return line
  }

  removeSilentDouble(line){
    for (let i = 0 ; i < line.length ; i++){
       if (line[i].includes('ee')) {
        line[i] = line[i].replace('ee', 'e')
      }
      else if (line[i].includes('oo')) {
        line[i] = line[i].replace('oo', 'o')
      }
      else if (line[i].includes('ea')) {
        line[i] = line[i].replace('ea', 'a')
      }
      else if (line[i].includes('aa')) {
        line[i] = line[i].replace('aa', 'a')
      }
      else if (line[i].includes('ie')) {
        line[i] = line[i].replace('ie', 'i')
      }
      else if (line[i].includes('ei')) {
        line[i] = line[i].replace('ei', 'i')
      }
      else if (line[i].includes('ey')) {
        line[i] = line[i].replace('ey', 'y')
      }
    }
      return line
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
  let newLine = this.removeSilentE(line)
  newLine = this.removeSilentDouble(newLine)

  return newLine
}


  // isHaiku(){
  //
  //   let line1 = this.cleanLines(this.line1)
  //   let line2 = this.cleanLines(this.line2)
  //   let line3 = this.cleanLines(this.line3)
  //   console.log(line1);
  //
  //   let line1Count = this.countVowels(line1)
  //   let line2Count = this.countVowels(line2)
  //   let line3Count = this.countVowels(line3)
  //
  //   if (line1Count == 5 && line2Count == 7 && line3Count == 5){
  //    return true
  //  }
  // }





}
