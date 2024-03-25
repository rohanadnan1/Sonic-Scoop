import React from "react";

import Layout from "../../Layout/Layout";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Card from "../Card/Card";
import SongBar from "../Masterbar/SongBar";
import { Link } from "react-router-dom";
import artistImage from "../../assets/artist/artist.jpg";

export interface Song {
  id: number;
  title: string;
  artist: string;
  mp3: HTMLAudioElement;
}

const songs: Song[] = [
  {
      id: Math.random() * Date.now(),
      title: "Tum Hi Ho",
      artist: "https://i.tribune.com.pk/media/images/chahat1703590298-0/chahat1703590298-0.jpg",
      mp3: new Audio("/assets/mp3/one.mp3"),
  },
  {
      id: Math.random() * Date.now(),
      title: "Ae Dil Hai Mushkil",
      artist: artistImage,
      mp3: new Audio("/assets/mp3/two.mp3"),
  },
  {
      id: Math.random() * Date.now(),
      title: "Mirchi Awards",
      artist: artistImage,
      mp3: new Audio("/assets/mp3/one.mp3"),
  },
  {
      id: Math.random() * Date.now(),
      title: "Judaiyaan",
      artist: artistImage,
      mp3: new Audio("/assets/mp3/one.mp3"),
  },
  {
      id: Math.random() * Date.now(),
      title: "Heeriye",
      artist: artistImage,
      mp3: new Audio("/assets/mp3/two.mp3"),
  },
  {
      id: Math.random() * Date.now(),
      title: "Tu hi Hai Aashiqui",
      artist: artistImage,
      mp3: new Audio("/assets/mp3/one.mp3"),
  },
];

const Home = () => {
    
  return (
    <Layout>
    <div className="flex justify-between ml-4  py-4 rounded-[2px] mt-2 px-8 secondary_bg items-center ">
        <div className="flex gap-2 items-center ">
            <FaLessThan className="bg-white/10 text-3xl p-1  rounded-[50%] " />
            <FaGreaterThan className="bg-white/10 text-3xl p-1  rounded-[50%] " />
        </div>
        <div>
            <Link
                to={"/signup"}
                className="rounded-full  mt-4 px-8 text-base  py-2 text-white- font-semibold"
            >
                Sign Up
            </Link>

            <Link
                to={"/login"}
                className="rounded-full text-black mt-4 px-8 text-base  py-3 bg-white font-semibold"
            >
                Log in
            </Link>
        </div>
    </div>
    <div className="tertiary_bg mx-4 px-4 py-4 h-[100vh]">
        <div className="flex justify-between my-4 items-center">
            <span className="text-xl font-bold hover:underline cursor-pointer">
                Focus
            </span>
            <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
            {songs.map((song) => {
                return <Card key={song.id} song={song} />;
            })}
        </div>
        <div className="flex justify-between my-4 items-center">
            <span className="text-xl font-bold hover:underline cursor-pointer">
                Spotify List
            </span>
            <span>Show All</span>
        </div>
        <div className="grid  gap-6 grid-cols-5">
            {songs.map((song) => {
                return <Card key={song.id} song={song} />;
            })}
        </div>
    </div>
    <SongBar />
</Layout>
  );
};

export default Home;
