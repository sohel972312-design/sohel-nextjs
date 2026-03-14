// Shared SVGs used across multiple components

export const PhoneIconSVG = ({ className = "" }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path  fill="currentColor"
      d="M16 20c-1.771 0-3.655-0.502-5.6-1.492-1.793-0.913-3.564-2.22-5.122-3.78s-2.863-3.333-3.775-5.127c-0.988-1.946-1.49-3.83-1.49-5.601 0-1.148 1.07-2.257 1.529-2.68 0.661-0.609 1.701-1.32 2.457-1.32 0.376 0 0.816 0.246 1.387 0.774 0.425 0.394 0.904 0.928 1.383 1.544 0.289 0.372 1.73 2.271 1.73 3.182 0 0.747-0.845 1.267-1.739 1.816-0.346 0.212-0.703 0.432-0.961 0.639-0.276 0.221-0.325 0.338-0.333 0.364 0.949 2.366 3.85 5.267 6.215 6.215 0.021-0.007 0.138-0.053 0.363-0.333 0.207-0.258 0.427-0.616 0.639-0.961 0.55-0.894 1.069-1.739 1.816-1.739 0.911 0 2.81 1.441 3.182 1.73 0.616 0.479 1.15 0.958 1.544 1.383 0.528 0.57 0.774 1.011 0.774 1.387 0 0.756-0.711 1.799-1.319 2.463-0.424 0.462-1.533 1.537-2.681 1.537zM3.994 1c-0.268 0.005-0.989 0.333-1.773 1.055-0.744 0.686-1.207 1.431-1.207 1.945 0 6.729 8.264 15 14.986 15 0.513 0 1.258-0.465 1.944-1.213 0.723-0.788 1.051-1.512 1.056-1.781-0.032-0.19-0.558-0.929-1.997-2.037-1.237-0.952-2.24-1.463-2.498-1.469-0.018 0.005-0.13 0.048-0.357 0.336-0.197 0.251-0.408 0.594-0.613 0.926-0.56 0.911-1.089 1.772-1.858 1.772-0.124 0-0.246-0.024-0.363-0.071-2.625-1.05-5.729-4.154-6.779-6.779-0.126-0.315-0.146-0.809 0.474-1.371 0.33-0.299 0.786-0.579 1.228-0.851 0.332-0.204 0.676-0.415 0.926-0.613 0.288-0.227 0.331-0.339 0.336-0.357-0.007-0.258-0.517-1.261-1.469-2.498-1.108-1.439-1.847-1.964-2.037-1.997z"
    />
  </svg>
);

export const ArrowUpRightSVG = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000"
    strokeWidth="1"
    strokeLinecap="square"
    strokeLinejoin="miter"
    
  >
    <path d="M19 13V5h-8" />
    <path strokeLinecap="round" d="M19 5l-1 1" />
    <path d="M18 6L5 19" />
  </svg>
);

