export default function ({setoffset,offset,cantPages}){
    const botones = Array.from({ length: cantPages }, (_, index) => (
        <button className="btn btn-primary" onClick={(e) =>setoffset(e.target.value)} value={index + 1}>{index + 1}</button>
      ));

    return(
        <div className="buttons mt-4">
        <button className="btn btn-primary" onClick={() =>{offset == 1 ? console.log("hola") : setoffset(Number(offset) - 1)}}> anterior </button>
            {botones}
            <button className="btn btn-primary" onClick={() =>{offset == cantPages ? console.log(offset) : setoffset(Number(offset) + 1)}}>siguiente</button>
        </div>
    )
}