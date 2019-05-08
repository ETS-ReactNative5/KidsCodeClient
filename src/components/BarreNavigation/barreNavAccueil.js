
import React, { Component } from 'react';
import {Button} from "react-bootstrap";
import API from "../../utils/API";
import '../../assets/css/index.css';
import logo from '../../assets/images/animationFin.png';
export default class NavBarAccueil extends Component {

    constructor(props) {
        super(props);
        this.disconnect.bind(this);
    }

    disconnect = event => {
        API.logout();
        window.location = "/";
    }

    connect = event => {

        window.location = "/";
    }
    jeu = event => {

        window.location = "/dashboard";
    }

    inscription= event => {

        window.location = "/signup";
    }
    buttonConnect = test => {
        if (test == true){
            return (        <nav className="navbar navbar-default">
                <div className= "container-fluid" >
                    <div className= "navbar-header" > <a className = "navbar-brand" href = "#" >  <img className="logo"  src={logo}/></a> </div>
                    <ul className = "nav navbar-nav" >
                        <li className = "active" > <a href = "#" > Home </a></li >

                        <li> < a href = "#" > Statistiques </a></li >
                        <li> <a href = "#" > Profil </a></li>
                        <li> <a onClick={this.jeu} href = "#" > Jeu </a></li>
                        <li className="buttonTop"> <a href = "#" >   </a>  </li>
                        <li className="buttonTop">         <Button className="buttonTop1"
                            onClick={this.disconnect}
                            block
                            bsSize="large"
                            type="submit"
                        >
                            Se déconnecter
                        </Button>
                        </li>
                    </ul>
                </div>
            </nav>)}

            else {
                return(
                    <nav className="navbar navbar-default">
                        <div className= "container-fluid" >
                            <div className= "navbar-header" ><a className = "navbar-brand" href = "#" >  <img className="logo" src={logo}/> </a> </div>
                            <ul className = "nav navbar-nav" >
                                <li className = "active" > <a href = "#" > Home </a></li >

                                <li> < a href = "#" > Statistiques </a></li >
                                <li> <a href = "#" > Profil </a></li>
                                <li> <a onClick={this.jeu} href = "#" > Jeu </a></li>
                                <li className="buttonTop"> <a href = "#" >   </a>  </li>


                                <li className="buttonTop">          <Button className="buttonTop1"
                                    onClick={this.connect}
                                    block
                                    bsSize="large"
                                    type="submit"
                                >
                                    connecter
                                </Button>
                                </li>
                                <li className="buttonTop">          <Button className="buttonTop1"
                                    onClick={this.inscription}
                                    block
                                    bsSize="large"
                                    type="submit"
                                >
                                    s'inscrire
                                </Button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                )
            }
        }

    render() {
let x ;
        if(API.isAuth()){
            x= this.buttonConnect(true)
        }else{
            x= this.buttonConnect(false)
        }
        return (
           x
    );
    }
}



