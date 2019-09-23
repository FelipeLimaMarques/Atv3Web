var botaoAdd = document.querySelector("#botao-adicionar");

var data = new Date();

botaoAdd.addEventListener("click", function()
{
    event.preventDefault();

    var form = document.querySelector("#form-adiciona")

    adicionaPessoa(form);

    
    
    console.log(data.getFullYear());

});

function criaPessoa (form)
{
    const pessoa = 
    {
        nome: document.createElement("td"),
        idade: document.createElement("td"),
        fcm: document.createElement("td"),
        fca: document.createElement("td")
    }

    pessoa.nome.textContent = form.nome.value + " " + form.sobrenome.value;

    pessoa.idade.textContent = data.getFullYear() - form.nascimento.value.toString().slice(0, 4);

    pessoa.fcm.textContent = 220 - pessoa.idade.textContent;

    var fcaMin = pessoa.fcm.textContent * (50/100);
    var fcaMax = pessoa.fcm.textContent * (85/100);

    pessoa.fca.textContent = fcaMin.toFixed(2) + "~" + fcaMax.toFixed(2);

    return pessoa;
}

function adicionaPessoa (form)
{
    var pessoa = criaPessoa(form);

    var tableBody = document.querySelector("#table-body");

    var tableRow = document.createElement("tr");

    tableBody.appendChild(tableRow);
    tableRow.appendChild(pessoa.nome);
    tableRow.appendChild(pessoa.idade);
    tableRow.appendChild(pessoa.fcm);
    tableRow.appendChild(pessoa.fca);
}