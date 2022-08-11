// INSTAGRAM
var perfil = 0;
var operacao = 'add';
var cont = 0;
var index = 0;
var cont_mem = 0;
var nome = 'Null';
var add_result = 'Null';
var tag = 0;

// Funções
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); //Função de timer
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Início do Programa
document.getElementsByClassName("Y8-fY ")[1].children[0].click()
await sleep(2000)
if (operacao == 'add'){
	for (let index2 = 0; index2 < 10 ; index2++){
		element = document.getElementsByClassName("isgrP");
		element[0].scrollTop = element[0].scrollTop + element[0].offsetHeight;
		await sleep(1000)
	}
	perfil = document.getElementsByClassName("PZuss")[0].children.length;
	console.log('Quantidade total de profiles : '+String(perfil));
	while (true) {
		
		add_result = document.getElementsByClassName("PZuss")[0].children[index].children[0].children[1].innerText;
		if (add_result =="Seguir"){
			document.getElementsByClassName("sqdOP  L3NKy   y3zKF     ")[0].click();
			await sleep(2000)
			add_result = document.getElementsByClassName("PZuss")[0].children[index].children[0].children[1].innerText;
			if (add_result != "Seguir"){
			cont =cont + 1;
			index = index +1;
			cont_mem = 0;
			tag =0;
			dominio =document.getElementsByClassName("PZuss")[0].children[index].children[0].children[0].children[1].children[0].innerText;
			nome = String(cont)+' de '+String(perfil)+' '+dominio; 
			console.log(nome);
			}
			else{
				cont_mem = cont_mem + 1;
				dominio =document.getElementsByClassName("PZuss")[0].children[index].children[0].children[0].children[1].children[0].innerText;
				nome = dominio + ' : Tentando adicionar ' +String(cont_mem)+'ª vez';  
				console.log(nome);
			}
		}
		else{
			dominio =document.getElementsByClassName("PZuss")[0].children[index].children[0].children[0].children[1].children[0].innerText;
			nome = dominio + ' : '+add_result; 
			console.log(nome);
			index = index +1;
		}
		
		if (cont == 15  || cont_mem == 5){
			cont_mem = 0;
			if (tag == 0){
				console.log('Pausa de 5 min para descanso');
				await sleep(300000);
				tag = 1;
			}
			if (tag == 1){
				console.log('Pausa de 15 min para descanso');
				await sleep(900000);
				tag = 2;
			}
			if (tag == 2){
				console.log('Pausa de 30 min para descanso');
				await sleep(1800000);
				tag = 3;
			}
			if (tag == 3){
				console.log('Pausa de 60 min para descanso');
				await sleep(3600000);
				tag = 4;
			}
			if (tag == 4){
				alert('Pausa de 1 dia para revitalizar as energias \nTente novamente amanhã');
				break;
			}
		}

		
		if (index == perfil){
			for (let index2 = 0; index2 < 10 ; index2++){
			element = document.getElementsByClassName("isgrP");
			element[0].scrollTop = element[0].scrollTop + element[0].offsetHeight;
			await sleep(1000)
			}
			perfil = document.getElementsByClassName("PZuss")[0].children.length;
			console.log('Quantidade total de profiles : '+String(perfil));
		}
		var num = getRandomIntInclusive(2000,4000);
		await sleep(num);
	}
}
