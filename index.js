var theBeatlesPlay = (musicians,instruments) => {

  var newArray = [];
  var i;
  for (i = 0; i < musicians.length; i++) {

    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}


var johnLennonFacts = facts => {

  var i = 0;
  while (i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;

}
  return facts;
}