export const LogoSVG = ({ className = "" }) => (
  <svg
    className={`logo ${className}`}
    viewBox="0 0 1047 664"
    
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M305.224 32.8798L312.669 31.6391C316.391 45.2874 321.974 66.3801 321.974 90.5747C321.974 122.214 312.669 160.057 279.169 194.798C232.02 243.187 150.751 272.965 122.834 336.863C145.168 332.521 169.983 330.039 194.177 330.039C248.15 330.039 300.261 342.447 317.632 377.808C325.697 393.938 328.178 408.207 328.178 421.234C328.178 437.364 323.836 451.633 319.493 465.281C306.465 503.744 243.807 571.365 138.964 568.884C57.0745 566.402 0 502.503 0 429.92C0 403.864 7.4445 377.188 23.5742 351.132L34.741 357.336C29.1576 374.706 26.6761 390.836 26.6761 405.725C26.6761 461.559 64.519 500.642 137.723 503.744C225.196 507.466 288.474 449.772 301.502 415.031C285.372 391.456 235.742 383.392 189.835 383.392C166.881 383.392 145.168 385.253 128.418 388.355C101.741 384.632 83.1302 346.789 83.1302 307.706C83.1302 289.095 87.4728 270.483 96.7785 254.354C137.723 183.631 300.882 118.492 305.224 32.8798ZM168.122 628.44L203.483 591.837L240.085 628.44L203.483 663.801L168.122 628.44ZM93.6766 628.44L129.038 591.837L165.64 628.44L129.038 663.801L93.6766 628.44Z"
      fill="#FFC20C"
    ></path>
    <path
      d="M512.434 364.16C510.573 452.253 491.962 500.022 445.434 515.531C400.767 521.115 355.48 482.031 355.48 424.336V293.437L445.434 227.057C491.962 243.807 510.573 292.196 512.434 364.16ZM456.601 375.947V366.641C456.601 329.419 446.675 276.687 422.48 272.965L409.452 282.891V418.753C410.072 447.91 416.897 486.994 437.369 490.716C451.017 478.309 456.601 438.605 456.601 375.947ZM432.406 167.501L467.767 131.519L504.369 167.501L467.767 202.863L432.406 167.501ZM357.961 167.501L393.322 131.519L429.924 167.501L393.322 202.863L357.961 167.501Z"
      fill="white"
    ></path>
    <path
      d="M539.653 38.4632L594.246 0V259.317L630.848 226.437C679.238 241.946 697.849 287.854 697.849 362.299V586.254L643.876 540.967V366.641C643.876 325.697 637.052 282.891 604.793 279.169L594.246 288.474V515.531H539.653V38.4632Z"
      fill="white"
    ></path>
    <path
      d="M895.496 452.253L906.043 464.661L840.903 524.217C798.097 515.531 731.097 498.161 731.097 421.855V305.224L819.19 226.437C856.413 238.224 885.57 269.243 886.191 316.391C887.431 351.752 876.885 393.938 837.181 413.17L787.551 410.688V420.614C787.551 470.864 846.487 475.827 857.653 479.55L895.496 452.253ZM787.551 388.975H796.857C818.57 387.114 830.357 359.197 827.875 328.799C826.014 306.465 811.746 286.613 793.134 279.169L787.551 284.132V388.975ZM749.708 167.501L785.07 131.519L821.672 167.501L785.07 202.863L749.708 167.501ZM822.292 167.501L857.653 131.519L894.255 167.501L857.653 202.863L822.292 167.501Z"
      fill="white"
    ></path>
    <path
      d="M917.694 94.297L972.287 57.0745V392.697C972.287 434.883 981.593 465.281 1005.17 463.42L1036.81 439.225L1046.73 454.114L973.528 515.531C933.203 496.92 917.694 457.216 917.694 399.521V94.297Z"
      fill="white"
    ></path>
  </svg>
);

