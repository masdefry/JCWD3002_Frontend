import { CiLocationOn } from "react-icons/ci";

export default function TodoList(props){
    return(
        <section style={{ border: '1px solid black', padding: '10px 100px' }}>
            <div style={{ color: 'gray' }}>{props.time}</div>
            <CiLocationOn /><span>{props.place}</span> 
            <h3>
                {props.activity}
            </h3>
        </section>
    )
}