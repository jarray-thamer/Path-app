import { IoCheckmark } from "react-icons/io5";

const Survey = () => {
  return (
    <div className="flex mx-auto justify-center items-center">
      <div className="flex flex-col my-auto mx-6">
        <h1
          className="font-bold text-left text-3xl leading-10"
          style={{ color: "#1E232C" }}
        >
          welcome back! Glad to see you, Again!
        </h1>

        {/* choices container */}
        {/* Portfolio */}
        <div className="flex flex-col my-9">
          <ul className="">
            <li>
              <input
                type="radio"
                id="portfolio"
                name="hosting"
                value="portfolio"
                className="hidden peer"
                required
              />
              <label
                htmlFor="portfolio"
                style={{ border: "1px solid #022F5E" }}
                className="inline-flex items-center justify-between w-full p-5 rounded-lg cursor-pointer hover:bg-black"
              >
                <div className="block">
                  <p className="w-full text-lg font-semibold checked: text-white">
                    I Dont't know how to create my portfolio
                  </p>
                </div>

                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.25C6.62391 2.25 2.25 6.62391 2.25 12C2.25 17.3761 6.62391 21.75 12 21.75C17.3761 21.75 21.75 17.3761 21.75 12C21.75 6.62391 17.3761 2.25 12 2.25ZM17.0742 8.73234L10.7742 16.2323C10.7051 16.3147 10.6191 16.3812 10.5221 16.4273C10.425 16.4735 10.3192 16.4983 10.2117 16.5H10.1991C10.0939 16.5 9.99 16.4778 9.89398 16.435C9.79797 16.3922 9.71202 16.3297 9.64172 16.2516L6.94172 13.2516C6.87315 13.1788 6.81981 13.0931 6.78483 12.9995C6.74986 12.9059 6.73395 12.8062 6.73805 12.7063C6.74215 12.6064 6.76617 12.5084 6.8087 12.4179C6.85124 12.3275 6.91142 12.2464 6.98572 12.1796C7.06002 12.1127 7.14694 12.0614 7.24136 12.0286C7.33579 11.9958 7.43581 11.9822 7.53556 11.9886C7.63531 11.995 7.73277 12.0213 7.82222 12.0659C7.91166 12.1106 7.99128 12.1726 8.05641 12.2484L10.1794 14.6072L15.9258 7.76766C16.0547 7.61863 16.237 7.52631 16.4335 7.51066C16.6299 7.49501 16.8246 7.55728 16.9754 7.68402C17.1263 7.81075 17.2212 7.99176 17.2397 8.18793C17.2582 8.3841 17.1988 8.57966 17.0742 8.73234Z"
                    fill="white"
                  />
                </svg>
              </label>
            </li>
            {/* Price */}
            <li>
              <input
                type="radio"
                id="hosting-big"
                name="hosting"
                value="hosting-big"
                className="hidden peer"
              />
              <label
                htmlFor="hosting-big"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 peer-checked:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">
                    500-1000 MB
                  </div>
                  <div className="w-full">Good for large websites</div>
                </div>
                <svg
                  className="w-5 h-5 ms-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Survey;
