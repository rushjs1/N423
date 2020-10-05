var data = {
  Students: []
};

$(document).ready(function() {
  go();
});

function go() {
  function setStore() {
    if (!localStorage.getItem("students")) {
      localStorage.setItem("students", JSON.stringify(students));
    } else {
      data.Students = JSON.parse(localStorage.getItem("students"));
    }
  }
  setStore();

  function displayNames() {
    var st = JSON.parse(localStorage.getItem("students"));
    $(".studentsContainter").html("");
    let dataString = "";
    $.each(st, function(index, value) {
      dataString += `<div class="studentsContainer">
      <div class="studentContainerInfo">
      <h2>Student Information</h2>
      <h3>Name: ${value.name} </h3>
      <h3>Email: ${value.email} </h3>
      <h3>Major: ${value.major} </h3>
      <h3>Year: ${value.year} </h3>
      </div>
       </div>`;
    });
    console.log(dataString);
    $(".studentsContainer").append(dataString);
    $(".studentsContainer").html(dataString);
  }

  function addStudent() {
    let newStudent = {
      name: "",
      email: "",
      major: "",
      year: "",
      classes: []
    };
    newStudent.name = $("#studentName").val();
    newStudent.email = $("#studentEmail").val();
    newStudent.major = $("#studentMajor").val();
    newStudent.year = $("#studentYear").val();

    newStudent.classes.push($("studentclass0").val());
    newStudent.classes.push($("studentclass1").val());
    newStudent.classes.push($("studentclass2").val());
    newStudent.classes.push($("studentclass3").val());
    newStudent.classes.push($("studentclass4").val());

    console.log(data);
    console.log(newStudent);

    data.Students.push(newStudent);

    localStorage.setItem("students", JSON.stringify(data.Students));
    alert("Successfully added student.");
    console.log("added the student");
  }

  function initButtons() {
    $("#submitBtn").click(function() {
      /* students.Students.push({ name: newName }); */
      /* localStorage.setItem("students", JSON.stringify(students)); */

      addStudent();
    });
    $("#showStudentsBtn").click(function() {
      displayNames();
    });
  }
  initButtons();
}
