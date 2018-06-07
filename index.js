var theBeatlesPlay = (musicians,instruments) => {

  var newArray = [];
  var i;
  for (i = 0; i < musicians.length; i++) {

    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}


var johnLennonFacts = facts => {

  while (counter < facts.length) {
  var counter = 0;
    facts[counter] = `${facts[counter]}!!!`;

  counter = counter + 1;
}
return facts;
}
