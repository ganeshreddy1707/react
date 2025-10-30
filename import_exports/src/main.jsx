import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App,{Helloworld} from "./App"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Helloworld/>
  </StrictMode>,
) 
