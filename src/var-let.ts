function printMatrixx (matrixx:any) {
    for (var i = 0; i < matrixx.length; i++) {
      var line = matrixx[i];
      console.log(matrixx[i])
      for (var i = 0; i < line.length; i++) {
        var element = line[i];
        console.log(element);
      }
    }
  }
  var two_dimensional_matrixx = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
  printMatrixx(two_dimensional_matrixx);


  console.log("---------------------------------------------------")


  function printMatrix (matrix:any) {
    for (let i = 0; i < matrix.length; i++) {
      let line = matrix[i];
      console.log(matrix[i])
      for (let i = 0; i < line.length; i++) {
        let element = line[i];
        console.log(element);
      }
    }
  }
  const two_dimensional_matrix = [['a', 'b', 'c'], ['d', 'e', 'f'],['g', 'h', 'i']];
  printMatrix(two_dimensional_matrix);