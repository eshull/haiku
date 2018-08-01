import {Haiku} from '../src/haiku';

describe ('Haiku', function() {
  let poem;
  let sample1
  let sample2
  let sample3

  beforeEach(function() {
    poem = new Haiku

     sample1 = "i mean were looking",
     sample2 = "down on waynes basement only",
     sample3 = "thats not waynes basement"

  });


  it ('should split all three lines and return one array', function() {
    let joinLines = [sample1, sample2, sample3]
    let result = poem.splitLines();
    expect(result).toEqual(joinLines);
  });

});
