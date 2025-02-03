import React from 'react';
import { Routes } from '../Router/routes';

export type NavButtonBarProps = {
    nextPage: Routes;
    nextValidation: boolean;
    prevPage: Routes | undefined;
};

export type LayoutProps = {
    children : React.ReactElement;
}

const Title = () => {
    return (
        <div className="flex w-screen h-20 bg-slate-900 justify-center items-center">
            <div className=" text-white text-2xl font-semibold font-['Inter']">회원 가입</div>
        </div>
    );
}

/*
const NavButtonBar = ({nextPage, nextValidation, prevPage = undefined} : NavButtonBarProps) => {
    return (
        <div className="absolute bottom-0 flex w-screen bg-slate-900 justify-center gap-6 items-center transition">
            {prevPage && <PrevBtn linkTo={prevPage}/>}
            <NextBtn linkTo={nextPage} validation={nextValidation}/>
        </div>
    );
};
*/

export const NavButtonLayout = ({ children } : LayoutProps) => {
    return (
        <div className="absolute w-full bottom-12 flex bg-white justify-center items-center transition-all gap-16">
            {children}
        </div>
    );
}

export function Layout({ children } : LayoutProps) : React.ReactElement {
    return (
        <div className="lg:w-full w-screen h-screen relative bg-white">
            <Title />
            <div className="w-full py-20 flex flex-col justify-center items-center gap-12">
                { children }
            </div>
        </div>
    );
}