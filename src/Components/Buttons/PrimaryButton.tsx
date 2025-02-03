import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps } from "../../Types/Props";
import {
    faChevronRight,
    faChevronLeft,
  } from "@fortawesome/free-solid-svg-icons";


const PrimaryButton = ({
    isNext,
    linkTo,
    text,
    validation = true,
  }: ButtonProps) => {
    if (validation) {
      return (
        <Link
          to={linkTo}
          className="grow shrink basis-0 self-stretch px-32 py-3 bg-slate-900 rounded-lg justify-center items-center flex"
        >
          {isNext ? (
            <>
              <div className="flex gap-4 text-center text-white text-base font-semibold font-['Inter']">
                {text}
                <div className="w-6 h-6">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{ color: "#ffffff" }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-4 text-center text-white text-base font-semibold font-['Inter']">
                <div className="w-6 h-6">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    style={{ color: "#ffffff" }}
                  />
                </div>
                {text}
              </div>
            </>
          )}
        </Link>
      );
    }
    return (
      <button
        disabled
        className="grow shrink basis-0 self-stretch px-32 py-3 bg-slate-500 rounded-lg justify-center items-center flex disabled:pointer-events-none"
      >
        {isNext ? (
          <>
            <div className="flex gap-4 text-center text-white text-base font-semibold font-['Inter']">
              {text}
              <div className="w-6 h-6">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#ffffff" }}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-4 text-center text-white text-base font-semibold font-['Inter']">
              <div className="w-6 h-6">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ color: "#ffffff" }}
                />
              </div>
              {text}
            </div>
          </>
        )}
      </button>
    );
  };

export default PrimaryButton;