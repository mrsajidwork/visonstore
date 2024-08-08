import React from 'react'

const ContactUs = () => {
  return (
    <>
      <section
        className="w-full bg-about_page_banner bg-no-repeat bg-cover
    bg-center px-4 py-24 mt-[65px]"
      >
        <h2 className="text-center text-white text-5xl font-bold font-display fade-in">
          Contact
        </h2>
      </section>

      <section className="pt-24 pb-28 contact-block">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between bg-white border-2 border-lavender">
                <div className="w-full lg:w-1/2 p-6 lg:p-10 lg:border-r-2 border-lavender font-display fade-left">
                    <h2 className="text-2xl font-medium mb-6">Contact Us</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email"
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" rows={4}
                                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
                        </div>
                        <div>
                            <button type="submit"
                                className="w-full py-3 px-6 bg-indigo text-white rounded-full">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="w-full lg:w-1/2 pattern-bg p-6 lg:p-10 flex items-center font-display fade-left">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                        <p className="mb-4">
                            We are here to help you. Feel free to reach out to us with any questions or concerns.
                        </p>
                        <p className="mb-4">Phone:
                            <a href="#" className="text-indigo block mt-3">(123) 456-7890</a>
                        </p>
                        <p>Email:
                            <a href="#" className="text-indigo block mt-3">contact@company.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </>
  )
}

export default ContactUs