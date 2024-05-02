import PlayButton from "@/assets/images/play-button.svg";
import VideoImage from "@/assets/images/video.png";
import React, { useRef, useState } from "react";
import { DialogVideo } from "./dialog-video";

export const Video = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setShowControls(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
    setShowControls(false);
  };

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <>
      <div className="relative flex flex-col items-center">
        <img src={VideoImage} alt="" className="w-full" />
        <img
          src={PlayButton}
          onClick={openDialog}
          alt=""
          className="absolute w-6 h-6 sm:w-10 sm:h-10 cursor-pointer lg:h-14 lg:w-14 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 top-[40%]"
        />
      </div>
      <DialogVideo isOpen={isOpen} onClose={closeDialog}>
        <div className="relative flex aspect-video h-full w-full items-center justify-center md:mt-0">
          <video
            ref={videoRef}
            controls={showControls}
            onPlay={handlePlay}
            onPause={handlePause}
            className="w-full h-full"
          >
            <source
              src="https://7span-product.b-cdn.net/59a18bf3-cbc2-43a2-a439-f74e15df00ef.mp4"
              type="video/mp4"
            />
          </video>
          {!isPlaying && (
            <div
              onClick={togglePlayPause}
              className="absolute cursor-pointer flex justify-center items-center rounded-full"
            >
              <img
                src={PlayButton}
                alt=""
                className="w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14 2xl:w-32 2xl:h-32"
              />
            </div>
          )}
        </div>
      </DialogVideo>
    </>
  );
};
