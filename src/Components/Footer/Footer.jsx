import React from 'react';
import './Footer.css'
import { Grid, Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import logo from '../assets/images/logo.jpg';

const Footer = () => {
  return (
    <div className='footer'>
      {/* Top Footer Section Elements */}
      <div className="full-width-container">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={logo} alt='logo' className="rounded-image" />
            <hr></hr>
            <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}><ContactPhoneIcon sx={{ color: 'orange' }} />HotLine</Typography>
            <p>Call us: 24/7: 01987077586</p>
            <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}><HomeIcon />Mirpur 001,Dhaka,Bangladesh</Typography>
            <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}><EmailIcon />demo@demo.com</Typography>

          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginTop: '50px' }}>
            <Typography variant='h4' sx={{ margin: '10px' }}>COMPANY</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>best sales</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>Prices drop</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>Contact us</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>About us</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginTop: '50px' }}>
            <Typography variant='h4' sx={{ margin: '10px' }}>ACCESSORIES</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>Affiliates</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>Site Map</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>Brand</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>Payment method</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} sx={{ marginTop: '50px' }}>
            <Typography variant='h4' sx={{ margin: '10px' }}>SERVICES</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>Free Shipping</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>Order Status</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>Gift Cards</Typography>
            <Typography variant='h6' sx={{ margin: '10px' }}>International</Typography>
          </Grid>
        </Grid>
      </div>

      {/* Bottom Footer Section Elements */}
      <Grid container spacing={4} className='bottom-part'>
          <Grid item xs={12} sm={6} className='left-portion'>
            <p className="copyright">
              Coyright 2024- All rights reserved, Powered by Prestashop
            </p>
          </Grid>

          <Grid item xs={12} sm={6} className='right-portion'>
            <button className='app-store'>
              <AppleIcon />
              <div className='txt'>
                <p>Available on the</p>
                <h4>APP STORE</h4>
              </div>
            </button>

            <button className='play-store'>
              <ShopIcon />
              <div className='txt'>
                <p>Available on the</p>
                <h4>PLAY STORE</h4>
              </div>
            </button>
          </Grid>
        </Grid>
    </div>
  )
}

export default Footer;