import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const NextBtn = ({linkTo, validation} : {linkTo : string, validation : boolean}) => {
    if (validation) {
        return (
            <Link to={linkTo} className="grow shrink basis-0 self-stretch px-32 py-3 bg-slate-900 rounded-[33px] justify-center items-center flex disabled:pointer-events-none">
                <div className="text-center px-2 text-white text-base font-semibold font-['Inter'] leading-normal whitespace-nowrap">다음</div>
                <div className="w-6 h-6 relative">
                    <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff", }} />
                </div>
            </Link>
        );
    }
    return (
        <button disabled className="grow shrink basis-0 self-stretch px-32 py-3 bg-slate-500 rounded-[33px] justify-center items-center flex disabled:pointer-events-none">
            <div className="text-center px-2 text-white text-base font-semibold font-['Inter'] leading-normal whitespace-nowrap">다음</div>
            <div className="w-6 h-6 relative">
                <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff", }} />
            </div>
        </button>
    );
}

export const PrevBtn = ({linkTo} : {linkTo : string}) => {
    return (
        <Link to={linkTo} className="grow shrink basis-0 self-stretch px-32 py-3 bg-gray-100 rounded-[33px] justify-center items-center flex">
            <div className="w-6 h-6 relative">
                <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ffffff", }} />
            </div>
            <div className="text-center px-2 text-zinc-800 text-base font-semibold font-['Inter'] leading-normal whitespace-nowrap">이전</div>
        </Link>
    );
}
