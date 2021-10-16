inp = document.getElementById("input")
inp.keydown( function(e) {
  if (e.target.nodeName == "INPUT") return;
  console.log("Mouse in!")
})
