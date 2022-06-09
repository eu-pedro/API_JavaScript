let lista = window.document.querySelector('#lista')
let tabela = window.document.querySelector('#tabela')




async function carregarDados(){
    const url = 'https://swapi.dev/api/people/?format=json'
    try {
        let resultado = await fetch(url)
        const dados = await resultado.json()

        for(elementos of dados.results){
          //  console.log(`Sou ${elementos.name} tenho ${elementos.height} de altura`)

          //Criando elementos HTML dinamicamente
          /*
            const itemLista = window.document.createElement('li')
            itemLista.classList.add('list-group-item')
            lista.appendChild(itemLista) //appendChild É para adicionar uma tag filha
            itemLista.textContent = `Olá, sou ${elementos.name}, possuo uma cor de cabelo ${elementos.hair_color}, e meu gênero é ${elementos.gender}`
          */
            const itemTabela = window.document.createElement('tr')
            const dados = window.document.createElement('td')
            
            itemTabela.appendChild(dados)
            const dados1 = window.document.createElement('td')
            itemTabela.appendChild(dados1)
            const dados2 = window.document.createElement('td')
            itemTabela.appendChild(dados2)
            
            


            dados.textContent = `${elementos.name}`
            dados1.textContent = `${elementos.mass}`
            dados2.textContent = `${elementos.eye_color}`

            tabela.appendChild(itemTabela)
        }
      //  console.log(dados.results)
    } catch (error) {
        console.log('O seguinte erro ocorreu: ' + error)
    }   
    
    

}

carregarDados()