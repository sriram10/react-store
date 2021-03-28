import React from 'react'

export default function Footer() {
    const footer = 
       [
                {
                    id:1,
                    information:['Information','About US','Delivery Information','Privacy Policy','Terms & Conditions']
                },
                {
                    id:2,
                    information:['Customer Service','Contact Us','Returns','Site Map']
                },
                {
                    id:3,
                    information:['Extras','Brands','Gift Certificates','Affiliate','Specials']
                },
                {
                    id:4,
                    information:['My Account','my account','Order History','Wish List','News Letter']
                }
       ]
    
    return (
        
        <div className="footer">
            {
                footer.map((item) =>{
                    return(
                    <ul key={item.id} className="footer-links">
                        <li><b>{item.information[0]}</b></li><br></br>
                        <li>{item.information[1]}</li><br></br>
                        <li>{item.information[2]}</li><br></br>
                        <li>{item.information[3]}</li><br></br>
                        <li>{item.information[4]}</li>
                    </ul>
                )})
                    }
        </div>
        
    )
}