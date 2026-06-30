const axios = require("axios");

const participanteTexto = participantes.join("\n• ");
const comandosTexto = comandos.join("\n• ");

await axios.post(process.env.DISCORD_WEBHOOK, {
    embeds: 
    [
        {
        title: "📋 Nova Operação Registrada",
        color: 3447003,
        fields: [
            {
                name: "👤 QRA",
                value: qra,
                inline: true
            },
            {
                name: "📅 Data",
                value: data_operacao,
                inline: true
            },
            {
                name: "🎯 QRU",
                value: qru,
                inline: false
            },
            {
                name: "🏴 Facção",
                value: faccao,
                inline: true
            },
            {
                name: "🏆 Resultado",
                value: resultado,
                inline: true
            },
            {
                name: "👥 Participantes",
                value: participantesTexto || "-",
                inline: false
            },
            {
                name: "⭐ Comando",
                value: comandosTexto || "-",
                inline: false
            },
            {
                name: "📝 Observação",
                value: observacao || "Nenhuma",
                inline: false
            }
        ],
        timestamp: new Date()
        }
    ]
});

const participantes = document.querySelectorAll(
    '.checkbox-group input[type="checkbox"]'
);

const comandoGroup = document.getElementById("comandoGroup");
const comandoCheckboxes = document.getElementById("comandoCheckboxes");

function atualizarComando(){

    comandoCheckboxes.innerHTML = "";

    let selecionados = 0;

    participantes.forEach(participante=>{

        if(participante.checked){

            selecionados++;

            const label = document.createElement("label");

            label.innerHTML = `
                <input
                    type="checkbox"
                    class="comando"
                    value="${participante.value}">
                ${participante.value}
            `;

            comandoCheckboxes.appendChild(label);

        }

    });

    if(selecionados>0){
        comandoGroup.style.display="block";
    }else{
        comandoGroup.style.display="none";
    }

}

participantes.forEach(participante=>{
    participante.addEventListener("change", atualizarComando);
});

atualizarComando();