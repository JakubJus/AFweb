import React from "react";
import "./Product.scss";
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Product = () => {
    const { t } = useTranslation(); // Access translation functions

    return (
        <div className="cent">
            <h1>{t('product.title')}</h1>
            <div className="upperbox">
                <div className="text-cont">
                    <h2>{t('product.improveTechnique')}</h2>

                    <p className="info">
                        {t('product.firstProductDescription')}
                        <ul>
                            <li>{t('product.handSlipping')}</li>
                            <li>{t('product.pullTechnique')}</li>
                            <li>{t('product.tooEarlyLatePhases')}</li>
                        </ul>
                        {t('product.easyToPutOn')}
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
                        {t('product.videoTagFallback')}
                    </video>
                </div>
            </div>
            <div className="upperbox">
                <div className="video-container">
                    <img src="images/data.jpg" alt="Product 1" className="product-media" />
                </div>
                <div className="text-cont">
                    <h2>{t('product.viewResults')}</h2>
                    <p className="info">
                        {t('product.compareData')}
                        <br /><PhonelinkIcon /><br />
                        {t('product.trackPhases')}<br /><br />
                        {t('product.comphensiveApp')}
                        
                    </p>
                </div>
            </div>
            <div className="upperbox">
                <div className="text-cont">
                    <h2>{t('product.getRawData')}</h2>
                    <p className="info">
                        {t('product.rawDataApp')}
                    </p>
                </div>
                <div className="mobile-video">
                    <video
                        src="/videos/APPtest.mp4"
                        type="video/mp4"
                        autoPlay
                        muted
                        loop
                    >
                        {t('product.videoTagFallback')}
                    </video>
                </div>
            </div>
           
            
        </div>
    );
};

export default Product;
