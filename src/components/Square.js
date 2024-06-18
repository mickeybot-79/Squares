export default function Square(props) {
    return (
        <button
            id={props.id}
            className='buttons'
            onClick={() => props.onClick(props.id)}
            onMouseMove={props.onMouseMove}
            style={props.style}
        >{props.innerHTML}
        </button>
    )
}