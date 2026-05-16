import { createContext, useEffect, useRef, useState } from "react";

const CloudinaryScriptContext = createContext();

function UploadWidget({ uwConfig, setAvatar }) {
  const [loaded, setLoaded] = useState(false);
  const widgetRef = useRef(null); 

  useEffect(() => {
    const uwScript = document.getElementById("uw");
    if (!uwScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "uw");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, []);

  const handleClick = () => {
    if (!loaded) return;

    if (!widgetRef.current) {
      widgetRef.current = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            setAvatar(result.info.secure_url); 
          }
        }
      );
    }

    widgetRef.current.open(); 
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        className="
          px-6 py-3
          bg-teal-600
          text-white
          rounded-md
          font-medium
          hover:bg-teal-700
          transition
        "
        onClick={handleClick}
      >
        Upload Photo
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };