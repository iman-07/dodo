

import { FC, useState } from 'react'
import { ITabs } from './App'
import PizzaContent from './PizzaContent'

interface IHeaderProps {
    tabs:ITabs []
}

// any, unknown, void

// type TypeText = {
//     handleClick: (text: string) => string
// }

const Header: FC<IHeaderProps> = (props) => {
    const [content, setContent] = useState<string>("Pizza")
    const handleClick = (text: string) => {
        setContent(text)
    }

    return (
        <div className='container'>
            {props.tabs.map(el => {
                return <a onClick={
                    (e: React.MouseEvent<HTMLAnchorElement>) => {
                    handleClick(el.name)
                }} href="#">{el.name}</a>
            })}

            <br />
            <br />
            <div>
                {content == "Pizza" && <PizzaContent/>}
                {content == "Drinks" && <h2>Drinks content</h2>}
                {content == "Deserts" && <h2>Desert Contents</h2>}
            </div>
        </div>
    )
}

export default Header