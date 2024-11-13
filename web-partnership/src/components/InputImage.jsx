import React, { useRef } from "react";
import { Camera } from "lucide-react";

export const InputImage = ({ inputImageLabel, image, onChange }) => {
  const fileRef = useRef(null);

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative cursor-pointer group"
        onClick={() => fileRef.current?.click()}
      >
        <img
          className="w-36 h-36 object-cover rounded-lg border-2 border-gray-200"
          src={image}
          alt="Company logo"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <Camera className="text-white" size={24} />
        </div>
      </div>
      <label className="mt-2 text-sm text-gray-600">{inputImageLabel}</label>
      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={fileRef}
        onChange={onChange}
      />
    </div>
  );
};
