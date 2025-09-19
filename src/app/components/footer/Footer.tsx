import React from "react";
import Link from "next/link";
import logo from './logo.jpg'
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a3d] text-white pt-10 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left: Logo and Description */}
          <div className="w-full md:w-1/4">
            <div className="flex gap-5 items-center mb-5">
              <Image
                src={logo}
                alt="CADDManchester Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <p className="text-3xl font-bold">
                <p>CADD<br/>MANCHESTER</p>
                <p className="relative bottom-3 text-[10px]">An Institute of English & Computer Courses</p>
              </p>
            </div>
            <p className="text-sm text-gray-300">
              CADD Manchester Academy – Empowering careers with 3+ years of
              experience in skill development. Offering offline and online
              training across India.
            </p>
          </div>

          {/* Center: Company Links */}
          <div className="w-full md:w-1/5 ml-8">
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/Courses" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/Exam" className="hover:text-white">
                  Exams
                </Link>
              </li>
              <li>
                <Link href="/Blog" className="hover:text-white">
                  Blogs
                </Link>
              </li>
                <li>
                <Link href="/aboutus" className="hover:text-white">
                  About us
                </Link>
              </li>
            </ul>
          </div>

          {/* Center Right: Popular Exams */}
          <div className="w-full md:w-1/5">
            <h5 className="text-lg font-semibold mb-4">Job Assured Programs</h5>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Digital Marketing</li>
              <li>Web Development</li>
              <li>Data Analyst</li>
              <li>Data Science</li>
              <li>Data Structures & Algorithms</li>
              <li>Advanced Excel</li>
              <li>Programming Languages</li>
              <li>Graphic Designing</li>
              <li>Auto CADD 2D, 3D</li>
              <li>Accounting (Tally Prime, GST)</li>
            </ul>
          </div>

          {/* Right: Social Icons */}
          <div className="w-full md:w-1/5 flex flex-col items-start md:items-end">
            <h5 className="text-lg font-semibold mb-4 mr-6">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-600">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-500">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-600">
                <FaInstagramSquare size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-800">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 pt-4 mt-8 mb-5">
          <p className="text-sm text-gray-300 text-center">
            &copy; {new Date().getFullYear()} CADDManchester. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
