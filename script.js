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