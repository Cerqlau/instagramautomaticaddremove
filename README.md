# instagramautomaticaddremove

Este é um codigo desenvolvido em JavaScript para automatizar a simples adição e remoção de pessoas através do console do browser

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

```
=> Browser compatível com console para inspeção e teste de elementos de página. Ex: Chrome, Firefox, Edge, Opera entre outros em sua versão atualizada;

```

### 🔧 Pré-configurações

Certifique-se que o execução do javascript está autorizada no browser a ser utilizado.

### ⚙️ Executando o programa

1- Abra o Browser e acesse o site do instagram

2- Inicie o inspetor de elementos ( O atalho "crt+shift+I"  funciona na maioria dos browsers)

3- Na aba "Console" configure para que seja exibida somente "infos"

4- Copie e cole o código abaixo. Caso a queira adicionar pessoas navegue até o perfil escolhido então somente acione o código 

Nota: Por vezes os sites modificam suas páginas havendo necessidade assim de que o usuário atualize os elementos que estão sendo manipulados

```
// INSTAGRAM
var perfil = 0;
var operacao = prompt('Escolha a operação:\n[1]-Adicionar\n[2]-Remover'); // 'add' para adicionar pessoas ou 'remove' para remover pessoas
var cont = 0;
var index = 0;
var index_check =0;
var cont_mem = 0;
var nome = 'Null';
var add_result = 'Null';
var tag = 0;

// Funçõees
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); //Função de timer
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Início do Script

if (operacao == '1'){
    var adicionar = prompt('Informe a quantidade');
    document.getElementsByClassName("Y8-fY")[1].children[0].click()
    await sleep(2000)
    for (let index2 = 0; index2 < 3 ; index2++){
        element = document.getElementsByClassName("isgrP");
        element[0].scrollTop = element[0].scrollTop + element[0].offsetHeight;
        var num = getRandomIntInclusive(2000,4000);
        await sleep(num)
    }
    perfil = document.getElementsByClassName("PZuss")[0].children.length;
    console.log('Quantidade total de profiles : '+String(perfil));
    while (true) {
        console.log('INDEX :'+index+', INDEX CHECK : '+index_check+', CONT : '+cont)
        try{
            add_result = document.getElementsByClassName("PZuss")[0].children[index].children[0].children[1].innerText;
        }catch (e){
            continue
        }
        if (add_result =="Seguir"){
            document.getElementsByClassName("sqdOP  L3NKy   y3zKF     ")[0].click();
            var num = getRandomIntInclusive(3000,5000);
            await sleep(num)
            add_result = document.getElementsByClassName("PZuss")[0].children[index].children[0].children[1].innerText;
            if (add_result != "Seguir"){
                dominio = 'Não foi possível verificar domínio'
                try{
                    dominio =document.getElementsByClassName("sqdOP  L3NKy    _8A5w5    ")[index].parentElement.parentNode.children[0].children[1].children[0].innerText;
                }catch(e){
                    continue
                }
                cont =cont + 1;
                cont_mem = 0;
                tag =0;
                index = index +1;
                index_check= index_check +1;
                nome = String(cont)+' de '+String(adicionar)+' '+dominio; 
                console.log(nome);
            }
            else{
                cont_mem = cont_mem + 1;
                index_check= index_check +1;
                dominio = 'Não foi possível verificar domínio'
                try{
                    dominio =document.getElementsByClassName("sqdOP  L3NKy    _8A5w5    ")[index].parentElement.parentNode.children[0].children[1].children[0].innerText;
                    
                }catch(e){
                    continue
                }
                nome = dominio + ' : Tentando adicionar ' +String(cont_mem)+'� vez';  
                console.log(nome);
            }
        }
        else{
            index = index +1;
            index_check= index_check +1;
            dominio = 'Não foi possível verificar domínio'
            try{
            dominio =document.getElementsByClassName("sqdOP  L3NKy    _8A5w5    ")[index].parentElement.parentNode.children[0].children[1].children[0].innerText;
            }catch(e){
                continue
            }
            nome = dominio + ' : '+add_result; 
            console.log(nome);
        }
 
        if (parseInt(adicionar) == cont){
            alert('Tarefa concluida com sucesso');
            break;
        }
        if (cont != 0 ){
            if (cont == 15 || cont_mem == 5) {
                cont_mem = 0;
                if (tag == 0 ){
                    console.log('Pausa de 5 min para descanso');
                    await sleep(300000);
                    tag = 1;
                }
                if (tag == 1 & index != index_check){
                    console.log('Pausa de 15 min para descanso');
                    await sleep(900000);
                    tag = 2;
                    index_check = index;
                }
                if (tag == 2 & index != index_check){
                    console.log('Pausa de 30 min para descanso');
                    await sleep(1800000);
                    tag = 3;
                    index_check = index;
                }
                if (tag == 3 & index != index_check){
                    console.log('Pausa de 60 min para descanso');
                    await sleep(3600000);
                    tag = 4;
                    index_check = index;
                }
                if (tag == 4 & index != index_check){
                    alert('Pausa de 1 dia para revitalizar as energias \nTente novamente amanh�');
                    break;
                }
            }
        }
        if (index >= (perfil-3)){
            for (let index2 = 0; index2 < 3 ; index2++){
            element = document.getElementsByClassName("isgrP");
            element[0].scrollTop = element[0].scrollTop + element[0].offsetHeight;
            var num = getRandomIntInclusive(2000,4000);
            await sleep(num)
            }
            var num = getRandomIntInclusive(2000,4000);
            await sleep(num)
            perfil = document.getElementsByClassName("PZuss")[0].children.length;
            console.log('Quantidade total de profiles : '+String(perfil));
        }
        
    }
} else if (operacao == '2'){

    var remove = prompt('Informe a quantidade');
    document.getElementsByClassName("Y8-fY")[2].children[0].click();
    await sleep(2000);
    while (true) {
        try{
            if ( (index % 5) == 0 ){
                    for (let index2 = 0; index2 < 2 ; index2++){
                    element = document.getElementsByClassName("isgrP");
                    element[0].scrollTop = element[0].scrollTop + element[0].offsetHeight;
                    var num = getRandomIntInclusive(2000,4000);
                    await sleep(num);
                    }
            }
            document.getElementsByClassName("sqdOP  L3NKy    _8A5w5    ")[1].click();
            var num1 = getRandomIntInclusive(2000,4000);
            await sleep(num1);
            dominio =document.getElementsByClassName("sqdOP  L3NKy    _8A5w5    ")[1].parentElement.parentNode.children[0].children[1].children[0].innerText;
            document.getElementsByClassName("aOOlW -Cab_   ")[0].click();
            var num2 = getRandomIntInclusive(2000,4000);
            await sleep(num2);
            console.log('Perfil : '+dominio+' removido');
            index = index +1;
            var num3 = getRandomIntInclusive(2000,4000);
            await sleep(num3);
            
            if ( index == parseInt(remove) ){
                console.log('Operação finalizada com sucesso');
                break;
            }
        }catch(e){
            console.log('Atenção erro encontrado: '+e)
            continue
        }
    }
}

```


## 📦 Desenvolvimento

Lauro Cerqueira
LinkdIn: https://www.linkedin.com/in/lauro-cerqueira-70473568/
Instagram : laurorcerqueira

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

## 🎁 Distribuição

* Conte a outras pessoas sobre este projeto 📢
* Convide alguém da equipe para uma cerveja 🍺 
* Obrigado publicamente 🤓.

