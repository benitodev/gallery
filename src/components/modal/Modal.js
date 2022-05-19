import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import UserImagesContext from "../../context/UserImagesContext";
import imageService from "../../services/images";

const Modal = ({ title, setModal, isModal, imageId }) => {
  const closeModal = () => setModal(false);
  const { user } = useContext(AuthContext);
  const { image: images, setImage } = useContext(UserImagesContext);
  const handleDelete = (id) => {
    console.log(id);
    imageService.eliminate(id, user);
    const newImages = images.filter((image) => image.id !== id);
    setImage(newImages);
  };
  return (
    <>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          isModal ? "block" : "hidden"
        } absolute  w-full h-full max-h-[360px] top-0 right-0 left-0 z-30  md:inset-0 h-modal md:h-full`}
      >
        <div className="relative w-full max-w-2xl h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="flex flex-col justify-between relative bg-modal rounded-lg h-full">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6"></div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                onClick={() => handleDelete(imageId)}
                className="text-red bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 tracking-wide"
              >
                Delete
              </button>
              <Link to={`/image/update/${imageId}`}>
                <button
                  data-modal-toggle="defaultModal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 tracking-wide"
                >
                  Update
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
