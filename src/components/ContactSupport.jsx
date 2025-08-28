 import React from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactSupport() {
  return (
    <section id="contact" className="bg-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side - Contact Info */}
        <div className="bg-[#f8f59c] rounded-[40px] p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-red-700 mb-4">
            Contact & Support
          </h2>
          <h3 className="text-xl font-semibold text-red-700 mb-2">
            Need Help or Have Questions?
          </h3>
          <p className="mb-6 text-gray-800">
            Reach out to our support team for assistance, feedback, or inquiries.
          </p>

          {/* Email */}
          <div className="flex items-center mb-4">
            <Mail className="w-6 h-6 text-red-700 mr-3" />
            <div>
              <p className="font-semibold text-red-700">Email</p>
              <p className="text-gray-800">sshaikshabreen195@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <Phone className="w-6 h-6 text-red-700 mr-3" />
            <div>
              <p className="font-semibold text-red-700">Phone</p>
              <p className="text-gray-800">+91 7993651702</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div>
          <img
            src="/contact-support.png" // Update with your actual image file path
            alt="Contact Support"
            className="w-full h-full object-cover rounded-[40px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
