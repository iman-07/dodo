
interface IDataPizza {
    name: string,
    desc: string,
    img: string,
    price: number,
}

const dataPizza: IDataPizza[]  = [
    {
        name: 'Peperoni',
        desc: 'Креветки, ананасы, соус сладкий чили, сладкий перец, моцарелла, соус альфредо',
        img: 'https://media.dodostatic.net/image/r:292x292/11EF33DC750FF17794FB1ACA35F22A6E.avif',
        price: '555',
    },
    {
        name: '4 Cheese',
        desc: 'Моцарелла, смесь сыров чеддер и пармезан, соус альфредо',
        img: 'https://media.dodostatic.net/image/r:292x292/11EE7D600BC7B9F1B6888AF021E5C198.avif',
        price: '695',
    },
]

const PizzaContent = () => {
  return (
    <div style={{
        display: 'flex',
        gap: '20px'
    }}>
        {dataPizza.map(p => {
            return (
                <div style={{ width: 250 }} key={p.name}>
                    <img width={'100%'} src={p.img} alt="" />
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <div style={{
                        display: 'flex', 
                        justifyContent: 'space-between',
                    }}>
                        <p>от {p.price} сом</p>
                        <button style={{
                            border: 'none',
                            
                        }}>Выбрать</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default PizzaContent