"use client";

export default function CarouselNavigation() {
  return (
    <div className="absolute  left-1/2 -translate-x-1/2 flex items-center gap-6 z-10">
      {/* Prev Button */}
      <div className="swiper-button-prev-custom cursor-pointer">
        <svg
          width="37"
          height="36"
          viewBox="0 0 37 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.08984"
            y="0.5"
            width="35"
            height="35"
            rx="17.5"
            stroke="#EEEEEE"
            strokeOpacity="0.933333"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.7468 18.7106L17.0898 24.3676L15.6758 22.9536L20.6258 18.0036L15.6758 13.0536L17.0898 11.6396L22.7468 17.2966C22.9343 17.4842 23.0396 17.7385 23.0396 18.0036C23.0396 18.2688 22.9343 18.5231 22.7468 18.7106Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Middle Icon */}
      <div>
        <svg
          width="64"
          height="26"
          viewBox="0 0 64 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.375 12.125V15.875H6.24977V12.125H4.375ZM15.625 5.25H13.7502V22.75H15.625V5.25ZM9.03191 8.375V19.625H10.9677V8.375H9.03191Z"
            fill="white"
          />
          <path
            d="M39.3707 5.41836V20.5867H24.2074V5.41836H39.3707ZM39.3707 3.25H24.2074C23.0141 3.25 22.0391 4.225 22.0391 5.41836V20.5867C22.0391 21.7801 23.0141 22.7551 24.2074 22.7551H39.3758C40.5691 22.7551 41.5441 21.7801 41.5441 20.5867V5.41836C41.5391 4.225 40.5641 3.25 39.3707 3.25Z"
            fill="white"
          />
          <path
            d="M59.2148 15.875V12.125H57.3401V15.875H59.2148ZM47.9648 22.75H49.8396V5.25H47.9648V22.75ZM54.5579 19.625V8.375H52.6222V19.625H54.5579Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Next Button */}
      <div className="swiper-button-next-custom cursor-pointer">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-0.5"
            y="0.5"
            width="35"
            height="35"
            rx="17.5"
            transform="matrix(-1 0 0 1 35 0)"
            stroke="#EEEEEE"
            strokeOpacity="0.933333"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8431 18.7106L19.5001 24.3676L20.9141 22.9536L15.9641 18.0036L20.9141 13.0536L19.5001 11.6396L13.8431 17.2966C13.6556 17.4842 13.5503 17.7385 13.5503 18.0036C13.5503 18.2688 13.6556 18.5231 13.8431 18.7106Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
