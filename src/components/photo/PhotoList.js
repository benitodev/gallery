import React, { useEffect, useState } from "react";
import imageService from "../../services/images";

import Photo from "./Photo";
const PhotosList = () => {
  const [photosList, setPhotosList] = useState([]);
  useEffect(() => {
    imageService.getAll().then((res) => {
      setPhotosList(res);
      console.log(res);
    });
  }, []);
  return (
    <div className="grid grid-cols-photos auto-rows-photos grid-flow-row-dense gap-3 ">
      {photosList &&
        photosList.map((photo, i) => {
          i++;
          if (!(i % 3)) {
            return (
              <Photo
                key={photo.id}
                id={photo.id}
                name={photo.name}
                url={photo.image.url}
                owner={photo.owner}
                wideClass="wide"
              />
            );
          } else if (!(i % 5)) {
            return (
              <Photo
                key={photo.id}
                id={photo.id}
                name={photo.name}
                url={photo.image.url}
                owner={photo.owner}
                tallClass="tall"
              />
            );
          }
          return (
            <Photo
              key={photo.id}
              id={photo.id}
              name={photo.name}
              url={photo.image.url}
              owner={photo.owner}
            />
          );
        })}
    </div>
  );
};

export default PhotosList;
