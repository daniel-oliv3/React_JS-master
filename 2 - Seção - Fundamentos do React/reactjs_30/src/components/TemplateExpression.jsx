

// ------- Arrow Function -------
const TemplateExpression = () => {
    
    const nome = "Daniel Oliveira";

    const data = {
        age: 26,
        job: "Programador",
    }
    
    return (    
        <>
            <h3>TemplateExpression</h3>
            
            <h1>Olá {nome}, Seja bem-vindo!</h1>

            <p>Anos: {data.age}, Trabalho Atual: {data.job}</p>

            <p>{4 + 4}</p>
            <p>{console.log('JSX React')}</p>
        </>
    );
};

export default TemplateExpression;



