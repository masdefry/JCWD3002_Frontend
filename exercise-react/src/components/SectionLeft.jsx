import List from "./List"

export default function SectionLeft({dataTodos}){
    return (
        <section className='border border-gray-300 rounded-md p-3'>
        <h1 className='font-bold text-3xl'>
          Upcoming Todo
        </h1>
        <div className='border border-gray-300 p-3 rounded-md flex flex-col gap-3'>
          {
            dataTodos.map((item, index) => {
              return(
                <List todoItem={item.name} background='bg-yellow-500' />
              )
            })
          }
        </div>
      </section>
    )
}