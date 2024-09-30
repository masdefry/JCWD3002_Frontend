export default function Layout({children}){
    return(
        <main className='flex'>
            <section id='left' className='bg-black h-[100vh] text-white p-5'>
                Sidebar
            </section>
            <section id='right'>
                {children}
            </section>
        </main>
    )
}