import React from 'react'
import {SPRITE_SIZE} from "../../config/constants";
import './styles.css'
import {connect} from 'react-redux'
import store from '../../config/store'
import Voiture from '../Voiture'
import logo from "../../assets/images/animationFin.png";
import ReactTestUtils from 'react-dom/test-utils'; // ES6

import reinit from "../../assets/images/fleche-rond-png-3.png";
import start from "../../assets/images/1rightarrow.png";

function getTileSprite(type) {
    switch (type) {
        case 0 :
            return 'terre'
        case 5 :
            return 'rock'
        case 6 :
            return 'tree'
        case 7 :
            return 'route'
        case 1 :
            return 'briqueFin'

    }
}
function MapTile(props) {

    return <div className={`tile ${getTileSprite(props.tile)}`}
                style={{
                height : SPRITE_SIZE,
                width  : SPRITE_SIZE,
                }}
    />

}

function MapRow(props) {

    return <div className="row">
        {
            props.tiles.map(tile => <MapTile tile={tile}/>)
        }
    </div>

}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}


/*function dispatchEventt() {

        let evt = new KeyboardEvent('keydown', {'keyCode': 37, 'which': 37})
        window.dispatchEvent(evt);



}*/


function Map(props) {


    return(
        <div
        style={{
            position : 'relative',
            top:'0px',
            left:'0px',
            width : '1200px',
            height: '560px',
            margin: '10px auto'
        }}>
            {
            props.tiles.map(row => <MapRow tiles={row} />)


            }
            <button  type="button"  style={{ width:'85px',height:'85px', background:'#fafafa', boxShadow:'2px 2px 8px #aaa', font:'bold 13px Arial',borderRadius:'50%', color:'#555',position : 'absolute', top:'0px',left:'1049px', margin: '20px auto'}} > <img id="start" style={{width : '50px'}} src={start} alt="start" />             </button>
            <button type="button"  style={{ width:'85px',height:'85px', background:'#fafafa', boxShadow:'2px 2px 8px #aaa', font:'bold 13px Arial',borderRadius:'50%', color:'#555',position : 'absolute', top:'0px',left:'122px', margin: '20px auto'}} ><img id="Reinit"  style={{width : '50px'}} src={reinit} alt="reinitialisation" /></button>

            <img   className="animationFin"  src={logo} alt="Animation fin" />

        </div>

    )
}
function mapStateToProps(state) {

    return {
        tiles:state.map.tiles,
    }
}
export default connect(mapStateToProps)(Map)