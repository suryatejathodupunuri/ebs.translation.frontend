import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-auto bg-gray-200 pt-12 pb-7">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl flex">
        <div className="w-1/2 pr-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Head Office - Hyderabad</h2>
            <p className="mb-2"><a href="https://ebhashasetu.com/" target="_blank" rel="noopener noreferrer"className="underline text-blue-600 hover:text-blue-800">eBhasha Setu Language Services Private Ltd.</a></p>
            <p className="mb-2">Vindhya C4, Second Floor, CIE, IIIT Hyderabad Campus,Gachibowli, Hyderabad-500032</p>
            <p className="mb-2"><span className="font-bold">Phone:</span>  +91 - 99664 43729 / +91-99680 36443</p>
            <p className="mb-4"><span className="font-bold">Email ID:</span> info@ebhashasetu.com / ebhashasetu@gmail.com</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">Branch Office - Delhi NCR</h2>
            <p className="mb-2">B 77-78, Sindhuja Building, 2nd Floor,</p>
            <p className="mb-2">Sector 6, Noida, UP 201301,India</p>
          </div>
        </div>

        <div className="w-1/2 pt-6">
          <iframe
            title="eBhasha Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3729767917416!2d78.34782221488438!3d17.445971188076136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a1158e7637%3A0x13cb15bd96faff71!2seBhasha!5e0!3m2!1sen!2sin!4v1634542659779!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
