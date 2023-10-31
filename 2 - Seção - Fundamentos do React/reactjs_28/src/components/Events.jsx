



// ------- Component/Evento -------
function Events() {

    // ------- Função handle -------
    const handleMyEvent = (e) => {
        console.log(e);

        console.log("ativou o evento!");
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

    </>
  )
}

export default Events;
