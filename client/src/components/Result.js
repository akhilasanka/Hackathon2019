import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Nav, Tab, Col, Row } from 'react-bootstrap';
import '../cssFiles/result.css';
import avatar from '../images/img_avatar.png';
import avatar2 from '../images/img_avatar2.png';
import medal from '../images/medal-solid.svg';

class Result extends Component {

    render() {
        return (
            <div>
                <div style={{ marginBottom: "1em" }}>
                    <div class="header" style={{ background: "black" }}>
                        <div class="pb-1 border-bottom text-right">
                            <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)" }}>Categories</button>
                            <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)" }}>Help</button>
                            <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)" }}>About Us</button>
                            <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)" }}>Login</button>
                            <button type="button float-right" class="btn btn-warning" style={{ margin: "0.5em" }}>Share your experience</button>
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
                                        <img src={avatar} alt="Avatar" class="avatar"></img>
                                    </div>
                                    <div className="row">
                                        <span>Jason</span>
                                    </div>
                                    <div className="row">
                                    <img src={medal} alt="medal" height="15px" width="15px" />
                                    <i class="fa fa-medal"></i><small style={{fontSize:"10px"}}>&nbsp; 30 Medals</small>
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
                </Col>
            </div>
        )
    }

}

export default Result;