import Square from './Square'
import React from 'react'

export default function Squares(props) {

    const [squares, setSquares] = React.useState([])

    var limit = 10

    React.useEffect(() => {
        setSquares(() => {
            const newSquares = []
            for (let i = 0; i < limit; i++) {
                newSquares.push({
                    id: i,
                    innerHTML: 'Click Me',
                    style: {
                        backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
                        zIndex: '',
                        left: '40vw',
                        top: '35vh'
                    }
                })
            }
            return newSquares
        })
    }, [limit])

    function handleClick(id) {
        props.setToggle(id)
        setSquares(prevSquarePosition => {
            const newSquares = []
            for (let i = 0; i < prevSquarePosition.length; i++) {
                const currentSquare = prevSquarePosition[i]
                if (currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        innerHTML: currentSquare.innerHTML === 'Click Me' ? 'Move Me' : currentSquare.innerHTML === 'Move Me' ? 'Thanks!' : 'Move Me',
                        style: {
                            ...currentSquare.style,
                            zIndex: props.count
                        }
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
    }

    function setPosition(e) {
        if (props.toggle) {
            setSquares(prevSquarePosition => {
                const newSquares = []
                for (let i = 0; i < prevSquarePosition.length; i++) {
                    const currentSquare = prevSquarePosition[i]
                    if (currentSquare.id === props.squareID) {
                        const updatedSquare = {
                            ...currentSquare,
                            style: {
                                ...currentSquare.style,
                                left: `${e.clientX - 90}px`,
                                top: `${e.clientY - 70}px`
                            }
                        }
                        newSquares.push(updatedSquare)
                    } else {
                        newSquares.push(currentSquare)
                    }
                }
                return newSquares
            })
        }
    }

    const elementSquares = squares.map((item) => {
        const myStyle = {
            backgroundColor: squares[item.id].style.backgroundColor,
            zIndex: squares[item.id].style.zIndex,
            left: squares[item.id].style.left,
            top: squares[item.id].style.top
        }
        return (
            <Square
                key={item.id}
                id={item.id}
                innerHTML={squares[item.id].innerHTML}
                onClick={handleClick}
                onMouseMove={setPosition}
                style={myStyle}
            />
        )
    })

    return (
        <div id="base">
            {elementSquares}
        </div>
    )
}