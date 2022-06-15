let lista = window.document.querySelector('#lista')
let tabela = window.document.querySelector('#tabela')
let campoBusca = document.querySelector('#campo')
let btnFiltrar = document.querySelector('#filtrar')



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
         // CRIANDO ELEMENTOS HTML
            const itemTabela = window.document.createElement('tr')
            const dados = window.document.createElement('td')
            
            itemTabela.appendChild(dados)
            const dados1 = window.document.createElement('td')
            itemTabela.appendChild(dados1)
            const dados2 = window.document.createElement('td')
            itemTabela.appendChild(dados2)
            const dados3 = document.createElement('td')
            itemTabela.appendChild(dados3)
            
            


            dados.textContent = `${elementos.name}`
            dados1.textContent = `${elementos.mass}`
            dados2.textContent = `${elementos.eye_color}`
            dados3.textContent = elementos.height

            tabela.appendChild(itemTabela)
        }
      //  console.log(dados.results)
    } catch (error) {
        console.log('O seguinte erro ocorreu: ' + error)
    }   
    
    

}

async function filtrarDados(idPersonagem){  
   const url = `https://swapi.dev/api/people/${idPersonagem}/?format=json`
   try {

     let resultado = await fetch(url)
     const dados = await resultado.json()
     console.log(resultado)
      
      

      const item = document.createElement('tr')
      const nome = document.createElement('td')
      const nome1 = document.createElement('td')
      const nome2 = document.createElement('td')
      const nome3 = document.createElement('td')
      
      item.appendChild(nome)
      item.appendChild(nome1)
      item.appendChild(nome2)
      item.appendChild(nome3)

      nome.textContent = dados.name
      nome1.textContent = dados.mass
      nome2.textContent = dados.eye_color
      nome3.textContent = dados.height
      
      while(resultado.status != 200){
          btnFiltrar.setAttribute('disable', 'disable')
          btnFiltrar.textContent = 'Carregando...'
      }
      btnFiltrar.removeAttribute('disable')
      btnFiltrar.textContent = 'Filtrar'

      // SE HOUVER ALGUMA LINHA SERÁ REMOVIDA
      if(tabela.children.length > 0){
        tabela.removeChild(tabela.firstElementChild)
      }
      tabela.appendChild(item)

   } catch (error) {
     console.log('[ERROR] o erro é o seguinte: ', error)
   }
}


btnFiltrar.addEventListener('click', (evento)=>{
  evento.preventDefault()
  
  if(campoBusca.value != '' && campoBusca.value >= 1 && campoBusca.value <= 82){
      filtrarDados(campoBusca.value)
      
      

  }else{
      alert('Verifique os dados e tente novamente!')
  }
})

//carregarDados()