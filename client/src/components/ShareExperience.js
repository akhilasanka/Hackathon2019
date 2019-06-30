import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../cssFiles/shareExperience.css';
import swal from 'sweetalert';
import logo from '../images/logo.svg';
class ShareExperience extends Component {

    showAlert = (e) => {
        e.preventDefault();
        swal('Thank you for sharing your experience!');
        }


    render() {
        return (
            <div style={{background: "#efefef", height:"100%"}}>

                <div style={{ marginBottom: "1em", background: "#efefef" }}>
                    <div class="header" style={{ background: "black" }}>
                        <div class="pb-1 border-bottom">
                        <img src={logo} alt="logo" height="70px" width="70px" />
                        <div class="pull-right" style={{marginTop:"0.3em"}}>
                        <Link className="feed-home-nav" to="/" >
                            <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)" }}>Home</button>
                            
                            </Link>
                            <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)" }}>Help</button>
                            <button type="button" class="btn btn-link" style={{ fontSize: "24px", color: "rgb(216, 174, 47)" }}>About Us</button>
                            
                            </div>
                            </div>
                    </div>
                    <div style={{ height: "100%", background: "#efefef"  }}>
                        <h1 style={{ marginLeft: "1.5em", marginTop: "1em", marginBottom: "0.5em" }}> Share your first time experience  </h1>
                        <form class="form-horizontal" action="/action_page.php" style={{marginLeft:"7.5em"}}>
                        <div class="form-group">
                                <label class="control-label col-sm-5" for="experience">*Title (Experience, Destination or Business):</label>
                                <div class="col-sm-10">
                                    <input type="text" class="form-control" id="title"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-5" for="experience">*What was your experience like?</label>
                                <div class="col-sm-10">
                                    <textarea rows="10" cols="50" class="form-control" id="experience" placeholder="Share your experience here...">
                                        </textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <div className="row" style={{marginLeft:"0.2em"}}>
                                <label class="control-label col-sm-2" for="experience">*Rate your experience:</label>
                                
                                <div>
                                    <div class="starRating">
                                    <span class="fa fa-star fa-4 checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>
                                    </div>
                                </div>
                                </div>
                            
                            </div>
                           
                            <div class="form-group">
                                <label class="control-label col-sm-5" for="experience">Attach image/video:</label>
                                <div class="col-sm-10">
                                <input type="file" name="pic" accept="image/*"/>
                                </div>
                            </div>

                            <div class="form-group">
                            <button type="submit" class="btn btn-warning" onClick={this.showAlert} style={{marginLeft:"1em", marginTop:"1em"}}>Done</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        )
    }

}

export default ShareExperience;