import React from "react";
import bike from "../assets/img/projects/Screenshot 2022-06-13 000449.jpg";
import perts from "../assets/img/projects/menufacurer.png";
import service from "../assets/img/projects/service.png";
import phone from "../assets/img/projects/mobile.jpg";
import convenstion from "../assets/img/projects/convenstion.jpg";

const Allwork = () => {
  return (
    <div className=" container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 gap-y-10">
    <div class="card w-96 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
    <div class="mt-10 max-w-sm mx-auto">
          <div class="relative group">
          <figure class="px-10 pt-10">
        <img src={bike} alt="Shoes" class="rounded-xl" />
      </figure>
            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-black via-black to-opacity-100 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <div class="flex-row text-center">
                <h1 class="text-white font-bold text-lg">
                  Project Overview
                </h1>
                <p class="text-teal-300 text-xs">mongo db Data Server</p>
                <p class="text-teal-300 text-xs">firebase authentication</p>
                <p class="text-teal-300 text-xs">You Added New Item at Home & Database</p>
                <p class="text-teal-300 text-xs"> Manage inventory to add delete system</p>
                <p class="text-teal-300 text-xs">delevary & update quantity system</p>
                <p class="text-teal-300 text-xs">added my item service system</p>
              </div>
            </div>
          </div>
        </div>
      <div class="card-body items-center text-center">
        <h2 class="card-title title">David Bike Mania</h2>
        <div className="mt-3">
          <button class="animate-bounce w-18 h-10 text-white btn btn-outline btn-secondary">
            <a
              href="https://david-bike-mania.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          </button>
        </div>
        <div className="mt-3">
          <button
            type="button"
            class=" text-white btn btn-outline btn-secondary"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            <a
              href="https://github.com/parvezislam45/warehouse-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Hub Server Site Code
            </a>
          </button>
        </div>
        <div className="mt-3">
          <button
            type="button"
            class="text-white btn btn-outline btn-secondary"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            <a
              href="https://github.com/parvezislam45/wereHouse-Client/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Hub Client Site Code
            </a>
          </button>
        </div>
      </div>
    </div>
    <div class="card w-96 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
    <div class="mt-10 max-w-sm mx-auto">
          <div class="relative group">
          <figure class="px-10 pt-10">
        <img src={perts} alt="Shoes" class="rounded-xl" />
      </figure>
            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-black via-black to-opacity-100 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <div class="flex-row text-center">
                <h1 class="text-white font-bold text-lg">
                  Project Overview
                </h1>
                <p class="text-teal-300 text-xs">Use React js</p>
                <p class="text-teal-300 text-xs">use Node Js for Backhand</p>
                <p class="text-teal-300 text-xs">use Firebase Autentication</p>
                <p class="text-teal-300 text-xs">use react hook from</p>
                <p class="text-teal-300 text-xs">use React Query</p>
                <p class="text-teal-300 text-xs">add dynamic client review section on home page</p>
                <p class="text-teal-300 text-xs">implement jwt token</p>
                <p class="text-teal-300 text-xs">use requre admin page</p>
                <p class="text-teal-300 text-xs">use international payment system</p>
                <p class="text-teal-300 text-xs">Added Dashboard</p>
               
              </div>
            </div>
          </div>
        </div>
      <div class="card-body items-center text-center">
        <h2 class="card-title title">Bike Menufacturer</h2>
        <div className="mt-3">
          <button  type="button"
            class="animate-bounce w-18 h-10 text-white btn btn-outline btn-secondary">
            <a
              href="https://parts-menufcturar.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site Link
            </a>
          </button>
          <div className="mt-3">
          <button
            type="button"
            class="text-white btn btn-outline btn-secondary"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            <a
              href="https://github.com/parvezislam45/Menufacturing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Hub Client Site Code
            </a>
          </button>
          </div>
        </div>
        <div className="mt-3">
        <button
            type="button"
            class="text-white btn btn-outline btn-secondary"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            <a
              href="https://github.com/parvezislam45/Menufacturing-Server/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Hub Server Site Code
            </a>
          </button>
        </div>
      </div>
    </div>
    <div class="card w-96 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300" >
    <div class="mt-10 max-w-sm mx-auto">
          <div class="relative group">
          <figure class="px-10 pt-10">
        <img src={service} alt="Shoes" class="rounded-xl"/>
      </figure>
            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-black via-black to-opacity-100 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <div class="flex-row text-center">
                <h1 class="text-white font-bold text-lg">
                  Project Overview
                </h1>
                
                <h6 class="text-teal-300 text-xs">Use React & Use React Custom Hook</h6>
                <h6 class="text-teal-300 text-xs">Use React Bootsrap</h6>
                <h6 class="text-teal-300 text-xs">Use Firebase Authenticatin Email, Password & Google</h6>
                <h6 class="text-teal-300 text-xs"> Use Carosel To Banner Section</h6>
                <h6 class="text-teal-300 text-xs">Details About My Services</h6>
                <h6 class="text-teal-300 text-xs">Use Sign in & Log in System</h6>
                <h6 class="text-teal-300 text-xs">Use Forget Password Varification send Email</h6>
              </div>
            </div>
          </div>
        </div>
      <div class="card-body items-center text-center">
        <h2 class="card-title title">David Mechaine Servicing Center</h2>
        <div className="mt-3">
          <button  type="button"
            class="animate-bounce w-18 h-10 text-white btn btn-outline btn-secondary">
            <a
              href="https://mechine-service.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site Link
            </a>
          </button>
        </div>
        <div className="mt-3">
          <button
            type="button"
            class="text-white btn btn-outline btn-secondary"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            <a
              href="https://github.com/parvezislam45/Mechine-Service/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Hub Client Site Code
            </a>
          </button>
        </div>
      </div>
    </div>
    <div class="card w-96 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
    <div class="mt-10 max-w-sm mx-auto">
          <div class="relative group">
          <figure class="px-10 pt-10">
        <img src={phone} alt="Shoes" class="rounded-xl" />
      </figure>
            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-black via-black to-opacity-100 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <div class="flex-row text-center">
                <h1 class="text-white font-bold text-lg">
                Project Overview
                </h1>
                <p class="text-teal-300 text-xs">Use Dynamic Search Bar</p>
                <p class="text-teal-300 text-xs">Use Dynamic Api</p>
                <p class="text-teal-300 text-xs">Use Dynamic Product Details & Feature</p>
                <p class="text-teal-300 text-xs">Implement Even handleing system</p>
                <p class="text-teal-300 text-xs">Use Row Java Script</p>
              </div>
            </div>
          </div>
        </div>
      <div class="card-body items-center text-center">
        <h2 class="card-title title">Black View-Phone Mania</h2>
        <div className="mt-3">
          <button  type="button"
            class="animate-bounce w-18 h-10 text-white btn btn-outline btn-secondary">
            <a
              href="https://mechine-service.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site Link
            </a>
          </button>
        </div>
        <div className="mt-3">
          <button
            type="button"
            class="text-white btn btn-outline btn-secondary"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            <a
              href="https://github.com/parvezislam45/Mechine-Service/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Hub Client Site Code
            </a>
          </button>
        </div>
      </div>
    </div>
    <div class="card w-96 shadow-xl transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300">
    <div class="mt-10 max-w-sm mx-auto">
          <div class="relative group">
          <figure class="px-10 pt-10">
        <img src={convenstion} alt="Shoes" class="rounded-xl" />
      </figure>
            <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-black via-black to-opacity-100 group-hover:opacity-100 absolute top-0 left-0 h-full w-full"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
              <div class="flex-row text-center">
                <h1 class="text-white font-bold text-lg">
                  Project Overview
                </h1>
                <h6 class="text-xs font-light text-white">Use BootStrap Firmware</h6>
                <h6 class="text-xs font-light text-white">Make Responsive Navbar</h6>
                <h6 class="text-xs font-light text-white">Added Carosel System</h6>
                <h6 class="text-xs font-light text-white">Package System & booking</h6>
              </div>
            </div>
          </div>
        </div>
      <div class="card-body items-center text-center">
        <h2 class="card-title title">David Mechaine Servicing Center</h2>
        <div className="mt-3">
          <button  type="button"
            class="animate-bounce w-18 h-10 text-white btn btn-outline btn-secondary">
            <a
              href="https://mechine-service.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site Link
            </a>
          </button>
        </div>
        <div className="mt-3">
          <button
            type="button"
            class="text-white btn btn-outline btn-secondary"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            <a
              href="https://github.com/parvezislam45/Mechine-Service/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Hub Client Site Code
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Allwork;
