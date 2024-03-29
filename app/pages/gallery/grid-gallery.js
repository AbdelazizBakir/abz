import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { Menu } from '@headlessui/react'
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";


export default function GridGallery({ images }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <>
    <div className='flex w-screen h-64 pt-32 pl-4 sm:pt-20 md:pt-20 object-cover object-center backdrop-contrast-100 bg-white/80 text-2xl  font-medium'> Galerie de photos des activités de l'école </div>
    <div className="grid md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-1 gap-2 object-cover object-center m-4 min-h-screen">
      {images &&
        images.map((imageUrl, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GridGalleryCard
              imageUrl={imageUrl}
              show={imagesShownArray[index]}
            />
          </VisibilitySensor>
        ))}
    </div>
    </>
  );
}

function GridGalleryCard({ imageUrl, show }) {
  return (
    <div
      className={`relative transition ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
          Hello World
        </div>
      </div>
      <img src={imageUrl} alt="" />
    </div>
  );
}
