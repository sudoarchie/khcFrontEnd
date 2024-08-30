import Link from "next/link";

export function Sidebar() {
  return (
    <div className="relative flex h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
      <div className="p-4 mb-2">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          KHC Online Education
        </h5>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
        <div className="text-sm font-bold">Management</div>
        <Link href="/admin/dashboard">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-secondary/20 hover:bg-opacity-80 hover:text-secondary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-secondary/80 active:bg-opacity-80 active:text-secondary"
          >
            <div className="grid mr-4 place-items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 18C1.45 18 0.975 17.8083 0.575 17.425C0.191667 17.025 0 16.55 0 16V2C0 1.45 0.191667 0.983334 0.575 0.600001C0.975 0.2 1.45 0 2 0H16C16.55 0 17.0167 0.2 17.4 0.600001C17.8 0.983334 18 1.45 18 2V16C18 16.55 17.8 17.025 17.4 17.425C17.0167 17.8083 16.55 18 16 18H2ZM9 13C9.63333 13 10.2083 12.8167 10.725 12.45C11.2417 12.0833 11.6 11.6 11.8 11H16V2H2V11H6.2C6.4 11.6 6.75833 12.0833 7.275 12.45C7.79167 12.8167 8.36667 13 9 13Z"
                  fill="#007867"
                />
              </svg>
            </div>
            Dashboard
          </div>
        </Link>
        <Link href="/admin/dashboard/students">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-secondary/20 hover:bg-opacity-80 hover:text-secondary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-secondary/80 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                  fill="#625B71"
                />
              </svg>
            </div>
            Students
          </div>
        </Link>
        <Link href="/admin/dashboard/teachers">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-secondary/20 hover:bg-opacity-80 hover:text-secondary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-secondary/80 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16V13.225C0 12.6583 0.141667 12.1333 0.425 11.65C0.708333 11.1667 1.1 10.8 1.6 10.55C1.83333 10.4333 2.05833 10.325 2.275 10.225C2.50833 10.125 2.75 10.0333 3 9.95V16H0ZM4 9C3.16667 9 2.45833 8.70833 1.875 8.125C1.29167 7.54167 1 6.83333 1 6C1 5.16667 1.29167 4.45833 1.875 3.875C2.45833 3.29167 3.16667 3 4 3C4.83333 3 5.54167 3.29167 6.125 3.875C6.70833 4.45833 7 5.16667 7 6C7 6.83333 6.70833 7.54167 6.125 8.125C5.54167 8.70833 4.83333 9 4 9ZM4 7C4.28333 7 4.51667 6.90833 4.7 6.725C4.9 6.525 5 6.28333 5 6C5 5.71667 4.9 5.48333 4.7 5.3C4.51667 5.1 4.28333 5 4 5C3.71667 5 3.475 5.1 3.275 5.3C3.09167 5.48333 3 5.71667 3 6C3 6.28333 3.09167 6.525 3.275 6.725C3.475 6.90833 3.71667 7 4 7ZM4 16V13.2C4 12.6333 4.14167 12.1167 4.425 11.65C4.725 11.1667 5.11667 10.8 5.6 10.55C6.63333 10.0333 7.68333 9.65 8.75 9.4C9.81667 9.13333 10.9 9 12 9C13.1 9 14.1833 9.13333 15.25 9.4C16.3167 9.65 17.3667 10.0333 18.4 10.55C18.8833 10.8 19.2667 11.1667 19.55 11.65C19.85 12.1167 20 12.6333 20 13.2V16H4ZM6 14H18V13.2C18 13.0167 17.95 12.85 17.85 12.7C17.7667 12.55 17.65 12.4333 17.5 12.35C16.6 11.9 15.6917 11.5667 14.775 11.35C13.8583 11.1167 12.9333 11 12 11C11.0667 11 10.1417 11.1167 9.225 11.35C8.30833 11.5667 7.4 11.9 6.5 12.35C6.35 12.4333 6.225 12.55 6.125 12.7C6.04167 12.85 6 13.0167 6 13.2V14ZM12 8C10.9 8 9.95833 7.60833 9.175 6.825C8.39167 6.04167 8 5.1 8 4C8 2.9 8.39167 1.95833 9.175 1.175C9.95833 0.391667 10.9 0 12 0C13.1 0 14.0417 0.391667 14.825 1.175C15.6083 1.95833 16 2.9 16 4C16 5.1 15.6083 6.04167 14.825 6.825C14.0417 7.60833 13.1 8 12 8ZM12 6C12.55 6 13.0167 5.80833 13.4 5.425C13.8 5.025 14 4.55 14 4C14 3.45 13.8 2.98333 13.4 2.6C13.0167 2.2 12.55 2 12 2C11.45 2 10.975 2.2 10.575 2.6C10.1917 2.98333 10 3.45 10 4C10 4.55 10.1917 5.025 10.575 5.425C10.975 5.80833 11.45 6 12 6ZM20 9C19.1667 9 18.4583 8.70833 17.875 8.125C17.2917 7.54167 17 6.83333 17 6C17 5.16667 17.2917 4.45833 17.875 3.875C18.4583 3.29167 19.1667 3 20 3C20.8333 3 21.5417 3.29167 22.125 3.875C22.7083 4.45833 23 5.16667 23 6C23 6.83333 22.7083 7.54167 22.125 8.125C21.5417 8.70833 20.8333 9 20 9ZM20 7C20.2833 7 20.5167 6.90833 20.7 6.725C20.9 6.525 21 6.28333 21 6C21 5.71667 20.9 5.48333 20.7 5.3C20.5167 5.1 20.2833 5 20 5C19.7167 5 19.475 5.1 19.275 5.3C19.0917 5.48333 19 5.71667 19 6C19 6.28333 19.0917 6.525 19.275 6.725C19.475 6.90833 19.7167 7 20 7ZM21 16V9.95C21.25 10.0333 21.4833 10.125 21.7 10.225C21.9333 10.325 22.1667 10.4333 22.4 10.55C22.9 10.8 23.2917 11.1667 23.575 11.65C23.8583 12.1333 24 12.6583 24 13.225V16H21Z"
                  fill="#49454F"
                />
              </svg>
            </div>
            Teachers
          </div>
        </Link>
        <hr></hr>
        <div className="text-sm font-bold">Material</div>
        <Link href="/admin/dashboard/worksheetandnotices">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-secondary/20 hover:bg-opacity-80 hover:text-secondary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-secondary/80 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8L10 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2Z"
                  fill="#625B71"
                />
              </svg>
            </div>
            Worksheets and Notices
          </div>
        </Link>
        <Link href="/admin/dashboard/management">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-secondary/20 hover:bg-opacity-80 hover:text-secondary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-secondary/80 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.25001 22L8.85001 18.8C8.63335 18.7167 8.42918 18.6167 8.23751 18.5C8.04585 18.3833 7.85835 18.2583 7.67501 18.125L4.70001 19.375L1.95001 14.625L4.52501 12.675C4.50835 12.5583 4.50001 12.4458 4.50001 12.3375V11.6625C4.50001 11.5542 4.50835 11.4417 4.52501 11.325L1.95001 9.375L4.70001 4.625L7.67501 5.875C7.85835 5.74167 8.05001 5.61667 8.25001 5.5C8.45001 5.38333 8.65001 5.28333 8.85001 5.2L9.25001 2H14.75L15.15 5.2C15.3667 5.28333 15.5708 5.38333 15.7625 5.5C15.9542 5.61667 16.1417 5.74167 16.325 5.875L19.3 4.625L22.05 9.375L19.475 11.325C19.4917 11.4417 19.5 11.5542 19.5 11.6625V12.3375C19.5 12.4458 19.4833 12.5583 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125C16.1417 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.75 22H9.25001ZM12.05 15.5C13.0167 15.5 13.8417 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8417 8.84167 13.0167 8.5 12.05 8.5C11.0667 8.5 10.2375 8.84167 9.56251 9.525C8.88751 10.2083 8.55001 11.0333 8.55001 12C8.55001 12.9667 8.88751 13.7917 9.56251 14.475C10.2375 15.1583 11.0667 15.5 12.05 15.5Z"
                  fill="#625B71"
                />
              </svg>
            </div>
            Managment
          </div>
        </Link>
        <Link href="/admin/dashboard/countrywisesubject">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-secondary/20 hover:bg-opacity-80 hover:text-secondary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-secondary/80 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.2625 9.32083 2.7875 8.1125C3.3125 6.90417 4.02917 5.84583 4.9375 4.9375C5.84583 4.02917 6.90833 3.3125 8.125 2.7875C9.34167 2.2625 10.6333 2 12 2C13.3833 2 14.6792 2.2625 15.8875 2.7875C17.0958 3.3125 18.1542 4.02917 19.0625 4.9375C19.9708 5.84583 20.6875 6.90417 21.2125 8.1125C21.7375 9.32083 22 10.6167 22 12C22 13.3667 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.9708 18.1542 19.0625 19.0625C18.1542 19.9708 17.0958 20.6875 15.8875 21.2125C14.6792 21.7375 13.3833 22 12 22ZM12 19.95C12.4333 19.35 12.8083 18.725 13.125 18.075C13.4417 17.425 13.7 16.7333 13.9 16H10.1C10.3 16.7333 10.5583 17.425 10.875 18.075C11.1917 18.725 11.5667 19.35 12 19.95ZM9.4 19.55C9.1 19 8.8375 18.4292 8.6125 17.8375C8.3875 17.2458 8.2 16.6333 8.05 16H5.1C5.58333 16.8333 6.1875 17.5583 6.9125 18.175C7.6375 18.7917 8.46667 19.25 9.4 19.55ZM14.6 19.55C15.5333 19.25 16.3625 18.7917 17.0875 18.175C17.8125 17.5583 18.4167 16.8333 18.9 16H15.95C15.8 16.6333 15.6125 17.2458 15.3875 17.8375C15.1625 18.4292 14.9 19 14.6 19.55ZM4.25 14H7.65C7.6 13.6667 7.5625 13.3375 7.5375 13.0125C7.5125 12.6875 7.5 12.35 7.5 12C7.5 11.65 7.5125 11.3125 7.5375 10.9875C7.5625 10.6625 7.6 10.3333 7.65 10H4.25C4.16667 10.3333 4.10417 10.6625 4.0625 10.9875C4.02083 11.3125 4 11.65 4 12C4 12.35 4.02083 12.6875 4.0625 13.0125C4.10417 13.3375 4.16667 13.6667 4.25 14ZM9.65 14H14.35C14.4 13.6667 14.4375 13.3375 14.4625 13.0125C14.4875 12.6875 14.5 12.35 14.5 12C14.5 11.65 14.4875 11.3125 14.4625 10.9875C14.4375 10.6625 14.4 10.3333 14.35 10H9.65C9.6 10.3333 9.5625 10.6625 9.5375 10.9875C9.5125 11.3125 9.5 11.65 9.5 12C9.5 12.35 9.5125 12.6875 9.5375 13.0125C9.5625 13.3375 9.6 13.6667 9.65 14ZM16.35 14H19.75C19.8333 13.6667 19.8958 13.3375 19.9375 13.0125C19.9792 12.6875 20 12.35 20 12C20 11.65 19.9792 11.3125 19.9375 10.9875C19.8958 10.6625 19.8333 10.3333 19.75 10H16.35C16.4 10.3333 16.4375 10.6625 16.4625 10.9875C16.4875 11.3125 16.5 11.65 16.5 12C16.5 12.35 16.4875 12.6875 16.4625 13.0125C16.4375 13.3375 16.4 13.6667 16.35 14ZM15.95 8H18.9C18.4167 7.16667 17.8125 6.44167 17.0875 5.825C16.3625 5.20833 15.5333 4.75 14.6 4.45C14.9 5 15.1625 5.57083 15.3875 6.1625C15.6125 6.75417 15.8 7.36667 15.95 8ZM10.1 8H13.9C13.7 7.26667 13.4417 6.575 13.125 5.925C12.8083 5.275 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.275 10.875 5.925C10.5583 6.575 10.3 7.26667 10.1 8ZM5.1 8H8.05C8.2 7.36667 8.3875 6.75417 8.6125 6.1625C8.8375 5.57083 9.1 5 9.4 4.45C8.46667 4.75 7.6375 5.20833 6.9125 5.825C6.1875 6.44167 5.58333 7.16667 5.1 8Z"
                  fill="#49454F"
                />
              </svg>
            </div>
            Countrywise Subject
          </div>
        </Link>
        <hr></hr>
        <div className="text-sm font-bold">Other</div>
        <Link href="/admin/dashboard/contact">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-secondary/20 hover:bg-opacity-80 hover:text-secondary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-secondary/80 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 20C3.45 20 2.975 19.8083 2.575 19.425C2.19167 19.025 2 18.55 2 18V6C2 5.45 2.19167 4.98333 2.575 4.6C2.975 4.2 3.45 4 4 4H20C20.55 4 21.0167 4.2 21.4 4.6C21.8 4.98333 22 5.45 22 6V18C22 18.55 21.8 19.025 21.4 19.425C21.0167 19.8083 20.55 20 20 20H4ZM12 13L20 8V6L12 11L4 6V8L12 13Z"
                  fill="#49454F"
                />
              </svg>
            </div>
            Contact
          </div>
        </Link>
        <Link href="/admin/dashboard/blogs">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-secondary/20 hover:bg-opacity-80 hover:text-secondary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-secondary/80 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4L0 20Z"
                  fill="#49454F"
                />
              </svg>
            </div>
            Blog
          </div>
        </Link>
        <Link href="/admin">
          <div
            role="button"
            className="flex items-center w-full p-3 leading-tight transition-all rounded-full outline-none text-start hover:bg-secondary/20 hover:bg-opacity-80 hover:text-secondary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-secondary/80 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <div className="grid mr-4 place-items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                  fill="#49454F"
                />
              </svg>
            </div>
            Log Out
          </div>
        </Link>
      </nav>
    </div>
  );
}
