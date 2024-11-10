
import { useRef } from "react";

export const InputImage = ({ inputImageLabel, image }) => {
  const fileRef = useRef(null);

  const clickImage = () => {
    fileRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.file[0];

    console.log(file);
  };
  return (
    <div className="flex flex-col items-center mt-6">
      <img
        className="w-36 h-36 relative object-cover cursor-pointer mb-2"
        src={image}
        alt="imagem de perfil"
        onClick={clickImage}
      />
      <label className="" htmlFor="image">
        {inputImageLabel}
      </label>
          <input
        className="hidden"
        type="file"
        id="image"
        name="image"
        ref={fileRef}
        onChange={handleFileChange}
      />
    </div>
  );
};
