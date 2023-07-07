import WebLines from "@/helpers/Lines";
import Router from "@/helpers/routers";
import React, { useState } from "react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <main>
      <div className="bg-zinc-900 overflow-hidden">
        <div className="mt-10 grid justify-center gap-5 rounded-lg bg-cyan-800 md:grid-cols-1 lg:grid-cols-1">
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src={`/Vishal.png`}
                alt=""
                className="relative top-1 w-[50px] rounded-full"
              />
            </div>
            <div className="ml-2 flex flex-col">
              <p className="font-sans text-xl font-semibold">Vishal</p>
            </div>
          </div>
          <div className="flex justify-center gap-10 font-sans font-medium">
            <a className="cursor-pointer hover:text-gray-800" href="#Home">
              Home
            </a>
            <a
              className="cursor-pointer hover:text-gray-800"
              href="#Introduction"
            >
              Intro
            </a>
            <a className="cursor-pointer hover:text-gray-800" href="#Skills">
              Skills
            </a>
          </div>
          <div className="flex cursor-pointer justify-center gap-5">
            <i
              className={`relative rounded-xl bg-black p-2 hover:-translate-y-1 hover:transform hover:bg-blue-900`}
            >
              <a href={`/discord`}><FaDiscord /></a>
            </i>

            <i className="rounded-xl bg-black p-2 hover:-translate-y-1 hover:transform hover:bg-gray-800">
              <a href={`/github`}><FaGithub /></a>
            </i>
            <i className="rounded-xl bg-black p-2 hover:-translate-y-1 hover:transform hover:bg-pink-500">
              <a href={`/instagram`}><FaInstagram /></a>
            </i>
            <i className="rounded-xl bg-black p-2 hover:-translate-y-1 hover:transform hover:bg-blue-500">
             <a href={`/twitter`}><FaTwitter /></a>
            </i>
          </div>

          <div>
            <p className="flex justify-center font-serif text-sm font-semibold">
              {WebLines.Footer}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
