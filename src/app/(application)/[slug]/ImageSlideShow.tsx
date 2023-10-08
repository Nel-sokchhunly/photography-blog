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
      height: "auto",
    },
    exit: {
      opacity: 0,
    },
  };

  // if (!post.imageSlideShow)
  return (
    <Image
      className="object-cover object-center aspect-auto"
      src={builder.image(post.mainImage).url()}
      // fill
      quality={100}
      priority
      alt=""
      style={{
        width: "100%",
        height: "auto",
      }}
      sizes="100vw"
      width={600}
      height={400}
    />
  );

  return (
    <motion.div
      layout="position"
      className="
        w-full h-fit flex-1 flex flex-col gap-2
      "
    >
      <div className="flex flex-col gap-2">
        {(post.imageSlideShow as any)?.map((image: any, index: number) => {
          return (
            <div
              key={builder.image(image).width(300).height(300).url()}
              className={`
                : "border-2 border-primary"
                }
                relative w-full  aspect-auto box-content transition-all duration-300
                
              `}
            >
              <Image
                className="object-contain object-center aspect-auto"
                src={builder.image(image).url()}
                quality={100}
                priority
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
                sizes="100vw"
                width={600}
                height={400}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
