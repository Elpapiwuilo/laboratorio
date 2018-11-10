

var kilos= prompt("ingrese el numero de kilos que va a comprar");

var valor=4200;
var todo=kilos*valor;
var descuento=0.10;
var descuento2=0.15;
var descuento3=0.20;


if(kilos>=0 && kilos<=2){
   var sum =todo*descuento;
   var resultado=todo;


}else if(kilos>=2.01 && kilos<=5){
    var sum =todo*descuento;
   var resultado=parseInt(todo)-parseInt(sum);

}
else if(kilos>=5.01 && kilos<=10){
    var sum =todo*descuento2;
   var resultado=parseInt(todo)-parseInt(sum);

}
else if(kilos>=10.01){
    var sum =todo*descuento3;
   var resultado=parseInt(todo)-parseInt(sum);

}
document.write("el numero de kilos comprados valen :"+todo+"<br>");
document.write("Tiene un descuento del  "+sum+"<br>");
document.write("por lo tanto el  valora pagar es : "+ resultado +"<br>");