



// ------- Component/Evento -------
function Events() {

    // Função handleClick
    const handleMyEvent = (e) => {
        console.log(e);

        console.log("ativou o evento!");
    };

    // ------- Função handleRender -------
    const handleSomething = (x) => {
      if(x){
        return <h1>Renderizou isso!</h1>
      } else {
        return <h1>Também posso renderizou isso!</h1>
      }
    };

  return (
    <>
      <h3>Página Events</h3>

      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      
      <hr />

      <div>
        <button onClick={() => console.log("Clicou")}>Botão 2</button>
      </div>

      <hr />

      {/*Não se aplica dessa forma!*/}
      <div>
        <button 
          onClick={() => {
            console.log("Clicou, isso não deveria acontecer!");
        }}>
          Botão 3
        </button>
      </div>

      <div>
        {/* {handleSomething(true)} */}
        {handleSomething(false)}
      </div>

    </>
  )
}

export default Events;
