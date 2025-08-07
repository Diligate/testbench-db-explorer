import { useEffect, useState } from "react";

export default function Alert({ svg, title, text, isShown = true, color }) {
  const [show, setShow] = useState(isShown);
  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 8000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="float-right min-w-min max-w-max flex flex-row justify-end mr-3">
      {show && (
        <div
          className={
            color
              ? ` border-2 border-${color} rounded  text-sm p-4 flex justify-between items-center bg-white z-10 `
              : ` border-2 border-[#3e9688] rounded  text-sm p-4 flex justify-between items-center bg-white z-10 `
          }
        >
          <div>
            <div className="flex items-center ">
              <span className={`fill-current h-4 w-4 mr-2 `}>{svg}</span>
              <p className="text-gray-500">
                <span className={` font-bold text-${color} `}>{title}: </span>
                {text}
              </p>
            </div>
          </div>

          <div
            data-test="test"
            className={`pl-8 text-${color}`}
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={` h-6 w-6 cursor-pointer `}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
