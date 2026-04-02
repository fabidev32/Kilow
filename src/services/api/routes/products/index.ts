
//Cadastrar produto


export async function registerItem(data: any) {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.log('Erro ao cadastrar produto:', erro);
        throw erro;
    }
}


//Listar produtos


