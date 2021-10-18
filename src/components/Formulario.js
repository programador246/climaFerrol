import React,{Fragment,useState} from 'react';



const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {

    //State del formulario
   

    const [error,guardarError] = useState(false);


    //extraer variables

    const {ciudad,pais} = busqueda;


    //funcion qu coloca el valor en el state

    const handleChange = e => {
        //actualizo el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
//Al tocar el boton

const handleSubmit =e =>{
    e.preventDefault();


    //validacion
    if(ciudad.trim() == "" || pais.trim() == ""){
        guardarError(true);
        return; 
    }

    guardarError(false);
    guardarConsultar(true);
}

    return(
     <form 
             onSubmit={handleSubmit}>

         {error ? <p className=" red darker-4 error">Todos los campos son obligatorios</p> : null}

         <div className="input-field col s12">
             <input
                   type="text"
                   name="ciudad"
                   id="ciudad"
                   value={ciudad}
                   onChange={handleChange}>
             </input>
             <label htmlFor="ciudad">Ciudad:</label>
         </div>

         <div className="input-field col s12">
             <select 
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}>
                        <option value="">Seleccione un pais</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
             </select>
             <label htmlFor="pais">Pais:</label>
         </div>


         <div className="input-field col s12">
               <input 
                      type="submit"
                      value="Buscar clima"
                      className="waves-effect waves-light btn-large btn-block yellow accent-4 ">
               </input>
         </div>
     </form>
    );

}


export default Formulario;