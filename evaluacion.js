console.log(`Por favor introduzca el numero de una opcion:
             1.-Suma
             2.-Resta
             3.-Multiplicacion
             4.-Division
             5.-Raiz cuadrada
             6.-Formular general
             7.-Binomio cuadrado perfecto `);

var opcion = parseInt(prompt("Eliga una opcion:"));

switch (opcion) {
	case 1:
		var numero1 = parseInt(prompt("introduzca un numero:"));
		var numero2 = prompt("introduzca otro numero:");
		function imprimirsuma(){
			var suma = numero1 + parseInt(numero2);
			console.log(`${suma}`);	
		}
		imprimirsuma();
		break;
		case 2:
		var numero1= parseInt(prompt("introduzca un numero:"));
		var numero2= prompt("Introduzca otro numero:");
		function imprimirresta(){
			var resta = numero1 - parseInt(numero2);
			console.log(`${resta}`);			
		}
		imprimirresta();
		break;
		case 3:
		var numero1 = parseInt(prompt("Introduzca un numero:"));
		var numero2 = prompt ("Introduzca otro numero:");
		function imprimirmultiplicacion(){
			var multiplicacion = numero1 * parseInt(numero2);
			console.log(`${multiplicacion}`);
		}
		imprimirmultiplicacion();
		break;
		case 4:
		var numero1 = parseInt(prompt("Introduzca un numero:"));
		var numero2 = prompt ("Introduzca otro numero:");
		function imprimirdivision(){
			var division = numero1 / parseInt(numero2);
			console.log(`${division}`);
		}
		imprimirdivision();
		break;
		case 5:
		var numero1 = parseInt(prompt("Introduzca un numero:"));
		function imprimirraizcuadrada(){
			var raizcuadrada = Math.sqrt(numero1); 
			console.log(`${raizcuadrada}`);
		}
		imprimirraizcuadrada();
		break;
		case 6:
		var numero1 = parseInt(prompt("Introduzca el valor de a:"));
		var numero2 = prompt ("Introduzca el valor de b:");
		var numero3 = prompt ("Introduzca el valor de c:");
		function imprimirformulageneral(){
		var solu1 =((1*numero2) +(Math.sqrt((Math.pow(numero2,2) - (4*numero1*numero3)))))/(2*numero1);
		var solu2 =((-1*numero2) +(Math.sqrt((Math.pow(numero2,2) - (4*numero1*numero3)))))/(2*numero1);
		console.log(`${solu1}`);
		console.log(`${solu2}`);
	}
	imprimirformulageneral();
	break;
	case 7:
		var numero1 = parseInt(prompt("Introduzca un numero:"));
		var numero2 = prompt ("Introduzca otro numero:");
		function imprimirbinomiocuadradoperfecto(){
			var binomio = (numero1*numero1) + (2*numero1*numero2)+(numero2*numero2);
			console.log(`${binomio}`);
		}
		imprimirbinomiocuadradoperfecto();
		break;
	}