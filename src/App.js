import React from "react";
import Router from "./Componentes/Router"
import GlobalState from "./Componentes/GlobalState"
import Header from "./Componentes/Header";

export default function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}
