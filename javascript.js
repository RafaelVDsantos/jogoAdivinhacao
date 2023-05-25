numAleatorio = Math.floor(Math.random() * 100) + 1;

var pontos = 100

var tentativas = 0;

function novoJogo (){
    numAleatorio = Math.floor(Math.random() * 100) + 1;

    console.log(numAleatorio)

}

function chutar() {

    num = document.getElementById("escolha").value;

    

    if(num == numAleatorio){

        labelResult = document.getElementById("result");
        labelResult.innerHTML = 'Parabém você acertou!!  :('

        pontos = pontos - tentativas 

        labelResultadoo = document.getElementById("pontos");
         labelResultadoo.innerHTML = pontos;
    }
    else{

        if(num > numAleatorio){

            labelResult = document.getElementById("result");
        labelResult.innerHTML = 'Chute errdo ;)' +  '\n' + 'Dica: Tente um número menor';

            tentativs++
            
        }
        else{

            labelResult = document.getElementById("result");
             labelResult.innerHTML = 'Chute errdo ;)' +  '\n' + 'Dica: Tente um número maior';

             tentativs++
        }

        
    }

     document.getElementById('escolha').value = "";

   

    


}


    
