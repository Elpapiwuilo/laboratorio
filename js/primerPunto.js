

var name,money;
name=prompt("Introduzca su nombre");
money=prompt("Valor a depòsitar");

interes=0.02;
month=60;

var calculo=money*interes;
var elevado=calculo*month;
var result=parseInt(money)+parseInt(elevado);
document.write(name+"<br>");
document.write("El depòsito inicial es :"+money+"<br>")
document.write("El valor que tendra a 5 años es de: "+result);