export const SocialLinks = () => (
  <ul className="flex flex-wrap items-center gap-2 mb-0 list-none p-0">
    <li>
      <a
        className="bg-brandgreen grid place-items-center group rounded-full w-8 h-8 transition duration-300 hover:border hover:border-brandyellow hover:bg-transparent"
        aria-label="GitHub"
        rel="noopener noreferrer"
        href="https://github.com/sohelmalek"
        target="_blank"
      >
        <svg className="w-4 h-4 transition duration-300 fill-black group-hover:fill-brandyellow"  viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:fill-brandyellow fill-black transition"
            d="M11.9531 0C5.18066 0 0 5.1416 0 11.9141C0 17.3291 3.4082 21.9629 8.27637 23.5938C8.90137 23.7061 9.12109 23.3203 9.12109 23.0029V20.0049C5.68848 20.7373 4.9707 18.5498 4.9707 18.5498C4.41406 17.1289 3.61328 16.7627 3.61328 16.7627C2.49512 15.9961 3.69141 16.0107 3.69141 16.0107C4.90723 16.1084 5.57617 17.2705 5.57617 17.2705C6.64551 19.1553 8.4375 18.6133 9.13574 18.291C9.24805 17.5098 9.56543 16.9678 9.91699 16.6455C7.1875 16.3428 4.43359 15.9473 4.43359 11.25C4.43359 9.90723 4.80469 9.2334 5.58594 8.37402C5.45898 8.05664 5.04395 6.74805 5.71289 5.05859C6.7334 4.74121 9.08203 6.37695 9.08203 6.37695C10.0586 6.10352 11.1084 5.96191 12.1484 5.96191C13.1885 5.96191 14.2383 6.10352 15.2148 6.37695C15.2148 6.37695 17.5635 4.73633 18.584 5.05859C19.2529 6.75293 18.8379 8.05664 18.7109 8.37402C19.4922 9.23828 19.9707 9.91211 19.9707 11.25C19.9707 15.9619 17.0947 16.3379 14.3652 16.6455C14.8145 17.0312 15.1953 17.7637 15.1953 18.9111V22.9932C15.1953 23.3105 15.4053 23.6963 16.0254 23.584C20.9082 21.9629 24.2188 17.3291 24.2188 11.9141C24.2188 5.1416 18.7256 0 11.9531 0Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </li>
    <li>
      <a
        className="bg-brandgreen grid place-items-center group rounded-full w-8 h-8 transition duration-300 hover:border hover:border-brandyellow hover:bg-transparent"
        aria-label="LinkedIn"
        rel="noopener noreferrer"
        href="https://in.linkedin.com/in/sohel-malek-b4b846196"
        target="_blank"
      >
        <svg className="w-4 h-4 transition duration-300 fill-black group-hover:fill-brandyellow"  viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:fill-brandyellow fill-black transition"
            d="M22.2857 0H1.70893C0.766071 0 0 0.776786 0 1.73036V22.2696C0 23.2232 0.766071 24 1.70893 24H22.2857C23.2286 24 24 23.2232 24 22.2696V1.73036C24 0.776786 23.2286 0 22.2857 0ZM7.25357 20.5714H3.69643V9.11786H7.25893V20.5714H7.25357ZM5.475 7.55357C4.33393 7.55357 3.4125 6.62679 3.4125 5.49107C3.4125 4.35536 4.33393 3.42857 5.475 3.42857C6.61071 3.42857 7.5375 4.35536 7.5375 5.49107C7.5375 6.63214 6.61607 7.55357 5.475 7.55357ZM20.5875 20.5714H17.0304V15C17.0304 13.6714 17.0036 11.9625 15.1821 11.9625C13.3286 11.9625 13.0446 13.4089 13.0446 14.9036V20.5714H9.4875V9.11786H12.9V10.6821H12.9482C13.425 9.78214 14.5875 8.83393 16.3179 8.83393C19.9179 8.83393 20.5875 11.2071 20.5875 14.2929V20.5714Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </li>
    <li>
      <a
        className="bg-brandgreen grid place-items-center group rounded-full w-8 h-8 transition duration-300 hover:border hover:border-brandyellow hover:bg-transparent"
        aria-label="Facebook"
        rel="noopener noreferrer"
        href="https://www.facebook.com/sohelmalek03"
        target="_blank"
      >
        <svg className="w-4 h-4 transition duration-300 fill-black group-hover:fill-brandyellow"  viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:fill-brandyellow fill-black transition"
            d="M24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.1533 4.42822 23.1631 10.2173 24.0723V15.6099H7.14111V12.1094H10.2173V9.44141C10.2173 6.40674 12.0239 4.73047 14.791 4.73047C16.1162 4.73047 17.502 4.9668 17.502 4.9668V7.94531H15.9746C14.4707 7.94531 14.0015 8.87891 14.0015 9.83643V12.1094H17.3599L16.8228 15.6099H14.0015V24.0723C19.7905 23.1631 24.2188 18.1533 24.2188 12.1094Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </li>
    <li>
      <a
        className="bg-brandgreen grid place-items-center group rounded-full w-8 h-8 transition duration-300 hover:border hover:border-brandyellow hover:bg-transparent"
        aria-label="Instagram"
        rel="noopener noreferrer"
        href="https://www.instagram.com/sohel_malek03"
        target="_blank"
      >
       <svg className="w-4 h-4 transition duration-300 fill-black group-hover:fill-brandyellow"  viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
          <path className="group-hover:fill-brandyellow fill-black transition"
            d="M12.0027 5.8467C8.59744 5.8467 5.85075 8.594 5.85075 12C5.85075 15.406 8.59744 18.1533 12.0027 18.1533C15.4079 18.1533 18.1546 15.406 18.1546 12C18.1546 8.594 15.4079 5.8467 12.0027 5.8467ZM12.0027 16.0004C9.80212 16.0004 8.00312 14.2064 8.00312 12C8.00312 9.7936 9.79677 7.99955 12.0027 7.99955C14.2086 7.99955 16.0022 9.7936 16.0022 12C16.0022 14.2064 14.2032 16.0004 12.0027 16.0004ZM19.8412 5.595C19.8412 6.39295 19.1987 7.03024 18.4062 7.03024C17.6085 7.03024 16.9713 6.38759 16.9713 5.595C16.9713 4.80241 17.6138 4.15977 18.4062 4.15977C19.1987 4.15977 19.8412 4.80241 19.8412 5.595ZM23.9157 7.05166C23.8247 5.12909 23.3856 3.42609 21.9775 2.02298C20.5747 0.619882 18.8721 0.180743 16.9499 0.0843468C14.9689-0.0281156 9.03112-0.0281156 7.05008 0.0843468C5.1333 0.175388 3.43068 0.614526 2.02253 2.01763C0.614389 3.42073 0.180703 5.12373 0.0843279 7.0463C-0.0281093 9.02778-0.0281093 14.9669 0.0843279 16.9483C0.175349 18.8709 0.614389 20.5739 2.02253 21.977C3.43068 23.3801 5.12794 23.8193 7.05008 23.9157C9.03112 24.0281 14.9689 24.0281 16.9499 23.9157C18.8721 23.8246 20.5747 23.3855 21.9775 21.977C23.3803 20.5739 23.8193 18.8709 23.9157 16.9483C24.0281 14.9669 24.0281 9.03314 23.9157 7.05166ZM21.3564 19.0744C20.9388 20.1241 20.1303 20.9327 19.0755 21.3558C17.496 21.9824 13.7481 21.8378 12.0027 21.8378C10.2572 21.8378 6.50396 21.977 4.92984 21.3558C3.88042 20.9381 3.07195 20.1294 2.64897 19.0744C2.02253 17.4946 2.16709 13.7458 2.16709 12C2.16709 10.2542 2.02789 6.50006 2.64897 4.92558C3.06659 3.87593 3.87507 3.06728 4.92984 2.6442C6.50931 2.01763 10.2572 2.16222 12.0027 2.16222C13.7481 2.16222 17.5014 2.02298 19.0755 2.6442C20.1249 3.06192 20.9334 3.87058 21.3564 4.92558C21.9828 6.50541 21.8383 10.2542 21.8383 12C21.8383 13.7458 21.9828 17.4999 21.3564 19.0744Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </li>
  </ul>
);

