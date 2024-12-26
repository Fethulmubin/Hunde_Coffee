import React from "react";
import styles from "./ContactMap.module.css";

const ContactMap = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1009347.4264284392!2d34.13953518810473!3d8.808286235826097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x165552a20b930741%3A0xeca4a75ffdfa3671!2sKelam%20Welega!5e0!3m2!1sen!2set!4v1735221147975!5m2!1sen!2set"
        width="100%"
        height="100%" 
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
 
    </div>
  );
};

export default ContactMap;
