window.onload = function() {
  // defaultValues();
  load();
  //keyValues();
};
var moduleArray = ["351T1", "351C1", "351E1", "352T1", "352C1"];
function keyValues() {
  $("input").keyup(function() {
    save();
    console.log("toot");
  });
}
var gradeSave = [];
//can i turn gradenumber into a array??
function save() {
  for (let i = 0; i < moduleArray.length; i++) {
    localStorage.gradeSave[i] = document.getElementById(moduleArray[i]).value;
    console.log(moduleArray[i]);
    console.log(gradeSave[i]);
  }
}

function load() {
  let defaulty = 0;

  if (localStorage.gradeNumber === undefined) {
    localStorage.gradeNumber = defaulty;
    for (let i = 0; i < moduleArray.length; i++) {
      document.getElementById(moduleArray[i]).value = localStorage.gradeNumber;
      console.log(moduleArray[i]);
    }
  } else {
    for (let i = 0; i < moduleArray.length; i++) {
      document.getElementById(moduleArray[i]).value = localStorage.gradeSave[i];
      // for (let i = 0; i < moduleArray.length; i++) {
      //  document.getElementById(moduleArray[i]).value = localStorage.gradeNumber;
    }
  }
}
//document.getElementById("351T1").value)

//var retrievedValue = localStorage.gradeNumber;

// function save() {
//   // run on button or key
//   localStorage.setItem("351T1", document.getElementById("351T1").value);
//   console.log("bubs");
//   localStorage.setItem("351C1", document.getElementById("351C1").value);
//   localStorage.setItem("351E1", document.getElementById("351E1").value);
//   localStorage.setItem("352T1", document.getElementById("352T1").value);
//   localStorage.setItem("352C1", document.getElementById("352C1").value);
// }

// function Load() {
//   localStorage.getItem("351T1", document.getElementById("351T1").value);
//   localStorage.getItem("351C1", document.getElementById("351C1").value);
//   localStorage.getItem("351E1", document.getElementById("351E1").value);
//   localStorage.getItem("352T1", document.getElementById("352T1").value);
//   localStorage.getItem("352C1", document.getElementById("352C1").value);
// }
