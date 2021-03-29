import React from 'react'
import { Container} from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";

class ProductCategoryList extends React.Component{

    render(){
        return(
            <Container>
            <h2>SHOP BY CATEGORY</h2>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper><Link to="/products" >
                        <img src="./mobiles.jpg" width="50%"  style={{ margin: '0 auto',display: 'flex' }}/>
                        <h2>Mobiles</h2></Link>
                        </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper><Link to="./products">
                        <img src="./tshirt.jpg" width="55%" style={{ margin: '0 auto',display: 'flex' }} />
                        <h2>Tshirts</h2></Link>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper><Link to="./products">
                        <img src="./laptop.jpg" width="100%" height="70%"/>
                        <h2>Laptops</h2></Link>
                    </Paper>
                </Grid>
            </Grid>
            </Container>
        )
    }
}
export default ProductCategoryList;