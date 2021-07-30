import React from "react";
import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import List from "./components/List";
import { DataProvider } from "./components/DataProvider"

function App() {
  return (
    <DataProvider>
      <div className='App'>
        <h1>To do List</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  )
}

export default App;