export const CheckIcon = () => (
  <svg
    className="check-icon"
    viewBox="0 0 24 24"
    
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const SectionBadge = ({ label, centerOnMobile = true }) => (
  <div
    className={`w-max relative mb-3 ${centerOnMobile ? "mx-auto" : ""}`}
  >
    <div className="absolute bg-brandyellow h-2 w-10 rounded-full top-1/2 -translate-y-1/2 left-0" />
    <div className="px-12 text-[#c7c7c7]">{label}</div>
    <div className="absolute bg-brandyellow h-2 w-10 rounded-full top-1/2 -translate-y-1/2 right-0" />
  </div>
);

export const GreenButton = ({
  href = "#contact",
  children,
  className = "",
}) => (
  <a
    className={`bg-brandgreen text-black border border-transparent hover:border-brandyellow hover:bg-transparent hover:text-brandyellow px-6 py-3 font-medium rounded-full transition duration-300 inline-block ${className}`}
    href={href}
  >
    <span className="flex items-center justify-center transform translate-z-0 transition duration-300">{children}</span>
  </a>
);

export const ServiceCardArrow = () => (
  <div className="bg-black p-4 pt-0 pl-4 rounded-tl-[2.5rem] absolute bottom-0 right-0">
    <a href="#" className="h-12 w-12 bg-brandgreen rounded-full relative grid place-items-center">
      <div className="w-8 h-8 absolute top-[-1.9rem] right-[-0.1rem] bg-black" style={{ maskImage: 'radial-gradient(circle at 0 0, transparent 70%, black 70%)', WebkitMaskImage: 'radial-gradient(circle at 0 0, transparent 70%, black 70%)' }}></div>
      <div className="w-8 h-8 absolute bottom-[-0.1rem] left-[-2.7rem] bg-black" style={{ maskImage: 'radial-gradient(circle at 0 0, transparent 70%, black 70%)', WebkitMaskImage: 'radial-gradient(circle at 0 0, transparent 70%, black 70%)' }}></div>
      <span className="transition duration-300 hover:rotate-45">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000"
          strokeWidth="1"
          strokeLinecap="square"
          strokeLinejoin="miter"
          
        >
          <path d="M19 13V5h-8" />
          <path strokeLinecap="round" d="M19 5l-1 1" />
          <path d="M18 6L5 19" />
        </svg>
      </span>
    </a>
  </div>
);
