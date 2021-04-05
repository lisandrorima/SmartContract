import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";
const { AccountData, ContractData, ContractForm } = newContextComponents;


function printProperties(drizzle, drizzleState) {
  let a = <ContractData
    drizzle={drizzle}
    drizzleState={drizzleState}
    contract="Rental"
    method="apartmentCount"
    toUtf8
  />
  console.log(a.type.propTypes.contract.length)
  let items = []
  let index=1;

  
  while (index<=a.type.propTypes.contract.length) {
    items.push(<div key={index}> <ContractData
      drizzle={drizzle}
      drizzleState={drizzleState}
      contract="Rental"
      method="Apartments"
      methodArgs={[[index]]}
    /></div>)
    index+=1;
    }
    
  return (

    items


  )
}






export default ({ drizzle, drizzleState }) => {


  // destructure drizzle and drizzleState from props
  return (

    <div className="App">
      <div>
        <img src={logo} alt="drizzle-logo" />
        <h1>Alquileres</h1>
        <p>
          Empiece a alquilar utilizando contratos inteligentes.
        </p>
      </div>

      <div className="section">
        <h2>Cuenta vinculada</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="section">
        <h2>SimpleStorage</h2>
        <p>
          This shows a simple ContractData component with no arguments, along
          with a form to set its value.
        </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="SimpleStorage"
            method="storedData"
          />
        </p>
        <ContractForm drizzle={drizzle} contract="SimpleStorage" method="set" />
      </div>

      <div className="section">

        <strong>Ingrese departamento para alquilar: </strong>
        <ContractForm drizzle={drizzle} contract="Rental" method="addAppartment" />

        <h2>Propiedades en alquiler</h2>

        <ContractForm drizzle={drizzle} contract="Rental" method="getApt" />

        

        {printProperties(drizzle, drizzleState)}

      </div>
    </div>
  );
};
