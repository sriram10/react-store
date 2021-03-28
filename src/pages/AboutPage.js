import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class AboutPage extends  React.Component{
    render(){
        return(
            <>
          
           <Container>
           <h1>About Us</h1>
              <Row>
                <p>
                All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.
                </p>
              </Row>
              <Row>
              <h4>About The Team</h4>
                    <p>Meet our team of psecialized marketers and business developers which will help you research new products and launch them in new emerging markets
                    </p>
                    <Col>
                    <img src="./team-member-1.svg" id="img"/>
                    <div id="name">
                    <h5>Lacy Whitelong </h5>
                    <span>Business Developer</span>
                    <div><img src="./facebook.png" alt="" width="30px" height="30px"/>
                    <img src="./twitter.png" alt="" width="28px" height="28px"/></div>
                    </div>
                    </Col>
                    <Col>
                        <img src="./team-member-2.svg" id="img"/>
                        <div id="name">
                            <h5>Lacy Whitelong </h5>
                            <span>Business Developer</span>
                            <div ><img src="./facebook.png" alt="" width="30px" height="30px"/>
                            <img src="./twitter.png" alt="" width="28px" height="28px"/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <img src="./team-member-3.svg" id="img"/>
                    <div id="name">
                        <h5>Lacy Whitelong </h5>
                        <span>Business Developer</span>
                        <div><img src="./facebook.png" alt="" width="30px" height="30px"/>
                        <img src="./twitter.png" alt="" width="28px" height="28px"/>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <img src="./team-member-4.svg" id="img"/>
                    <div id="name">
                        <h5>Lacy Whitelong </h5>
                        <span>Business Developer</span>
                        <div><img src="./facebook.png" alt="" width="30px" height="30px"/>
                        <img src="./twitter.png" alt="" width="28px" height="28px"/>
                        </div>
                    </div>
                    </Col>
              </Row>
              <Row>
                <ul class="list">
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                <li>text 1</li>
                </ul>
              </Row>
              <Row>
                <p>
                We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
                </p>
              </Row>
              <Row>
                <p>
                We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
                </p>
              </Row>
              <Row>
                <p>
                We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions.
                </p>
              </Row>
           </Container>
           </>
        )
    }
}
export default AboutPage;