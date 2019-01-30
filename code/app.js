var app = {  init : function() {
    alert("Benvenuti all'ESCOBAR");
    $.get("https://api.github.com/users/ibarboxxx").done(app.onSucces);
},


onSucces(data) {
    console.log(data);
}
};
$(document).ready(app.init);