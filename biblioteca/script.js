async function carregarDados(){
    const url = 'https://swapi.dev/api/planets/?format=json'


    try {
        const resultado = await axios.get(url)
        console.log(resultado.data.results)
    } catch (error) {
        console.log(`O seguinte erro ocorreu: ${error}`)      
    }
}
carregarDados()