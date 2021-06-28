let nomes = "arara";

function verificaPalindrome (nomes){

    for(index = 0; index < nomes.length/2; index ++){
        if (nomes[index] !== nomes[nomes.length - 1 - index]){
            return false;
        }

        else{
            return true;
        }
    }
}

console.log(verificaPalindrome(nomes));