// INSS

// ABAIXO DE 1.751,81 A PORCENTAGEM DESCONTADA DO SALÁRIO BRUTO É 8%

// ENTRE 2.919,72 E 1.751,82 A PORCENTAGEM DESCONTADA DO SALÁRIO BRUTO É 9%

// ACIMA DE 2.919,73 A PORCENTAGEM DESCONTADA DO SALÁRIO BRUTO É 11%

// O TETO É DE 642,34, O MÁXIMO SALÁRIO COM UM CENTAVO ANTES DO TETO É DE 5.839,45 REAIS

// IRRF

// ABAIXO DE 1.693,72 A PORCENTAGEM RETIRADA DO SALÁRIO BRUTO É DE 8%

// ENTRE 1.693,72 E 2.822,90 A PORCENTAGEM RETIRADA DO SALÁRIO BRUTO É DE 9%

hr_tb = 0;
vl_hr = 0;

function calcular() {

  $(document).ready(function (){
      $("#VH").unmask();
      $('#VH').mask('00.00');
       vl_hr = document.getElementById("VH").value;
      $('#VH').mask('R$:00.00');
       hr_tb = document.getElementById("HT").value;
    })

  if (hr_tb > 220){
    hr_tb = 0;
    vl_hr = 0;
    alert("A CLT só permite 220 horas de jornada mensal.")
    window.location.reload()﻿

  }

  var salario_bruto = (hr_tb * vl_hr).toFixed(2);

  document.getElementById("SB").value = "R$:" +salario_bruto;

  if (salario_bruto <= 1751.81){
    var salario_1 = (salario_bruto * 8 / 100).toFixed(2);
    document.getElementById("INP").value = "8%"
  }else{
    if (salario_bruto >= 1751.82 && salario_bruto <= 2919.72){
      var salario_1 = (salario_bruto * 9 / 100).toFixed(2);
      document.getElementById("INP").value = "9%"
    }else{
      if (salario_bruto >= 2919.73){
        var salario_1 = (salario_bruto * 11 / 100).toFixed(2);
        document.getElementById("INP").value = "11%"
        if (salario_1 >= 642.34){
          var salario_1 = 642.34;
        }
      }
    }
  }

  document.getElementById("IN").value = "R$:" +salario_1;

  var dependentes = document.getElementById("ND").value;
  var dependentes_value = (dependentes * 189.59).toFixed(2);

  var salario_bruto_2 = (salario_bruto - salario_1 - dependentes_value).toFixed(2);
  if (salario_bruto_2 <= 0){
    salario_bruto_2 = 0;
  }

  if (salario_bruto_2 >= 4664.69){
    var salario_bruto_2 = (salario_bruto_2 - 4664.68).toFixed(2);
  	var fr = (salario_bruto_2 * 27.5 / 100 + 205.57 + 138.66 + 69.20).toFixed(2) ;
    document.getElementById("IRP").value = "27,5%"
  }else{
  	if (salario_bruto_2 >= 3751.06 && salario_bruto_2 <= 4664.68){
      var salario_bruto_2 = (salario_bruto_2 - 3751.05).toFixed(2);
  			var fr = (salario_bruto_2 * 22.5 / 100 + 138.66 + 69.20).toFixed(2) ;
        document.getElementById("IRP").value = "22,5%"
  	}else{
  		if (salario_bruto_2 >= 2826.66 && salario_bruto_2 <= 3751.05){
        var salario_bruto_2 = (salario_bruto_2 - 2826.66).toFixed(2);
  			var fr = (salario_bruto_2 * 15 / 100 + 69.20).toFixed(2);
        document.getElementById("IRP").value = "15%"
  		}else{
  			if (salario_bruto_2 >= 1903.99 && salario_bruto_2 <= 2826.65){
          var salario_bruto_2 = (salario_bruto_2 - 1903.99).toFixed(2);
  				var fr = (salario_bruto_2 * 7.5 / 100).toFixed(2);
          document.getElementById("IRP").value = "7,5%"
  			}else{
  				if (salario_bruto_2 <= 1903.98){
  					var fr = 0;
            document.getElementById("IRP").value = "0%"
          }
        }
      }
    }
  }
  document.getElementById("IR").value = "R$:" +fr;
  var salario_liquido = (salario_bruto - salario_1 - fr).toFixed(2);
  document.getElementById("SL").value = "R$:"+salario_liquido;
}
