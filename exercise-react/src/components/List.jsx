export default function List(props){
    return(
        <h1 className={`${props.background} p-3 rounded-md font-bold`}>
            {props.todoItem}
        </h1>
    )
}