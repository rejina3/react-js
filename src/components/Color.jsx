export const Color=({data})=>{
    const{id, color, value}=data;
    return (
        <>
        <h1>color:{color}</h1>
        <h1>value:{value}</h1>
        <h3>The cicrle of this color:</h3>
        <div  style=
        {{borderRadius:"50%", 
            backgroundColor:color,
            height:"200px",
             width:"200px",  

        }}></div>

        </>

    );
}