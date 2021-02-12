let term ={
    Spain: 28,
    Poland: 15,
    Belarus: -22,
}
function avgArray(term) {
    var sum = 0;
    for (var i = 0, j = term.length; i < j; i++) {
      sum += term[i];
    }
    return sum / term.length;
  }

    console.log('Средняя температура: ' + avgArray ([term.Spain, term.Poland, term.Belarus]))
    function maximum(term) {
    let max = 0
    for (let i in term) {
    if (max < term[i]) max = term[i]
    }
    return max
    }
    let max = maximum(term)
    console.log('Максимальная температура: ' + max)
              