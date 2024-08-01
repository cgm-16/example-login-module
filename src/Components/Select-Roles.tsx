import React from 'react';
import {
    useRecoilState,
} from 'recoil';
import '../index.css';
import { roleState } from '../States/UserStates';
import { NextBtn } from './Btns';
import Layout from './Layout';

function RoleButtons() {
    const [role, setRole] = useRecoilState(roleState);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!(e.target instanceof Element)) {
            return;
        }
        setRole(e.target.id);
        console.log(role);
    }

    return (
        <div className="w-[632px] h-28 flex-col justify-start gap-4 inline-flex">
            <div className="h-12 flex-col justify-center gap-2 flex">
                <div className="self-stretch justify-start gap-3 inline-flex">
                    <div className='grow'>
                        <input type="radio" className='peer hidden' name="roles" id="doc" value="doc" checked={role === 'doc'} onChange={onChange} />
                        <label htmlFor='doc' className="h-12 py-3 bg-white rounded-lg border border-neutral-300 justify-center items-center flex peer-checked:border-blue-600">
                            <div className="text-center text-slate-900 text-base font-semibold font-['Inter'] leading-normal">의사</div>
                        </label>
                    </div>
                    <div className="grow">
                        <input type="radio" className='peer hidden' name="roles" id="nur" value="nur" checked={role === 'nur'} onChange={onChange} />
                        <label htmlFor='nur' className="h-12 py-3 bg-white rounded-lg border border-neutral-300 justify-center items-center flex peer-checked:border-blue-600">
                            <div className="text-center text-slate-900 text-base font-semibold font-['Inter'] leading-normal">간호사</div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="h-12 flex-col justify-center gap-2 flex">
                <div className="self-stretch justify-start gap-3 inline-flex">
                    <div className="grow">
                        <input type="radio" name="roles" id="res" value="res" className="peer hidden" checked={role === 'res'} onChange={onChange} />
                        <label htmlFor='res' className="h-12 py-3 bg-white rounded-lg shadow border border-neutral-300 justify-center items-center flex peer-checked:border-blue-600">
                            <div className="text-center text-zinc-800 text-base font-semibold font-['Inter'] leading-normal">연구자</div>
                        </label>
                    </div>
                    <div className="grow">
                        <input type="radio" name="roles" id="adm" value="adm" className="peer hidden" checked={role === 'adm'} onChange={onChange} />
                        <label htmlFor='adm' className="grow h-12 py-3 bg-white rounded-lg shadow border border-neutral-300 justify-center items-center flex peer-checked:border-blue-600">
                            <div className="text-center text-zinc-800 text-base font-semibold font-['Inter'] leading-normal">행정 담당자</div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SelectRoles() {
    return (
        <Layout>
            <>
                <div className="px-[404px] py-12 left-0 top-[80px] absolute bg-white flex-col justify-center items-center gap-8 inline-flex">
                    <div className="justify-center items-start gap-8 inline-flex">
                        <div className="w-[632px] flex-col justify-center items-start gap-1 inline-flex">
                            <div className="text-zinc-800 text-2xl font-semibold font-['Inter'] leading-loose">해당하는 직무를 선택하세요.</div>
                        </div>
                    </div>
                    <RoleButtons />
                </div>
                <div className="w-lg:w-full px-[404px] pt-4 pb-12 left-0 top-[912px] absolute bg-white justify-center items-center gap-6 inline-flex">
                    <div className="h-12 justify-center items-start flex">
                        <NextBtn linkTo='/org' validation={true}/>
                    </div>
                </div>
            </>
        </Layout>
    );
}