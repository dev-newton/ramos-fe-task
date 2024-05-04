/** @format */

"use client";
import Image from "next/image";

const FilesIcon = () => {
  return (
    <div className="rounded-full w-[56px] h-[56px] bg-primary flex items-center justify-center">
      <Image
        src="/images/icons/files.png"
        alt="files-icon"
        width={24}
        height={34}
      />
    </div>
  );
};

export default FilesIcon;
