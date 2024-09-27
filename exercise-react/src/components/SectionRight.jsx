import List from "./List"

export default function SectionRight(){
    return(
        <section className='border border-gray-300 rounded-md p-3'>
        <h1 className='font-bold text-3xl'>
          Todo Complete
        </h1>
        <div className='border border-gray-300 p-3 rounded-md flex flex-col gap-3'>
          <List background='bg-green-500' />
          <List background='bg-green-500' />
          <List background='bg-green-500' />
        </div>
      </section>
    )
}