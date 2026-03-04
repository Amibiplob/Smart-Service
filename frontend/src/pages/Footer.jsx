import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineMoveToInbox } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-neutral">
      <footer className="footer sm:footer-horizontal lg:mx-12 text-neutral-content py-10">
        <aside className="max-w-sm">
          <h2 className="text-2xl font-bold text-white">Smart Service</h2>
          <p className="mt-4 text-sm leading-6">
            **Smart Service** is an intelligent ticketing service designed to
            solve customer problems quickly and efficiently. It allows users to
            submit issues online, automatically assigns tickets to the right
            team, and tracks progress in real time.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Sales</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>

        <nav>
          <h6 className="footer-title text-white">Social Links</h6>
          <a className="link link-hover flex items-center gap-1">
            <FaXTwitter /> — @Smart Service
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FaLinkedinIn /> — @Smart Service
          </a>
          <a className="link link-hover flex items-center gap-1">
            <FaFacebookF /> — @Smart Service
          </a>
          <a className="link link-hover flex items-center gap-1">
            <MdOutlineMoveToInbox />
            support@smartservice.com
          </a>
        </nav>
      </footer>
      <div class="lg:mx-12 mx-auto border-t border-slate-700 text-center">
        <div class="py-6 ">
          <p class="text-md text-white">
            © 2025 Smart Service, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
