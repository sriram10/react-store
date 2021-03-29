import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from './Footer.module.css'

// classNames.footer

class Footer extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
    	<div className="col-md-12">
    	    <footer className={classNames.footer}>				
		      <div className="container">
			<div className="row">
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						About us
					</div>	
					<p className="white-text">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
					</p>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Latest themes
					</div>	
					<div className="footer-links">
						<Link to="#">
							Appointment
						</Link >
						<Link to="#">
							Health center
						</Link >
						<Link to="#">
							Quality
						</Link >
						<Link to="#">
							Wallstreet
						</Link >
					</div>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Quick Links
					</div>	
					<div className="footer-links">
						<Link to="#">
							Blog
						</Link >
						<Link to="/faq">
							FAQ
						</Link >
						<Link to="#">
							Terms & conditions
						</Link >
						<Link to="#">
							Privacy policy
						</Link >
					</div>
				</div>
				<div className="col-md-3 m-b-30">
					<div className="footer-title m-t-5 m-b-20 p-b-8">
						Support
					</div>	
					<div className="footer-links">
						<Link to="#">
							Affiliate
						</Link>
						<Link to="#">
							Login
						</Link>
						<Link to="#">
							All theme package
						</Link >
						<Link to="#">
							Support forum
						</Link >
					</div>

					<div className="footer-social-links m-t-30">
						<li>
							<Link to="#">
								<i className="fa fa-facebook" aria-hidden="true"></i>
							</Link >
							<Link to="#">
								<i className="fa fa-twitter" aria-hidden="true"></i>
							</Link >
							<Link to="#">
								<i className="fa fa-linkedin" aria-hidden="true"></i>
							</Link >
							<Link to="#">
								<i className="fa fa-youtube" aria-hidden="true"></i>
							</Link >
						</li>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<div className="footer-bottom">
		Copyright © 2021, All Rights Reserved
	</div>
    	</div>
	</div>
</div>
    );
  }
}

export default Footer;