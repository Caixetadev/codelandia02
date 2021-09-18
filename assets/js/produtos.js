export const produtos = [
  {
    img: 'assets/img/1.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    preco: 'R$ 1.863,53'
  },
  {
    img: 'assets/img/2.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    preco: 'R$ 2.272,61',
  },
  {
    img: 'assets/img/3.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    preco: 'R$ 772,61',
  },
  {
    img: 'assets/img/4.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    preco: 'R$ 2.044,89',
  },
  {
    img: 'assets/img/5.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    preco: 'R$ 1.223,90',
  },
  {
    img: 'assets/img/6.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    preco: 'R$ 16.999,00',
  },
  {
    img: 'assets/img/7.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    preco: 'R$ 16.999,00',
  },
  {
    img: 'assets/img/8.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    preco: 'R$ 16.999,00',
  }
]

export const listarProdutos = () => {
  produtos.forEach((item, index) => {
    document.querySelector('.containerMain').innerHTML += `
    
    <div class="card">
      <div class="image">
        <img src="${item.img}" height="150" width="250" alt="">
      </div>
    </div>
    `
    
  })
}