import { useState } from "react"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { MiPrimerComponente } from "./components/MiPrimerComponente/MiPrimerComponente"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import { FormComponent } from "./components/FormComponent/FormComponent";
import { AppProduct } from "./components/AppProduct/AppProduct";


export const App = () => {


  return (
    <div style={{display:'flex',flexDirection:'column',gap:'2vh'}}>
    {/* <MiPrimerComponente text={'Texto desde propiedades'}
    color='red' 
    fontSize={5} 
    />
    <ComponentCounter />
    <ComponentUseEffect /> */}
    {/* <FormComponent /> */}
    <AppProduct />
    </div>
    
  );
}
