import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";
import Modal from '../CharacterModal';

export default function ItemCard({ id, fullName, family, title, width, image }) {
    const [modal, setModal] = useState("");

    const handleModal = () => {
        setModal(!modal);
    }


    return (
        <div>
            <div className="item-card" onClick={handleModal}>
                <div className="card-row">
                    <span className='id'>{id}</span>
                    <span className={'text name'}>{fullName}</span>
                    {/* <span className={'text title'}>{title}</span> */}
                    <span className={'text'}>{family}</span>
                    <Link to="#" className="view-details">
                        <img width="30px" src="/images/eye-icon.svg" alt="" />
                    </Link>
                </div>
                <div className="detail-tooltip">
                    <img className="logo-sm" src="images/logo-trans.png" alt="" />
                    <img className="img" src={image} alt="" />
                </div>
            </div>
            
            {/* Character Modal */}
            <Modal 
                image={image}
                name={fullName}
                title={title}
                family={family}
                show={modal}
                toggleShow={setModal}
            />
        </div>
    );
};
