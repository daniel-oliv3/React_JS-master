



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


        <button onClick={handleMyEvent}>Clique aqui</button>

    </>
  )
}

export default Events;
