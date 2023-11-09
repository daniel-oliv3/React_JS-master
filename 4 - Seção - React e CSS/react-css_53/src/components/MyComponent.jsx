import './MyComponent.css';

// ------- MyComponent -------
const MyComponent = () => {
  return (
    <>
        <h1>CSS inline</h1>
        <p>This is a paragraph the component</p>
        <p className="my-comp-paragraph">Este também e do componente MyComponent</p>

        {/*CSS Inline*/}
        <p style={{color: "blue", padding: "25px", borderTop: "2px solid green"}}>Este elemento foi estilizaado de forma inline</p>
    </>
  )
}

export default MyComponent;