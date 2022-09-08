import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CharactersProvider from './context/CharacterContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </React.StrictMode>
)
