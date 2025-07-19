import React, {useState} from "react";
import './Contact.css';

export default function ContactsContent() {
  const [result, setResult] = React.useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalVisible(false);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setIsModalVisible(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contacts-container">
      {isModalVisible && (
        <div 
        className="modal"
        onClick={handleOutsideClick}
        style={{ display: 'flex' }}>
          <span className="close" onClick={handleCloseModal}>&times;</span>
          <span className="contacts-result">{result}</span>
        </div>
      )}
      <form onSubmit={onSubmit} className="contacts-form">
        <h2>Let´s talk</h2>
        <p>Feel free to contact me.</p>
        <input type="text" name="name" required placeholder="Your Name" />
        <input type="email" name="email" required placeholder="Your Email" />
        <textarea name="message" required placeholder="Your Message"></textarea>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}
