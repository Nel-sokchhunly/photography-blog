"use client";

import { useRouter } from "next/navigation";

export default function BlogSidebar() {
  const router = useRouter();
  return (
    <button
      className="
        sticky left-0 top-0
        h-full w-14
        border-r-2 border-secondary
        flex justify-center items-center
        transition-all duration-300
        hover:-translate-x-1
        hover:shadow-[4px_0px_0_black]
        z-10
      "
      onClick={() => router.back()}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </button>
  );
}
