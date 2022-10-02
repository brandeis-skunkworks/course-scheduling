import React from 'react';
import './Modal.css';
import icon from '../../img/info.svg';
import block from '../../img/blocks.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ModalBlock() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="default" onClick={handleShow}>
        <span><img src={icon} alt="info icon" /></span>
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Block Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="body_img" src={block} alt="block schedule" />
        </Modal.Body>
      </Modal>
    </>
  );
}


export default ModalBlock;