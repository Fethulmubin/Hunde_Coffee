import React from 'react';
import style from './Information.module.css'; // Import the CSS Module
import md from '../../../assets/Limu.jpg'; // Image for the photo section

const Information = () => {
  return (
    <div className={style.container}>
      {/* Title Section (Centered) */}
      <div className={style.titleSection}>
        <h1 className={style.title}>Get Information</h1>
        <p className={style.contactDetail}>Contact Details</p>
      </div>

      {/* Content Section */}
      <div className={style.content}>
        {/* First Column (Address and Phone) */}
        <div className={style.column}>
          <div className={style.infoSection}>
            {/* Address Section */}
            <div className={style.iconLabel}>
              <i className="fas fa-map-marker-alt"></i>
              <span>Address:</span>
            </div>
            <p className={style.displayInfo}>Ethiopia, Addis Ababa,</p>

            {/* Phone Section */}
            <div className={style.iconLabel}>
              <i className="fas fa-phone"></i>
              <span>Phone:</span>
            </div>
            <p className={style.displayInfo}>+251984666353</p>
            <p className={style.displayInfo}>+251911319603</p>
          </div>
        </div>

        {/* Second Column (WhatsApp and Email) */}
        <div className={style.column}>
          <div className={style.infoSection}>
            {/* WhatsApp Section */}
            <div className={style.iconLabel}>
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp:</span>
            </div>
            <p className={style.displayInfo}>+251984666353</p>

            {/* Email Section */}
            <div className={style.iconLabel}>
              <i className="fas fa-envelope"></i>
              <span>Email:</span>
            </div>
            <p className={style.displayInfo}>contact@hktcoffee-export.com</p>
            <p className={style.displayInfo}>hunde@hktcoffee-export.com</p>
          </div>
        </div>

        {/* Third Column (Display Photo Placeholder) */}
        <div className={style.column}>
          <div className={style.infoSection}>
            <div className={style.photoPlaceholder}>
              <img src={md} alt="Contact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
