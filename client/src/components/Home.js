import React, { Component } from 'react';
import '../cssFiles/home.css';
import img from '../images/background1.jpg';
import surf from '../images/surf.jpg'
import yogurt from '../images/yogurt.jpg';
import roadtrip from '../images/roadtrip.jpg';

class Home extends Component {

    render() {
        return (
            <div>
                <div style={{ backgroundImage: `url(${img})`, height:"60vh"}}>
                <div class="header">
                <div class="pb-1 border-bottom text-right">  
                <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)"}}>Categories</button> 
                <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)"}}>Help</button> 
                <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)"}}>About Us</button>
                <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)"}}>Login</button> 
                <button type="button float-right" class="btn btn-warning"  style={{margin:"0.5em"}}>Share your experience</button>                                                                  
                </div>
                </div>
                
                    <h1 style={{color: "white", marginLeft:"2em", marginTop:"2em", marginBottom:"0.5em"}}> Make your first experience count!  </h1>
                    <p style={{color:"white", marginLeft:"5em"}}>Search for first time experiences.</p>
                    <form class="search-form" >
                        <div style={{marginLeft:"4.5em"}}>
                         <input type="text" placeholder="Search.." name="search"/>
                         <button type="submit"><i class="fa fa-search"></i></button>
                        </div>
                         
                    </form>

                </div>
                <div>
                    
                    <div class="row" style={{backgroundColor:"#efefef"}}>
                        <div className="col-7">
                        <h1 style={{marginLeft:"2em", marginTop:"1em", marginBottom:"0.5em"}}>First time experiences don't have to be scary. </h1>
                           <p style={{marginLeft:"5em",}}>Surfing in Hawaii? Your local yogurt shop? Cross country road trip? We got you covered. Learn about what you’re interested in from people who know first-hand.</p>
                        </div>
                        <div className="col-5" style={{marginTop:"2em", marginLeft:"0px", marginBottom:"2em"}}>
                            <div className="row">
                            <div className="col">
                            <img src={surf} alt="surf" height="200px" width="170px"></img>
                            </div>
                            <div className="col">
                                <div className="row">
                                <img src={yogurt} alt="surf" height="100px" width="170px"></img>
                                </div>
                                <div className="row"  >
                                <img src={roadtrip} alt="surf" height="100px" width="170px"></img>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='row' style={{ backgroundColor:"black"}}>
                    <div>
                        <h2 style={{marginLeft:"2em", marginTop:"1em", marginBottom:"0.5em", color:"white", fontFamily: "serif"}}>Not sure what to try? Here's what's trending... </h2>
                        <div className='rowC' style={{ display: "flex", flexDirection: "row"}}>                       <div className="card card-custom mx-5 mb-5"  style={{ boxShadow: "2px 2px 2px #888888"}}>
                                <div className="color-div" style={{ padding: "4rem", background: "wheat" }}>
                                </div>
                                <div className="card-body" >
                                <button type="button" class="btn btn-link" style={{ fontSize: "18px", color: "rgb(216, 174, 47)"}}>Food</button> 
                                </div>
                                </div>

                                <div className="card card-custom mx-5 mb-5"  style={{ boxShadow: "2px 2px 2px #888888"}}>
                                <div className="color-div" style={{ padding: "4rem", background: "wheat" }}>
                                </div>
                                <div className="card-body" >
                                <button type="button" class="btn btn-link" style={{ fontSize: "18px", color: "rgb(216, 174, 47)"}}>Travel</button> 
                                </div>
                                </div>

                                <div className="card card-custom mx-5 mb-5"  style={{ boxShadow: "2px 2px 2px #888888"}}>
                                <div className="color-div" style={{ padding: "4rem", background: "wheat" }}>
                                </div>
                                <div className="card-body" >
                                <button type="button" class="btn btn-link" style={{ fontSize: "18px", color: "rgb(216, 174, 47)"}}>Adventure</button> 
                                </div>
                                </div>

                                
                                </div>

                                
                            
                       </div>
                        </div>
                    
                </div>
                
            </div>
        )
    }

}

export default Home;