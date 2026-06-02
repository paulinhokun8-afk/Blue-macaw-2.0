function adicionarCarrinho(nome, preco, imagem){
    
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push({ 
        nome: nome,
        preco: preco,
        imagem: imagem
    });

    localStorage.setItem("carrinho",JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");
    
}