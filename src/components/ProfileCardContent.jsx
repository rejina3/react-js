export const ProfileCardContent=(props)=>{
    return (
        <>
        <h1>Name:{props.name}</h1>
        <p>Age:{props.age}</p>
        <p>{props.greetings}</p>
        <p>{props.children}</p>
        </>
    )
}