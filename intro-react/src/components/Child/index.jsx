function Child(props){
    console.log(props)
    return(
        <>
            <h3>
                Child Component
            </h3>
            <h5>
                {props.greeting}
            </h5>
        </>
    )
}

export default Child