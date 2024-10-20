export default function ProfileMenu() {
  return (
    <div className="flex items-center gap-2 pl-5 text-gray-700 border-l-2 border-gray-300 ms-auto xs:gap-3 xl:gap-2">
      <div className="w-10 h-10 rounded-full bg-slate-400"></div>

      <div className="inline-flex items-center overflow-hidden rounded-md">
        {/* <div className="inline-flex items-center overflow-hidden bg-white border rounded-md"> */}
        <a
          href="#first"
          className="py-2 text-lg text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          John
        </a>

        <button className="h-full text-gray-600">
          {/* <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"> */}
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
