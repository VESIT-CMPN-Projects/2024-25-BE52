export default function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ translate: "0px -50px", height: "80vh" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="5rem"
        height="5rem"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path
            strokeDasharray="16"
            strokeDashoffset="16"
            d="M12 3c4.97 0 9 4.03 9 9"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.3s"
              values="16;0"
            />
            <animateTransform
              attributeName="transform"
              dur="1.5s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
          <path
            strokeDasharray="64"
            strokeDashoffset="64"
            strokeOpacity="0.3"
            d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="1.2s"
              values="64;0"
            />
          </path>
        </g>
      </svg>
    </div>
  );
}
