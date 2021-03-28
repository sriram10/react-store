import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router";
import './index.css';

class Footer extends Component {
  render() {
    return (
      <div class="container">
      <div class="row">
    	<div class="col-md-12">
    	    <footer class="footer">				
		      <div class="container">
			<div class="row">
				<div class="col-md-3 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						About us
					</div>	
					<p class="white-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
					</p>
				</div>
				<div class="col-md-3 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						Latest themes
					</div>	
					<div class="footer-links">
						<link to="#">
							Appointment
						</link >
						<link to="#">
							Health center
						</link >
						<link to="#">
							Quality
						</link >
						<link to="#">
							Wallstreet
						</link >
					</div>
				</div>
				<div class="col-md-3 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						Quick Links
					</div>	
					<div class="footer-links">
						<link to="#">
							Blog
						</link >
						<link to="#">
							FAQ
						</link >
						<link to="#">
							Terms & conditions
						</link >
						<link to="#">
							Privacy policy
						</link >
					</div>
				</div>
				<div class="col-md-3 m-b-30">
					<div class="footer-title m-t-5 m-b-20 p-b-8">
						Support
					</div>	
					<div class="footer-links">
						<link to="#">
							Affiliate
						</link>
						<link to="#">
							Login
						</link>
						<link to="#">
							All theme package
						</link >
						<link to="#">
							Support forum
						</link >
					</div>

					<div class="footer-social-links m-t-30">
						<li>
							<link to="#">
								<i class="fa fa-facebook" aria-hidden="true"></i>
							</link >
							<link to="#">
								<i class="fa fa-twitter" aria-hidden="true"></i>
							</link >
							<link to="#">
								<i class="fa fa-linkedin" aria-hidden="true"></i>
							</link >
							<link to="#">
								<i class="fa fa-youtube" aria-hidden="true"></i>
							</link >
						</li>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<div class="footer-bottom">
		Copyright © 2021, All Rights Reserved
	</div>
    	</div>
	</div>
</div>
    );
  }
}

export default Footer;

