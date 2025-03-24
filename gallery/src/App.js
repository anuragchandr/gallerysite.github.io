import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root'); // Required for accessibility

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage('');
  };

  return (
    <div>
      <h1>My favorite clicks</h1>
      <section className="gridcon">
        <img alt="image1" src="photos/img2.jpg" onClick={() => openModal('photos/img2.jpg')} />
        <img alt="image2" src="photos/img3.jpg" onClick={() => openModal('photos/img3.jpg')} />
        <img alt="image3" src="photos/img1.jpg" className="pic" onClick={() => openModal('photos/img1.jpg')} />
        <img alt="image4" src="photos/img4.jpg" className="pic2" onClick={() => openModal('photos/img4.jpg')} />
        <img alt="image5" src="photos/img5.jpg" onClick={() => openModal('photos/img5.jpg')} />
        <img alt="image6" src="photos/img6.jpg" className="pic2" onClick={() => openModal('photos/img6.jpg')} />
        <img alt="image7" src="photos/img7.jpg" onClick={() => openModal('photos/img7.jpg')} />
        <img alt="image8" src="photos/img8.jpg" className="pic" onClick={() => openModal('photos/img8.jpg')} />
        <img alt="image9" src="photos/img9.jpg" onClick={() => openModal('photos/img9.jpg')} />
        <img alt="image10" src="photos/img10.jpg" onClick={() => openModal('photos/img10.jpg')} />
        <img alt="image11" src="photos/img11.jpg" className="pic2" onClick={() => openModal('photos/img11.jpg')} />
      </section>

      {/* Modal for displaying the image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Viewer"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">Close</button>
        <img src={currentImage} alt="Large view" className="modal-image" />
      </Modal>
    </div>
  );
}

export default App;