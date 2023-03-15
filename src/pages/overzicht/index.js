import React, {useEffect} from 'react'
import '../../styles/css/keet.css';
import KeetContainer from '../index.js'


var client = new WebSocket('ws://localhost:8080');

const Overzicht = () => {


    useEffect(() =>  {
        client.onopen = () => {
            console.log('WebSocket client connected!');
        };
        client.onmessage = function (event) {
            try{          
                console.log("incoming order: " + event.data);
            }
            catch{

            }

        };
    });

    return(
        <KeetContainer>
            <div class="container" style={{marginTop: "10px"}}>
                <div>
                    Deelenemers:
                </div>
                <div>
                    Naam: aantal op
                </div>
                <div>
                    Totaal de avond: 10
                </div>
            </div>
        </KeetContainer>
    )
}

export default Overzicht;