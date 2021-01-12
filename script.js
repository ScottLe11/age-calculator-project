let name;
let userBirth;
let age;

$("button").click(function(){
name=$(".name").val();
userBirth=$(".year").val();
age=2021-userBirth;
$(".message").append(`<p>My name is ${name}, and I am ${age} years old</p>`);
});