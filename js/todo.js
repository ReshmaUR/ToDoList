// json to table
$(document).ready(function(){
    // $("#myTable").hide(6000);
    $("#one").on("click",function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        dataType: 'json',
        success: function(todo) {
            for (var i=0; i<todo.length; i++) {
                var row = $("<tr><td>" + todo[i].id+ "</td><td>" + todo[i].title+"</td><td>"+"<input type='checkbox'>"+"</td></tr>");
                $('#myTable').append(row);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    })
})
});

// checkbox validation
function valcheck(){
    var promise = new Promise(function(resolve,reject){
        var check = document.querySelectorAll("input[type='checkbox']:checked").length;
        if(check===5){
            resolve("Congrats..You are successfully completed the task..");
        }
        else{
            reject("Five tasks are enough for today!!!");
        }
    });
    promise.then(function(p){
        alert(p);
    })
    .catch(function(r){
        alert(r);
    })
}


// login validation
// function first(callback){
    
// callback();
// }
// function second(){

// }