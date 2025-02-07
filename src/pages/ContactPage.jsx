import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        queries: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div className="shadow p-3 mb-3 bg-body rounded w-50 mx-auto">
                    <label className="p-1">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="shadow p-3 mb-3 bg-body rounded w-50 mx-auto">
                    <label className="p-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="shadow p-3 mb-3 bg-body rounded w-50 mx-auto">
                    <label className="p-1">Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="shadow p-3 mb-3 bg-body rounded w-50 mx-auto"> 
                    <label className="p-1">Company:</label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="shadow p-3 mb-3 bg-body rounded w-50 mx-auto">
                    <label className="p-1">Additional Queries:</label>
                    <textarea
                        name="queries"
                        value={formData.queries}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit
                </button>

            </form>
        </div>
    );
};

export default ContactPage;