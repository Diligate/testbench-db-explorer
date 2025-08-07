export const TOAST = {
  info: {
    title: "Info",
    
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2  fill-[#388a7c]"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  success: {
    title: "Success",
    
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 fill-[#388a7c]"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  warning: {
    color: "orange-500",
    title: "Warning",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 fill-orange-500"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  error: {
    color: "orange-500",
    title: "Error",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 fill-orange-500"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M4.47.22A.75.75 0 015 0h6a.75.75 0 01.53.22l4.25 4.25c.141.14.22.331.22.53v6a.75.75 0 01-.22.53l-4.25 4.25A.75.75 0 0111 16H5a.75.75 0 01-.53-.22L.22 11.53A.75.75 0 010 11V5a.75.75 0 01.22-.53L4.47.22zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5H5.31zM8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
};
