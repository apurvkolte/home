import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';

const ContactUs = () => {
    return (
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-8 py-32">
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <div className="w-20 h-1 bg-blue-600 rounded mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi voluptatem, quidem officiis sapiente vero praesentium!
                </p>
            </section>

            <div className='conatiner max-w-screen-lg mx-auto mb-5'>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538444521027!2d-122.4199066846824!3d37.77492997975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg"
                        title="Google Maps Location"
                    ></iframe>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3 space-y-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Our Location</h3>
                                    <p className="text-gray-600 mt-1">123 Business Avenue, Suite 400<br />San Francisco, CA 94107</p>
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 inline-flex items-center mt-2 transition-colors"
                                    >
                                        <SiGooglemaps className="mr-1" /> View on Google Maps
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    <FaPhoneAlt className="text-green-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Phone Number</h3>
                                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                                    <p className="text-gray-600">+1 (555) 987-6543</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-red-100 p-3 rounded-full mr-4">
                                    <FaEnvelope className="text-red-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Email Address</h3>
                                    <p className="text-gray-600 mt-1">contact@company.com</p>
                                    <p className="text-gray-600">support@company.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-purple-100 p-3 rounded-full mr-4">
                                    <FaClock className="text-purple-600 text-xl" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-800">Working Hours</h3>
                                    <p className="text-gray-600 mt-1">Monday - Friday: 9am - 6pm</p>
                                    <p className="text-gray-600">Saturday: 10am - 4pm</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="lg:w-2/3">
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Send Us a Message</h2>
                        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nisi.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="sales">Sales Question</option>
                                        <option value="feedback">Feedback</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    required
                                />
                                <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                                    I agree to the <a href="#" className="text-blue-600 hover:underline">privacy policy</a> and <a href="#" className="text-blue-600 hover:underline">terms of service</a>.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                            >
                                <FaPaperPlane className="mr-2" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;