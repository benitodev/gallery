import React from "react";
import { useState } from "react";
import Modal from "../modal/Modal";

const ImageToMap = ({ imageObject }) => {
  const [isModal, setIsModal] = useState(false);
  const openModal = () => setIsModal(true);
  return (
    <div className="flex flex-wrap w-full">
      <div className="w-full md:p-2">
        <article className="w-full relative h-[50vh] max-h-[360px]">
          <Modal
            title={imageObject.name}
            imageId={imageObject.id}
            isModal={isModal}
            setModal={setIsModal}
          ></Modal>
          <img
            key={imageObject.id}
            onClick={openModal}
            className="absolute max-h-[360px] object-center object-cover rounded-lg w-full h-full block"
            src={imageObject.image.url}
            alt="I"
          />
        </article>
      </div>
    </div>
  );
};

export default ImageToMap;
