import React, { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <>
      <div class="sidebar">
        <div>
          <button
            id="button1"
            className={`sidebar-button ${activeButton === 1 ? "active" : ""}`}
            onClick={() => handleButtonClick(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M28.6851 11.5195V6.26868C28.6851 4.20217 27.8533 3.37036 25.7868 3.37036H20.536C18.4695 3.37036 17.6377 4.20217 17.6377 6.26868V11.5195C17.6377 13.586 18.4695 14.4178 20.536 14.4178H25.7868C27.8533 14.4178 28.6851 13.586 28.6851 11.5195Z"
                stroke={`${activeButton === 1 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.94954"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.7386 11.8444V5.94376C13.7386 4.11119 12.9068 3.37036 10.8403 3.37036H5.58955C3.52303 3.37036 2.69122 4.11119 2.69122 5.94376V11.8314C2.69122 13.677 3.52303 14.4048 5.58955 14.4048H10.8403C12.9068 14.4178 13.7386 13.677 13.7386 11.8444Z"
                stroke={`${activeButton === 1 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.94954"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.7386 26.466V21.2152C13.7386 19.1487 12.9068 18.3169 10.8403 18.3169H5.58955C3.52303 18.3169 2.69122 19.1487 2.69122 21.2152V26.466C2.69122 28.5325 3.52303 29.3643 5.58955 29.3643H10.8403C12.9068 29.3643 13.7386 28.5325 13.7386 26.466Z"
                stroke={`${activeButton === 1 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.94954"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.5872 20.9163H27.3854"
                stroke={`${activeButton === 1 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.94954"
                stroke-linecap="round"
              />
              <path
                d="M19.5872 26.1151H27.3854"
                stroke={`${activeButton === 1 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.94954"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button
            id="button2"
            className={`sidebar-button ${activeButton === 2 ? "active" : ""}`}
            onClick={() => handleButtonClick(2)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M26.7062 23.3165L26.705 23.3164C26.5191 23.3028 26.3839 23.1363 26.3959 22.9722L25.7478 22.9247L26.3954 22.9787C26.4107 22.7955 26.4107 22.6038 26.4106 22.4548V22.4438V9.44689C26.4106 8.2757 26.3566 7.29593 26.188 6.49286C26.018 5.6826 25.7219 5.00517 25.2038 4.48602C24.6856 3.9668 24.0085 3.66917 23.1973 3.49793C22.3934 3.32823 21.4118 3.27333 20.2371 3.27333H11.1392C9.96451 3.27333 8.9829 3.32823 8.17896 3.49793C7.36778 3.66917 6.6907 3.9668 6.17253 4.48602C5.65444 5.00517 5.35833 5.6826 5.18827 6.49286C5.01972 7.29593 4.96565 8.2757 4.96565 9.44689V23.7435C4.96565 23.9175 4.8147 24.0685 4.64073 24.0685C4.46675 24.0685 4.3158 23.9175 4.3158 23.7435V9.44689C4.3158 6.60344 4.75854 4.97458 5.71272 4.0204C6.6669 3.06622 8.29576 2.62348 11.1392 2.62348H20.2371C23.0805 2.62348 24.7094 3.06622 25.6636 4.0204C26.6178 4.97458 27.0605 6.60344 27.0605 9.44689V22.4438C27.0605 22.6528 27.0603 22.8268 27.049 23.0098C27.0343 23.1899 26.8602 23.328 26.7062 23.3165Z"
                fill="#292D32"
                stroke={`${activeButton === 2 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.2997"
              />
              <path
                d="M26.4106 20.8192V20.1694H25.7608H8.34486C6.47831 20.1694 4.96565 21.682 4.96565 23.5486V24.3934C4.96565 26.7278 6.85522 28.6174 9.18966 28.6174H22.1866C24.5211 28.6174 26.4106 26.7278 26.4106 24.3934V20.8192ZM22.1866 29.2673H9.18966C6.50728 29.2673 4.3158 27.0758 4.3158 24.3934V23.5486C4.3158 21.3223 6.12919 19.5195 8.34486 19.5195H26.7356C26.9095 19.5195 27.0605 19.6705 27.0605 19.8445V24.3934C27.0605 27.0758 24.869 29.2673 22.1866 29.2673Z"
                fill="#292D32"
                stroke={`${activeButton === 2 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.2997"
              />
              <path
                d="M20.8869 9.77186H10.4894C10.3154 9.77186 10.1644 9.62091 10.1644 9.44694C10.1644 9.27297 10.3154 9.12202 10.4894 9.12202H20.8869C21.0609 9.12202 21.2119 9.27297 21.2119 9.44694C21.2119 9.62091 21.0609 9.77186 20.8869 9.77186Z"
                fill="#292D32"
                stroke={`${activeButton === 2 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.2997"
              />
              <path
                d="M16.9878 14.3208H10.4894C10.3154 14.3208 10.1644 14.1698 10.1644 13.9958C10.1644 13.8219 10.3154 13.6709 10.4894 13.6709H16.9878C17.1618 13.6709 17.3128 13.8219 17.3128 13.9958C17.3128 14.1698 17.1618 14.3208 16.9878 14.3208Z"
                fill="#292D32"
                stroke={`${activeButton === 2 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.2997"
              />
            </svg>
          </button>
          <button
            id="button3"
            className={`sidebar-button ${activeButton === 3 ? "active" : ""}`}
            onClick={() => handleButtonClick(3)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M13.1538 4.21537L5.32961 9.32318C2.8212 10.9608 2.8212 14.6259 5.32961 16.2636L13.1538 21.3714C14.5575 22.2942 16.8709 22.2942 18.2746 21.3714L26.0598 16.2636C28.5552 14.6259 28.5552 10.9738 26.0598 9.33618L18.2746 4.22837C16.8709 3.29259 14.5575 3.29259 13.1538 4.21537Z"
                stroke={`${activeButton === 3 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.94954"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.40912 17.9272L7.39612 24.0228C7.39612 25.6734 8.66982 27.441 10.2295 27.9608L14.3755 29.3385C15.0903 29.5725 16.273 29.5725 17.0009 29.3385L21.1469 27.9608C22.7065 27.441 23.9802 25.6734 23.9802 24.0228V17.9922"
                stroke={`${activeButton === 3 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.94954"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.9053 20.4226V12.6245"
                stroke={`${activeButton === 3 ? "#3366FF" : "#8F9BB3"}`}
                stroke-width="1.94954"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <button
          id="button4"
          className={`sidebar-button ${activeButton === 4 ? "active" : ""}`}
          onClick={() => handleButtonClick(4)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M24.0971 21.9573L24.604 26.0643C24.734 27.1431 23.5773 27.8969 22.6545 27.338L17.2087 24.1018C16.6109 24.1018 16.026 24.0628 15.4542 23.9848C16.4159 22.8541 16.9878 21.4244 16.9878 19.8778C16.9878 16.1866 13.7905 13.1974 9.83947 13.1974C8.33182 13.1974 6.94115 13.6262 5.78442 14.3801C5.74543 14.0551 5.73242 13.7302 5.73242 13.3923C5.73242 7.47867 10.8662 2.6828 17.2087 2.6828C23.5513 2.6828 28.6851 7.47867 28.6851 13.3923C28.6851 16.9015 26.8785 20.0078 24.0971 21.9573Z"
              stroke={`${activeButton === 4 ? "#3366FF" : "#8F9BB3"}`}
              stroke-width="1.94954"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.9879 19.8778C16.9879 21.4244 16.416 22.8541 15.4543 23.9849C14.1676 25.5445 12.127 26.5452 9.83955 26.5452L6.44734 28.5597C5.87548 28.9106 5.14765 28.4298 5.22563 27.7669L5.55055 25.2066C3.80896 23.9979 2.69122 22.0613 2.69122 19.8778C2.69122 17.5903 3.91294 15.5758 5.78451 14.3801C6.94124 13.6263 8.33191 13.1974 9.83955 13.1974C13.7906 13.1974 16.9879 16.1866 16.9879 19.8778Z"
              stroke={`${activeButton === 4 ? "#3366FF" : "#8F9BB3"}`}
              stroke-width="1.94954"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div>
          <button
            id="button5"
            className={`sidebar-button ${activeButton === 5 ? "active" : ""}`}
            onClick={() => handleButtonClick(5)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M3.99091 11.8688V19.368C3.99091 22.1234 3.99091 22.1234 6.5903 23.878L13.7386 28.011C14.8174 28.6349 16.572 28.6349 17.6377 28.011L24.786 23.878C27.3854 22.1234 27.3854 22.1234 27.3854 19.381V11.8688C27.3854 9.12642 27.3854 9.12642 24.786 7.37183L17.6377 3.2388C16.572 2.61494 14.8174 2.61494 13.7386 3.2388L6.5903 7.37183C3.99091 9.12642 3.99091 9.12642 3.99091 11.8688Z"
                stroke="#8F9BB3"
                stroke-width="1.94954"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.6882 19.524C17.8416 19.524 19.5872 17.7783 19.5872 15.6249C19.5872 13.4715 17.8416 11.7258 15.6882 11.7258C13.5347 11.7258 11.7891 13.4715 11.7891 15.6249C11.7891 17.7783 13.5347 19.524 15.6882 19.524Z"
                stroke="#8F9BB3"
                stroke-width="1.94954"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            id="button6"
            className={`sidebar-button ${activeButton === 6 ? "active" : ""}`}
            onClick={() => handleButtonClick(6)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M22.7585 19.6082L26.0857 16.281L22.7585 12.9538"
                stroke="#8F9BB3"
                stroke-width="1.94954"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.7769 16.281H25.9948"
                stroke="#8F9BB3"
                stroke-width="1.94954"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.3763 26.6006C9.63161 26.6006 4.9787 22.7015 4.9787 16.203C4.9787 9.70454 9.63161 5.80545 15.3763 5.80545"
                stroke="#8F9BB3"
                stroke-width="1.94954"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
