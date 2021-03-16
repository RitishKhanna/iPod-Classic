import React from 'react';
import "../css/KnowMore.css"

// Renders themes menu
class KnowMore extends React.Component {
    constructor(){
        super();
        this.state={
            divOpen:false,
        }
    }

    openDiv=()=>{
        if(this.state.divOpen===true)
            this.setState({divOpen:false})
        else
            this.setState({divOpen:true})
    }
    render() {
        const {divOpen} = this.state;
        let cssProp;
        if(divOpen===false){
            cssProp ={top:"-542px"};
        }
        else{
            cssProp ={top:"0px"};
        }
        return (
            <div style={cssProp} className="information-container">
                <div className="info-div">
                    <h3>Controls</h3>
                    <p>1. To unlock screen you have to press center button and to lock screen you have to press menu button in main menu.</p>
                    <p>2. To play and pause music in any menu you need to press play/pause button on bottom. </p>
                    <p>3. Short pressing on forward/reverse will take you to next/previous track (ONLY WHILE PLAYING) </p>
                    <p>4. Long pressing on forward/reverse will seek the song in forward/reverse (ONLY WHILE PLAYING)</p>
                    <p>5. To navigate between a menu items you need to rotate on track wheel</p>
                    <p>6. To go to next menu or go inside a menu press center button and to go to previous menu press menu button</p>
                    <p>7. Songs do play, Please checkout settings menu</p>
                    <p>Github-Link : <a href="https://github.com/RitishKhanna/iPod-Classic">iPod</a> 
                    </p>
                    <p>Hosting-Link : <a href="http://RitishKhanna.github.io/iPod-Classic">iPod-Hosted</a> 
                    </p>
                    <p>App Developed by : <a href="https://github.com/RitishKhanna">Ritish Khanna</a></p>
                    <p>credits : Apple, Flaticon</p>
                </div>
                <button id="info-btn" onClick={this.openDiv}>Know More</button>
            </div>
        )
    }

}


export default KnowMore;
