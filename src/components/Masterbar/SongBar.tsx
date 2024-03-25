import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineHeart, AiOutlinePlaySquare } from "react-icons/ai";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { CgScreen } from "react-icons/cg";
import { BiRepeat, BiShuffle } from "react-icons/bi";
import { FaPause, FaPlay } from "react-icons/fa";
import { PiMicrophoneStageDuotone, PiQueueLight } from "react-icons/pi";
import { HiSpeakerWave } from "react-icons/hi2";
import { BsArrowsAngleContract, BsSpeakerFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setProgress } from "../../store/duration_bar_slice";

const SongBar = () => {
  const dispatch = useDispatch();
  const { masterSong, isPlaying } = useSelector((state: any) => state.song);
  const {currentTime, progress, duration} = useSelector((state: any) => state.duration_bar);

  const handleMaster = () => {
    if (isPlaying) {
      masterSong?.mp3.pause();
    } else {
      masterSong?.mp3.play();
    }
  };

  const changeProgress = (e: any) => {
    dispatch(setProgress(e.target.value));
  }

  return (
    <div className="fixed w-full flex items-center justify-between bottom-0 left-0 h-20 bg-black">
      <div className="w-2/12">
        <div className="flex items-center gap-2">
          <img src="/assets/Arijit.jpg" alt="" className="h-12" />
          <div>
            <h3 className="text-xs font-medium mb-1">
              {masterSong?.title || "Arijit Singh"}
            </h3>
            <span className="text-[10px]">
              {masterSong?.artist || "Arijit Singh"}
            </span>
          </div>
          <AiOutlineHeart className="ml-3" />
          <CgScreen className="ml-3" />
        </div>
      </div>
      <div className="w-5/12">
        <div className="flex justify-center items-center mb-2 gap-6">
          <BiShuffle />
          <IoMdSkipBackward />
          {isPlaying ? (
            <button
              onClick={handleMaster}
              className="flex items-center rounded-[50%] bg-white justify-center p-2"
            >
              <FaPause className="text-black text-lg" />
            </button>
          ) : (
            <button
              onClick={handleMaster}
              className="flex items-center rounded-[50%] bg-white justify-center p-2"
            >
              <FaPlay className="text-black text-lg" />
            </button>
          )}
          <IoMdSkipForward />
          <BiRepeat />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs">{currentTime}</span>
          <input
            type="range"
            name=""
            min={0}
            value={progress}
            disabled={!masterSong.mp3}
            onChange={changeProgress}
            className="w-full block"
            max={100}
          />
          <span className="text-xs">{duration}</span>
        </div>
      </div>
      <div className="w-2/12 flex items-center gap-2">
        <AiOutlinePlaySquare className="text-2xl" />
        <PiMicrophoneStageDuotone className="text-2xl" />
        <PiQueueLight className="text-2xl" />
        <BsSpeakerFill className="text-2xl" />
        <HiSpeakerWave className="text-2xl" />
        {/* <HiSpeakerXMark className="text-2xl" /> */}
        <input type="range" name="" min={0} className="w-1/2 block" max={100} />
        <BsArrowsAngleContract />
      </div>
    </div>
  );
};

export default SongBar;
