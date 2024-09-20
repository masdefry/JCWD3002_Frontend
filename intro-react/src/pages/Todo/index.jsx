const todos = [
    {
        activity: 'Ngoding', 
        time: '09:00', 
        place: 'Purwadhika Campus BSD'
    },
    {
        activity: 'Futsal', 
        time: '18:00', 
        place: 'Lapangan Futsal'
    },
    {
        activity: 'Futsal', 
        time: '18:00', 
        place: 'Lapangan Futsal'
    }
]

import TodoList from "../../components/TodoList";

export default function Todo(){
    return(
        <>
            {
                todos.map((item, index) => {
                    return(
                        <TodoList key={index} time={item.time} place={item.place} activity={item.activity} />
                    )
                })
            }
        </>
    )
}