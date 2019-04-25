var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
   
  for(let j = 0; j < arr.length; j++) {
    for(let n = 0; n < arr.length; n++) {
      if (n === arr.length - 1)
        document.write(arr[j][n]);
      else
        document.write(arr[j][n] + ", ");
    }
    document.write("<br>");
  }