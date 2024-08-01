import React from 'react';

const Title = () => {
    return (
        <div className="lg:w-full w-[1440px] h-20 px-60 py-10 bg-slate-900 flex-col justify-center items-start gap-6 inline-flex">
            <div className="lg:w-full w-[960px] justify-center items-start gap-8 inline-flex">
                <div className="justify-start items-center gap-4 flex">
                    <div className="text-center text-white text-2xl font-semibold font-['Inter'] leading-loose">회원 가입</div>
                </div>
            </div>
        </div>
    );
}

export default function Layout({ children } : {children: React.ReactElement}) {
    return (
        <div className="lg:w-full w-[1440px] h-[1024px] relative bg-white">
            <Title />
            { children }
        </div>
    );
}