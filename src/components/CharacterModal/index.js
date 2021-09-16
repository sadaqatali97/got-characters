import React from 'react';
import "./styles.css";

export default function Modal({ image, name, title, family, show, toggleShow }) {

    const handleClose = () => {
        toggleShow(false);
    }

    return (
        <div className={`modal-wrap ${show? "show" : ""}`}>
            <div className="overlay"onClick={handleClose}></div>

            <div className="modal-box">
            <img className="modal-logo" src="images/logo-trans.png" alt="" />
                <div className="modal-row">
                    <div className="image">
                        <img  src={image} alt={name} />
                    </div>
                    <div className="details">
                        <h2>{name}</h2>
                        <div className="list-row">
                            <label>Title:</label>
                            <h3>{title}</h3>
                        </div>
                        <div className="list-row">
                            <label>Family:</label>
                            <h3>{family}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
