

// ------- Component -------
const ComponentClassDynamic = () => {
  const redTitle = true;
  // const redTitle = false;

  return (
    <>
        <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
    </>
  )
}

export default ComponentClassDynamic;