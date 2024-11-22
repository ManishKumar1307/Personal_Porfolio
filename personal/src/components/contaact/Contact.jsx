import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic, e.g., send the email to the backend or show a message
    console.log(`Email submitted: ${email}`);
  };

  return (
    <div className="mt-20 flex flex-col justify-center items-center py-12">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold ">Let's Design Together</h1>
        <p className="mt-2 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus <br/>netus in. Aliquet donec morbi convallis pretium</p>
      </div>

      <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4 mt-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-36 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Contact Me
        </button>
      </form>
    </div>
  );
}

export default Contact;
