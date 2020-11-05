import * as Model from "../model/model.js";

function initListeners() {
  $("#genres").change(function() {
    Model.getStudentByClassNumber(this.value);
    console.log(this.value);
  });
}

$(document).ready(function() {
  Model.initFirebase();
  Model.signIn(initListeners);
});
