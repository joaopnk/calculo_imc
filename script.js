function id(aID){
    return document.getElementById(aID);
}
//Função para permitir digitar apenas numeros!
function numerosPermitidos() {
    var digitos_permitidos = "0123456789.";
    var tecla_pressionada = event.key;
    if (digitos_permitidos.indexOf(tecla_pressionada) == -1) {
        return false;
    } else {
        return true;
    }
}

function calculoFinal(){
    if((id("txtPeso").value == "") || (id("txtAltura").value == "")){
        alert("Não é possivel continuar com algum campo vazio!")
    }else{
        peso    = parseFloat(id("txtPeso")  .value);
        altura  = parseFloat(id("txtAltura").value);
        IMC     = parseFloat(peso / (Math.pow(altura,2)));
        /*
        - Magreza, quando o resultado é menor que 18,5 kg/m2;
        - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
        - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
        - Obesidade, quando o resultado é maior que 30 kg/m2.
        */
        if(IMC < 18.5){
            id("lblResultado").innerHTML = "Você esta na faixa 'Magreza' com " +
                                            IMC.toFixed(2) + " kg/m2";
        }else{
            if(IMC <= 24.9){
            id("lblResultado").innerHTML = "Você esta na faixa 'Normal' com " +
                                            IMC.toFixed(2) + " kg/m2";
            }else{
                if(IMC <= 30){
                    id("lblResultado").innerHTML = "Você esta na faixa 'Sobrepeso' com " +
                                                    IMC.toFixed(2) + " kg/m2";
                }else{
                    id("lblResultado").innerHTML = "Você esta na faixa 'Obesidade' com " +
                                                     IMC.toFixed(2) + " kg/m2"; 
                }
            }
        }
        /* Limpando após executar */
        id("txtPeso").value = "";
        id("txtAltura").value = "";
        id("txtPeso").focus();
        peso    = null;
        altura  = null;
        IMC     = null;
    }
   

}