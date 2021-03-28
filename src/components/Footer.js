import React from 'react';
// import { Table } from 'react-bootstrap';
import '../Footer.css'

const list1 = ["About Us", "Delivery Information","Privacy Policy","Terms & Conditions"];
const list2 = ["Contact Us", "Returns", "Site Map"];
const list3 = ["Brands", "Gift Certificates","Affiliate","Specials"];
const list4 = ["My Account", "order History","WishList","Newsletter"];
const list5 = ["Powered By OpenCart","Your Story"];

class Footer extends React.Component{
render() {
    return (

<div class="container footer-main">
<div class="row">
<div class="col-sm-3">
<h5>Information</h5>
<ul class="list-unstyled">
<li><a href="#">{list1[0]}</a></li>
<li><a href="#">{list1[1]}</a></li>
<li><a href="#">{list1[2]}</a></li>
<li><a href="#">{list1[3]}</a></li>
</ul>
</div>
<div class="col-sm-3">
<h5>Customer Service</h5>
<ul class="list-unstyled">
<li><a href="#">{list2[0]}</a></li>
<li><a href="#">{list2[1]}</a></li>
<li><a href="#">{list2[2]}</a></li>
</ul>
</div>
<div class="col-sm-3">
<h5>Extras</h5>
<ul class="list-unstyled">
<li><a href="#">{list3[0]}</a></li>
<li><a href="#">{list3[1]}</a></li>
<li><a href="#">{list3[2]}</a></li>
<li><a href="#">{list3[3]}</a></li>
</ul>
</div>
<div class="col-sm-3">
<h5>My Account</h5>
<ul class="list-unstyled">
<li><a href="#">{list4[0]}</a></li>
<li><a href="#">{list4[1]}</a></li>
<li><a href="#">{list4[2]}</a></li>
<li><a href="#">{list4[3]}</a></li>
</ul>
</div>
<div class="col-sm-3">
<ul class="list-unstyled">
<li><a href="#">{list5[0]}</a></li>
<li><a href="#">{list5[1]}</a></li>
</ul>
</div>
</div>
</div>
);
}
}
export default Footer;