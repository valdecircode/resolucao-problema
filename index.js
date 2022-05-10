//Comparando data do Evento
const dtevento = new Date("04/05/2022");
const dtatual = new Date("04/05/2022");
console.log ('Verificando data do Evento:');

if (dtevento == dtatual) {
    console.log ('Cadastro Não Permitido - Data Invalidaa');
}
else if (dtatual > dtevento) {
    console.log ('Evento   Permitido');
}
else {
    console.log('Cadastro Não Permitido - Data Invalida');
}

// Comparando Idade do Participante
console.log ('Verificando Idade do participante:');
const idpart = 17

if (idpart >= 18) {
    console.log ('Permitir o Cadastro idade Maior ou Igual a 18 ');
    }
else {
    console.log ('Cadastro não permitido Participante de menor');
}

//Lista de Eventos por Categoria

const ListaEvento = ["EventoA" , "EventoB" , "EventoC"];
console.log ("digite o evento desejado;" + " " +ListaEvento[2]);

//Lista de Participantes por Categoria
const ListaParticipantes= ["ParticipanteA" , "ParticipanteB" , "ParticipanteC"];
console.log ("digite Lista de Participates;" + " " +ListaParticipantes[2]);

//Lista de Palestrantes por Categoria
const ListaPalestrante= ["PalestranteA" , "PalestranteB" , "PalestranteC"];
console.log ("digite Lista de Palestrante;" + " " +ListaPalestrante[2]);
  
//Lista de Participantes
 var Participantes= ["Joana" , "Maria"];
 for (var indice =0; indice <Participantes.length; indice++) {
     var mensagem = "Participantes, " + Participantes[indice] + "!"; console.log(mensagem)
    }
//Lista de Palestrantes
    var Palestrantes= ["Carlos" , "Miguel"];
    for (var indice =0; indice <Palestrantes.length; indice++) {
        var mensagem = "Palestrantes, " + Palestrantes[indice] + "!"; console.log(mensagem)
       }
// Permitido   Cadastrar até 100 Pessoas
       console.log ('Permitido Cadastrar até 100 Participantes:');
       const Participante = 100
       
       if (Participante <= 100) {
           console.log ('Permitir o Cadastro de Participantes  ');
           }
       else  { 
           console.log ('Cadastro não permitido por ter excedido o limite');
           }
        
    