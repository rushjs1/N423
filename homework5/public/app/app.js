import * as Model from "../model/model.js";

$(document).ready(function() {
  Model.initFirebase();
  Model.signIn();
});
