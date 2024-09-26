// State
// - Tempat Penyimpanan Data Sementara. Pengganti Variable
// - Ketika Terjadi Perubahan Data di Dalam State, Component Akan di Render Ulang
// import React from 'react';

// class HomeClass extends React.Component{

//     state = {
//         number: 10, 
//         todo: ['Futsal', 'Makan', 'Minum']
//     }

//     ChangeStateNumber = () => {
//         this.setState((previous) => ({
//             number: previous.number + 1
//         }))

//         // this.setState({number: this.state.number + 1})
//     }

//     ChangeStateTodo = () => {
//         const currentTodo = [...this.state.todo]
//         currentTodo.push('Tidur')
//         this.setState({todo: currentTodo})
//     }

//     render(){
//         return(
//             <main className='p-5'>
//                 <section>
//                     <h1 className='text-3xl font-bold'>
//                         Class Component
//                     </h1>
//                     <h1 className='text-xl'>
//                         {this.state.number}
//                     </h1>
//                     <button className='btn bg-blue-500 text-white p-1 rounded-md' onClick={this.ChangeStateNumber}>
//                         Increment
//                     </button>
//                 </section>
//                 <section>
//                     <h1 className='text-3xl font-bold'>
//                         List Todo 
//                     </h1>
//                     <ol>
//                         {
//                             this.state.todo.map((item, index) => {
//                                 return(
//                                     <li key={index}>- {item}</li>
//                                 )
//                             })
//                         }
//                     </ol>
//                     <button className='btn bg-blue-500 text-white p-1 rounded-md' onClick={this.ChangeStateTodo}>
//                         Add Todo
//                     </button>
//                 </section>
//             </main>
//         )
//     }
// }

// export default HomeClass;



// Lifecycle Method
// 1. Render
// 2. ComponentDidMount     : Akan Dijalankan Setelah Proses Render Selesai. Ex. Request Data
// 3. ComponentDidUpdate    : Akan Dijalankan Ketika Terjadi Perubahan Data di Dalam State
// 4. ComponentWillUnmount  : Akan Dijalankan Ketika Akan Terjadi Perpindahan Page. Ex. Confirmation Box
import React from 'react';
import { Link } from 'react-router-dom';

class HomeClass extends React.Component{
    componentDidMount(){
        console.log('ComponentDidMount >>>')
    }

    state = {
        number: 0
    }
    ChangeStateNumber = () => {
        this.setState((previous) => ({
            number: previous.number + 1
        }))
    }
    componentDidUpdate(){
        console.log('ComponentDidUpdate >>>')
    }

    componentWillUnmount(){
        alert('Are You Sure Want to Discard Profile Change?')
        console.log('ComponentWillUnmount')
    }

    render(){
        console.log('Render')
        return(
            <main className='p-5'>
                <h1 className='text-xl'>
                    {this.state.number}
                </h1>
                <button className='btn bg-blue-500 text-white p-1 rounded-md' onClick={this.ChangeStateNumber}>
                    Increment
                </button>

                <Link to='/home-function'>
                    <h1>
                        Go to Function Page
                    </h1>
                </Link>
            </main>
        )
    }
}

export default HomeClass;