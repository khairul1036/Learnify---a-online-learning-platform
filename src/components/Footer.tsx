import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-indigo-800 text-white py-8 z-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and About */}
          <div className="flex flex-col items-start space-y-4">
            {/* <img
              src="/path/to/logo.png" // Replace with your logo path
              alt="Logo"
              className="h-12"
            /> */}
            <h1 className='text-4xl font-bold'>Leanify</h1>
            <p className="text-gray-300 text-sm">
              We are a company committed to providing the best services and products to our customers.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact and Social Media */}
          <div className="flex flex-col items-start space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <p className="text-gray-300 text-sm">123 Street, City, Country</p>
            <p className="text-gray-300 text-sm">Phone: (123) 456-7890</p>
            <p className="text-gray-300 text-sm">Email: info@example.com</p>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Leanify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
