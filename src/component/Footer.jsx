import React from "react";
import logoImage from "../assets/petlogo.png"
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {

 return (
    <footer className="flex-1  bg-black ">
      <div className="footer sm:footer-horizontal bg-blue-200  text-[#065193]  p-10 md:p-20">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            className="fill-current"
          ></svg>
          <img src={logoImage} alt="" className="w-20 h-20" />
          <p className="font-medium text-3xl  bg-linear-to-r from-[#2e52e3] to-[#065265] bg-clip-text text-transparent">
            WarmPaws
            </p>
          <p className="font-medium text-lg text-[#5382aa]">
            
            The Perfect Choice for Your Pet Care 
          </p>
          <div className="flex flex-row gap-3 mt-3">
            <a href="" className="flex gap-3"><Twitter className="border-b-white rounded-b-full-full"/> </a>
            <a href="" className="flex gap-3"><Linkedin /> </a>
            <a href="" className="flex gap-3"><Facebook/> </a>
            <a href="" className="flex gap-3"><Mail/> </a>
        </div>
        </aside>
        <div className=" footer flex flex-rows gap-4 sm:gap-20 mt-10 ">
          <nav className="font-semibold">
          <h6 className="footer-title text-xl">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="font-semibold">
          <h6 className="footer-title text-xl">WarmPaws </h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Feature</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="font-semibold">
          <h6 className="footer-title text-xl">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        </div>
      </div>
      <div className="footer sm:footer-horizontal footer-center font-semibold bg-base-300 text-base-content p-4">
        <p>Copyright © 2025 - All right reserved by WarmPaws - Pet Care Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
