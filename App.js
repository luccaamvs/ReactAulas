import React, { useState } from 'react';
import "./estilo.css";

export default function App() {

  const estiloParagrafo = {
    color: 'red',
    fontSize: '12px'
  }

  let [numero, setNumero] = useState(0);
  const [mostrarTela, setMostrarTela] = useState(true);

  const aumentarNumero = () => {
    setNumero(numero + 1);
  }
  const diminuirNumero = () => {
    setNumero(numero - 1);
  }
  const mudarTela = () => {
    setMostrarTela(!mostrarTela);
  }


  let [carrinho, setCarrinho] = useState([]);

  function enviarProduto(item) {
    setCarrinho(itemAntigo => [...itemAntigo, item]);
  }

  const produtos = [
    {
      nome: "Produto 1 ",
      imagem: "https://m.media-amazon.com/images/I/61i3l4yD0AL._AC_UF1000,1000_QL80_.jpg",
      preco: "$1,00"
    },
    {
      nome: "Produto 2 ",
      imagem: "https://m.media-amazon.com/images/I/51NPqkm3+sL._AC_UF894,1000_QL80_.jpg",
      preco: "$2,00"
    },
    {
      nome: "Produto 3 ",
      imagem: "https://raquetesusadas.com.br/image/cache/data/Produtos/bolas/wilson/bola-wilson-championship-1-600x600.jpg",
      preco: "$3,00"
    },
  ];

  return (
    <div className='all'>
      {/*
      <p style={estiloParagrafo}>Hola amigos del youtube! :D</p>
      <button onClick={aumentarNumero}>+</button>
      <button onClick={diminuirNumero}>-</button>
      <h2>{numero}</h2>
      */}
    
      <img className='cart' src="https://i.pinimg.com/1200x/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg" onClick={mudarTela}/>

      <h1 className='title'>Meu Carrinho:</h1>
      <h3 className='products'> {carrinho} </h3>

      {mostrarTela && 
        <div className='container'>
          {produtos.map(
            (produto, index) => (
              <div className='item'>
                <h2>{produto.nome}</h2>
                <img className='img-max' src={produto.imagem}/>
                <p>{produto.preco}</p>
                <button className='buttom' onClick={() => enviarProduto(produto.nome )}> Adicionar ao Carrinho </button>
              </div>
            )
          )}
        </div>
      }
    </div>
  );
}






