

export const BtnDisplay=(props)=>{
    const {onClick,onMouseEnter}=props
    return(
  <>
  <button onClick={onClick}>Click me</button>
  <button onMouseEnter={onMouseEnter}>Hover</button>
  </>
    );
  };