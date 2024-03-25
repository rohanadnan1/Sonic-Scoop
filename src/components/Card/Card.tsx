import React from "react";
import "./card.css";
import { FaPause, FaPlay } from "react-icons/fa";
import { useSelector } from "react-redux";
import {Song} from '../Home/Home'
import { useDispatch } from "react-redux";
import {play_song, pause_song} from '../../store/song_slice'

interface CardProps {
  song: Song;
  key: number;
}

const Card = ({ song }: CardProps) => {
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state: any) => state.song);

  return (
    song && (
      <div className="card col-span-1 p-4 rounded-lg">
        <div className="relative">
          <img src={song.artist} alt="" />
          {isPlaying ? (
            <button className="flex items-center play_btn absolute bottom-0 rounded-[50%] bg-green-500 justify-center p-2" onClick={()=>dispatch(pause_song())}>
              <FaPause className="text-black text-sm" />
            </button>
          ) : (
            <button className="flex items-center play_btn absolute bottom-0 rounded-[50%] bg-green-500 justify-center p-2" onClick={(song)=>dispatch(play_song(song))}>
              <FaPlay className="text-black text-sm" />
            </button>
          )}
        </div>

        <h3 className="text-sm font-semibold my-2">{song.title}</h3>
        <p className="text-xs text-gray-400 leading-4">
          Lorem ipsum dolor sit, amet consectetur harum nemo numquam?
        </p>
      </div>
    )
  );
};

export default Card;
