export default function todoLayout({children}){
    return(
        <div>
            <h2 className="flex justify-center items-center text-4xl" >Todos</h2>
            <div>{children}</div>
        </div>
    )
}