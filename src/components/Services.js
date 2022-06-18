import React from 'react';
import develop from "../assets/img/services/web-development.png";
import design from "../assets/img/services/website-design.png"
import font from "../assets/img/services/front.jpg";
import back from "../assets/img/services/backend.jpeg";
import deploy from "../assets/img/services/Web_hosting.jpg";
import server from "../assets/img/services/server.png"

// import services data
// import { services } from '../data';

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            What I do for clients
          </h2>
          <p className='subtitle'>
          I Always Try To give the Best Service.I Try to Give Satisfied to the Client.I Deliver on Time Their Project.I Give The Highest priority to the Clients & I do as Say If They Are Happy
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 gap-y-10">
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={develop}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Web Site Development</h2>
           
          </div>
        </div>
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={design}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Design Full Web Site</h2>
           
          </div>
        </div>
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={font}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Front end Design Web Page</h2>
            
          </div>
        </div>
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={back}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Back-End Data Management</h2>
            
          </div>
        </div>
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={server}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Server & Cloud Management</h2>
            
          </div>
        </div>
        <div class="shadow-xl w-72">
          <figure>
            <img
              src={deploy}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body text-center">
            <h2 class="text-center text-2xl service">Deploy , Domain & Hosting Support</h2> 
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
