import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';


export default function App(){
  return (
    <>
     {/* barStyle deixa o statusBar da aplicação na cor branca em todas as telas*/}
     <StatusBar barStyle="light-content" />
    <Home/>
    </>
  )
}