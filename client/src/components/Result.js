import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav, Tab, Col, Row } from 'react-bootstrap';
import '../cssFiles/result.css';
import avatar from '../images/img_avatar.png';
import avatar2 from '../images/img_avatar2.png';
import medal from '../images/medal-solid.svg';
import logo from '../images/logo.svg';

class Result extends Component {

    render() {
        return (
            <div>
                <div style={{ marginBottom: "1em" }}>
                    <div class="header" style={{ background: "black" }}>
                        <div class="pb-1 border-bottom ">
                            
                        <img src={logo} alt="logo" height="70px" width="70px" />
                        <div class="pull-right" style={{marginTop:"0.3em"}}>
                        <Link className="feed-home-nav" to="/" >
                            <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)" }}>Home</button>
                            
                            </Link><button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)" }}>Help</button>
                            <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)" }}>About Us</button>
                            <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)" }}>Login</button>
                            <Link className="feed-home-nav" to="/submit-experience" >
                            <button type="button float-right" class="btn btn-warning" style={{ margin: "0.5em" }}>Share your experience</button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <form class="search-form1" style={{ marginBottom: "2em" }} >
                    <div style={{ marginLeft: "3.5em", marginTop: "0.5em" }}>
                        <input type="text" value="surfing" name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>

                </form>
                <Col sm={9} style={{ marginLeft: "5em" }}>

                <div className="card question-card">
                        <div className="card-body question-card-body">
                            <div className="row pull-right">
                                <span className="pull-right clickable close-icon" data-effect="fadeOut" ><i class="fa fa-times"></i></span>
                            </div>
                            <div className="row">
                                <Col sm={2} style={{ marginLeft: "1em" }}>
                                    <div className="row">
                                        <img src={avatar2} alt="Avatar" class="avatar"></img>
                                    </div>
                                    <div className="row">
                                        <span>Kate</span>
                                    </div>
                                    <div className="row">
                                    <img src={medal} alt="medal" height="12px" width="12px" /><small style={{fontSize:"10px"}}>&nbsp; 10 Medals</small>
                                    </div>
                                </Col>
                                <Col sm={9}>
                                    <Link className="question-link" to={"/12567"}>
                                        <span className="card-title question-card  question-card-title">Not worth it</span>
                                    </Link>
                                    <div className="row card-desc" style={{ marginTop: "0.3em" }}>
                                        <p>"I had bad surfing experience as I hurt my foot."</p>
                                    </div>
                                    <div className="pull-right row">
                                        <span style={{background:"#ffc107"}} className="tag">Surfing</span>
                                        <span style={{background:"#ffc107"}} className="tag">Bad experience</span>
                                        <img src={medal} alt="medal" height="20px" width="20px" />
                                        <i class="fa fa-medal"></i><small>&nbsp;Thank Kate</small>
                                    </div>
                                    
                                </Col>
                            </div>
                        </div>
                    </div>


                <div className="card question-card">
                        <div className="card-body question-card-body">
                            <div className="row pull-right">
                                <span className="pull-right clickable close-icon" data-effect="fadeOut" ><i class="fa fa-times"></i></span>
                            </div>
                            <div className="row">
                                <Col sm={2} style={{ marginLeft: "1em" }}>
                                    <div className="row">
                                        <img src={avatar2} alt="Avatar" class="avatar"></img>
                                    </div>
                                    <div className="row">
                                        <span>Kate</span>
                                    </div>
                                    <div className="row">
                                    <img src={medal} alt="medal" height="12px" width="12px" /><small style={{fontSize:"10px"}}>&nbsp; 10 Medals</small>
                                    </div>
                                </Col>
                                <Col sm={9}>
                                    <Link className="question-link" to={"/12567"}>
                                        <span className="card-title question-card  question-card-title">Good Experience</span>
                                    </Link>
                                    <div className="row card-desc" style={{ marginTop: "0.3em" }}>
                                        <p>"I had wonderful surfing experience"</p>
                                    </div>
                                    <div className="pull-right row">
                                        <span style={{background:"#ffc107"}} className="tag">Surfing</span>
                                        <span style={{background:"#ffc107"}} className="tag">Good experience</span>
                                        <img src={medal} alt="medal" height="20px" width="20px" />
                                        <i class="fa fa-medal"></i><small>&nbsp;Thank Kate</small>
                                    </div>
                                    
                                </Col>
                            </div>
                        </div>
                    </div>

                    <div className="card question-card">
                        <div className="card-body question-card-body">
                            <div className="row pull-right">
                                <span className="pull-right clickable close-icon" data-effect="fadeOut" ><i class="fa fa-times"></i></span>
                            </div>
                            <div className="row">
                                <Col sm={2} style={{ marginLeft: "1em" }}>
                                    <div className="row">
                                        <img src={avatar} alt="Avatar" class="avatar"></img>
                                    </div>
                                    <div className="row">
                                        <span>Jason</span>
                                    </div>
                                    <div className="row">
                                    <img src={medal} alt="medal" height="12px" width="12px" /><small style={{fontSize:"10px"}}>&nbsp; 30 Medals</small>
                                    </div>
                                </Col>
                                <Col sm={9}>
                                    <Link className="question-link" to={"/12567"}>
                                        <span className="card-title question-card  question-card-title">This is my surfing experience</span>
                                    </Link>
                                    <div className="row card-desc" style={{ marginTop: "0.3em" }}>
                                        <p>"After many years of thinking about taking up surfing, a few weeks ago, I finally decided to take my very first surf class.You see, I’m from Mexico. And yeah, I do know that Mexico is a great surfing destination. So why have I never surfed before? To start, I live way too far from the sea (at least 7 hrs by car) and my chances of frequenting the beach weren’t all that many. I have tried bodyboarding in the past (catching waves while laying on belly on the board, not that difficult and very fun), but every time I visited a great place to learn to surf for the first time, such as Puerto Escondido or something similar, I would be a bit scared. Long story short, I finally took action and surfed for the first time in Newquay, UK. It was an interesting experience, to say the least."</p>
                                    </div>
                                    <div className="pull-right row">
                                        <span style={{background:"#ffc107"}} className="tag">Surfing</span>
                                        <span style={{background:"#ffc107"}} className="tag">Mexico</span>
                                        <span style={{background:"#ffc107"}} className="tag">Good experience</span>
                                        <img src={medal} alt="medal" height="20px" width="20px" />
                                        <i class="fa fa-medal"></i><small>&nbsp;Thank Jason</small>
                                    </div>
                                    
                                </Col>
                            </div>
                        </div>
                    </div>

                    <div className="card question-card">
                        <div className="card-body question-card-body">
                            <div className="row pull-right">
                                <span className="pull-right clickable close-icon" data-effect="fadeOut" ><i class="fa fa-times"></i></span>
                            </div>
                            <div className="row">
                                <Col sm={2} style={{ marginLeft: "1em" }}>
                                    <div className="row">
                                        <img src={avatar2} alt="Avatar" class="avatar"></img>
                                    </div>
                                    <div className="row">
                                        <span>Amanda</span>
                                    </div>
                                    <div className="row">
                                    <img src={medal} alt="medal" height="12px" width="12px" /><small style={{fontSize:"10px"}}>&nbsp; 28 Medals</small>
                                    </div>
                                </Col>
                                <Col sm={9}>
                                    <Link className="question-link" to={"/12567"}>
                                        <span className="card-title question-card  question-card-title">A rocking first experience</span>
                                    </Link>
                                    <div className="row card-desc" style={{ marginTop: "0.3em" }}>
                                        <p>"Shockingly to me, this was a much harder thing then I believed it would be. Paddling your surfboard was something I have never heard of before. But once I paddled it out I was told to get down on my knees before getting up. Then, I was told a phrase of three words I have not heard since November of 2015 when I was playing my senior season of high school football, "Get down low". That was in a referral to get my position to stand up and ride a wave. However, on the times I did get up on the water, I just bent down and got into a movement of a run block. My hands were close together in a bent stance. My surf instructor asked me if I was a football player. Which I told him I was"<a href="/">. . .more</a></p>
                                    </div>
                                    <div className="pull-right row">
                                        <span style={{background:"#ffc107"}} className="tag">Surfing</span><span style={{background:"#ffc107"}} className="tag">Good experience</span>
                                        <img src={medal} alt="medal" height="20px" width="20px" />
                                        <i class="fa fa-medal"></i><small>&nbsp;Thank Amanda</small>
                                    </div>
                                    
                                </Col>
                            </div>
                        </div>
                    </div>

                    <div className="card question-card">
                        <div className="card-body question-card-body">
                            <div className="row pull-right">
                                <span className="pull-right clickable close-icon" data-effect="fadeOut" ><i class="fa fa-times"></i></span>
                            </div>
                            <div className="row">
                                <Col sm={2} style={{ marginLeft: "1em" }}>
                                    <div className="row">
                                        <img src={avatar} alt="Avatar" class="avatar"></img>
                                    </div>
                                    <div className="row">
                                        <span>Justin</span>
                                    </div>
                                    <div className="row">
                                    <img src={medal} alt="medal" height="12px" width="12px" /><small style={{fontSize:"10px"}}>&nbsp; 13 Medals</small>
                                    </div>
                                </Col>
                                <Col sm={9}>
                                    <Link className="question-link" to={"/12567"}>
                                        <span className="card-title question-card  question-card-title">Must Try!</span>
                                    </Link>
                                    <div className="row card-desc" style={{ marginTop: "0.3em" }}>
                                        <p>"I have never surfed before, and after just moving to San Diego I knew I had to take some lessons! I booked the 3 surfing lesson package from Pacific Surf School, which was extremely easy to book. If you are local, I HIGHLY recommend booking the 5 lesson package; I wish I would have! Each lesson was progressive, and I learned more as we went on. I surfed with coach Erik, and highly recommend him! His teaching style was very adaptive and he made sure to help correct form mistakes I made as I was surfing, and was very encouraging even though I had a hard time popping up. Hands down, one of the best experiences you can have in San Diego!! Book through them and you won't be disappointed!"</p>
                                    </div>
                                    <div className="pull-right row">
                                        <span style={{background:"#ffc107"}} className="tag">Surfing</span>
                                        <span style={{background:"#ffc107"}} className="tag">San Diego</span>
                                        <span style={{background:"#ffc107"}} className="tag">Good experience</span>
                                        <img src={medal} alt="medal" height="20px" width="20px" />
                                        <i class="fa fa-medal"></i><small>&nbsp;Thank Justin</small>
                                    </div>
                                    
                                </Col>
                            </div>
                        </div>
                    </div>


                </Col>
            </div>
        )
    }

}

export default Result;