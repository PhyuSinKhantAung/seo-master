import React from "react";

export default function Button({ isPrimary, children }) {
  return (
    <>
      {isPrimary ? (
        <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-opacity-80">
          {children}
        </button>
      ) : (
        <button className="px-4 py-2 bg-paleBlue text-white rounded-full hover:bg-opacity-80">
          {children}
        </button>
      )}
    </>
  );
}
