import React,{Fragment} from 'react';



const Clima = ({resultado}) => {

    //Extraer valores 

    const {name , main} = resultado;

    if (!name) return null;
    return(
      <div className="card-panel while col s12">
          <div className="black-text">
              <h2>El clima de {name} es :</h2>
              <p className="temperatura">
                  {parseFloat(main.temp-273.15).toFixed(2)}
              </p> 

              <p >Temperatura maxima:
                  {parseFloat(main.temp_max-273.15).toFixed(2)}
              </p> 

              <p >Temperatura minima:
                  {parseFloat(main.temp_min-273.15).toFixed(2)}
              </p> 

          </div>

      </div>
    );

}


export default Clima;