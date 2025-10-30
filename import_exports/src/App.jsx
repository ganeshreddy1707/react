import React from "react";
import {MessagesComponent,func} from "./components/Messages"
import {Mediafiles} from "./components/Media"

export const name ="Ganesh"
const App = () =>{
    return <>
    <p>App components</p>
    <MessagesComponent/>
    <Mediafiles/>
    
    </>
}

export default App

export class Helloworld extends React.Component{
    render(){
        return <div>
            {func()}

            <h2>Hello world</h2>
        </div>
    }
}
