"use client";

import { useState } from "react";

import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";

import { AnimatePresence, motion } from "framer-motion";

const builder = imageUrlBuilder(client);

export default function ImageSlideShow({ post }: { post: any }) {
  const [currentImage, setCurrentImage] = useState(0);

  const variants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={builder.image(post.imageSlideShow[currentImage]).url()}
          className="flex-1 relative w-full aspect-square mb-2"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            duration: 0.6,
          }}
        >
          <Image
            className="object-cover object-center aspect-auto"
            src={builder.image(post.imageSlideShow[currentImage]).url()}
            fill
            quality={100}
            priority
            alt=""
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-2">
        {(post.imageSlideShow as any)?.map((image: any, index: number) => {
          return (
            <motion.button
              key={builder.image(image).width(300).height(300).url()}
              className={`
                ${
                  index === currentImage
                    ? "border-2 border-secondary"
                    : "border-2 border-primary"
                }
                relative w-[100px] aspect-square box-content transition-all duration-300
                
              `}
              onClick={() => {
                setCurrentImage(index);
              }}
              disabled={index === currentImage}
            >
              <Image
                className="object-contain object-center aspect-auto"
                src={builder.image(image).width(300).height(300).url()}
                fill
                quality={100}
                priority
                alt=""
              />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
