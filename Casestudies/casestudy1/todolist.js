$(document).ready(function()
{
var count=0;
$.ajax({
method:"GET",
url:"https://jsonplaceholder.typicode.com/todos",
success:function(data)
{
var list="<ul>";
for(i in data)
{
if(data[i].completed){
list+="<li><input type=checkbox checked disabled>"+data[i].title+"</li>";}
else{
list+="<li><input type=checkbox>"+data[i].title+"</li>";}
}
$("#d").append(list+"</ul>");
$('input[type="checkbox"]').change(function(){
if(this.checked)
{
count++;
}
else{
count--;
}
selected(count);
})
}
})
function selected(count)
{
var promise= new Promise(function(resolve,rejected){
if(count==5)
{
resolve();
}
})
promise.then(function(){
alert("Congrats, 5 Tasks have been Successfully Completed");
})
}
})