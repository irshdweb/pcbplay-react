import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Video from '../assets/product-video.mp4';
import Product from '../assets/images/item-2.png';

const Home = () => {

  const [showimg, setImg]= useState(false);

  const showVideo = ()=>{
    setImg(true);
  }

  const hideVideo = () =>{
    setImg(false);
  }

  return (
    <section className="home">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={7} lg={7} xs={12}>
            <div className="left-para">
              <h2>an easy way of having
                lorem pcb boards, finally...</h2>
                <p>select the features of your easily from drop down menu,
                we will  prepare it quickly select the features of your easily from drop down</p>
                <div className="special-text">
                    we design, you <span>p</span><span>l</span><span>a</span><span>y</span> <span>.</span> <span>.</span> <span>.</span>
                </div>
                <button className="learn-more">
                    learn more
                </button>
            </div>
          </Grid>
          <Grid item md={5} lg={5} xs={12}>
            <div className="video-wrap">
              <video id="my-video" poster={Product} onMouseOver={showVideo} onMouseLeave={hideVideo} controls={showimg}>
                  <source src={Video} type="video/mp4"/>
                  <source src="movie.ogg" type="video/ogg"/>
                  Your browser does not support the video tag.
              </video>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
export default Home;