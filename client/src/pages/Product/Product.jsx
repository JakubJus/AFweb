import React from "react";
import "./Product.scss";
import PhonelinkIcon from '@mui/icons-material/Phonelink';

const Product = () => {
    return (
        <div>
            <h1>Aqua Force Swimming Paddle</h1>
            <div className="upperbox">
                <div className="text-container">
                    <h2>Improve your technique</h2>

                    <p className="info">
                    Our first product, developed in 2022, developed in the thought of swimmers. Perfect for measurment of:
                    <ul>
                        <li>Hand slipping</li>
                        <li>Pull techique</li>
                        <li>To early/late phases of the pull</li>
                    </ul>
                    Easy to put on designed  for  better perfomance in water, connected directly to your mobile device.
                    </p>
                </div>
                <div className="video-container">
                    <video
                        src="/videos/hoverover.mp4"
                        type="video/mp4"
                        autoPlay
                        muted
                        loop
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="upperbox">
            <div className="video-container">
            <img src="images/data.jpg" alt="Product 1" className="product-media" />
                </div>
                <div className="text-container">
                    <h2>View your reslut</h2>
                    <p className="info">
                    View your results after your traning session and gatther data from your swimming,compare your data and track your swimming stroke development. Get faster with our force  measurement and distrube in a smarter way your force. 
                    <br></br><PhonelinkIcon/><br></br>
                    Track the pull, push, ... phase. See the peeks and what you're missing in your swimming. Get another variable in your swimming and dont base your improvment based only on your time.
                    </p>
                </div>
                
            </div>
            <div className="upperbox">
           
           <div className="text-container">
               <h2>Get your Raw data</h2>
               <p className="info">
               Get our raw data mobile appfor analytics and coaches, this app is desigend for you that is intressted tosee the raw data we are sedning to your device. Avilble for IOS and Andriod devices.  
               </p>
           </div>
           <div className="video-container">
               <video
                   src="/videos/APPtest.mp4"
                   type="video/mp4"
                   autoPlay
                   muted
                   loop
               >
                   Your browser does not support the video tag.
               </video>
           </div>
           
       </div>
            <div className="upperbox">
            <div className="video-container">
                    <video
                        src="/videos/AF_promo_final.mp4"
                        type="video/mp4"
                        autoPlay
                        muted
                        loop
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="text-container">
                    <h2>The market is in need</h2>
                    <p className="info">
                        Our costumers have shown possitve effect when using AquaForce paddle, they have imporved a signicant amout, 9/10 costumers would recomed AquaForce.
                    </p>
                </div>
                
            </div>
           
           
        </div>
    );
};

export default Product;