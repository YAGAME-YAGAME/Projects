import './Nav.css';

export const Nav = () => {
  return (
    <div className={"nv"}>From Nav</div>
  )
}
 
export const Head = () => {

  let name = true;
  return (
    <>
    <div className={name? "nv": "hid"}>From Nav/Head</div>
    </>
  )
}
