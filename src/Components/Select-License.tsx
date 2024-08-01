import React from 'react';
import {
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import '../index.css';
import { TextField } from '@mui/material';
import { licState } from '../States/UserStates';
import { licVal } from '../States/ValidateState';
import Layout from './Layout';
import { NextBtn, PrevBtn } from './Btns';

function LicInput() {
    const [lic, setLic] = useRecoilState(licState);
    const [val, setVal] = useRecoilState(licVal);
    const re = /[^a-zA-Z0-9]/;

    // 마지막 글자가 조건에 맞지 않는 경우 해당 글자를 지워버림.
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!(e.target instanceof Element)) {
            return;
        }
        if (e.target.value.slice(-1).match(re) !== null) {
            e.target.value = e.target.value.slice(0, -1);
        }
        e.target.value.length >= 5 ? setVal(true) : setVal(false);
        setLic(e.target.value);
    }

    return (
        <TextField error={!(val ?? true)} helperText={!(val ?? true) && '면허 번호를 입력하세요.'} className="h-12 w-[460px] bg-white rounded-lg placeholder:text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed" placeholder='면허 번호를 입력하세요.' value={lic} onChange={onChange} />
    );
}

export default function SelectLicense() {
    const val = useRecoilValue(licVal);

    return (
        <Layout>
            <>
                <div className="px-[404px] py-12 left-0 top-[80px] absolute bg-white flex-col justify-center items-center gap-8 inline-flex">
                    <div className="justify-center items-start gap-8 inline-flex">
                        <div className="w-[632px] flex-col justify-center items-start gap-1 inline-flex">
                            <div className="text-zinc-800 text-2xl font-semibold font-['Inter'] leading-loose">면허 번호를 입력하세요.</div>
                            <div className="self-stretch text-gray-500 text-sm font-normal font-['Inter'] leading-snug">쓰리빌리언은 안전한 유전 검사 의뢰를 위해 가입 정보를 확인하고 있습니다.</div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-6 inline-flex">
                        <div className="h-[26px] justify-start items-center gap-6 flex">
                            <div className="text-zinc-800 text-base font-medium font-['Inter'] leading-relaxed">면허 번호</div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            <LicInput />
                        </div>
                    </div>
                </div>
                <div className="px-[404px] pt-4 pb-12 left-0 top-[912px] absolute bg-white justify-center items-center gap-6 inline-flex">
                    <div className="w-[304px] self-stretch rounded-lg justify-center items-start flex">
                        <PrevBtn linkTo='/org' />
                    </div>
                    <div className="h-12 justify-center items-start flex">
                        <NextBtn linkTo='/acc' validation={val ?? false} />
                    </div>
                </div>
            </>
        </Layout>
    );
}