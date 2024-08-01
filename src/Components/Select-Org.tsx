import React, { useEffect } from 'react';
import {
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import '../index.css';
import { Autocomplete, TextField } from '@mui/material';
import { roleState, orgState, orgList } from '../States/UserStates';
import { orgVal } from '../States/ValidateState';
import Layout from './Layout';
import { NextBtn, PrevBtn } from './Btns';

function OrgInput() {
    const [curOrg, setCurOrg] = useRecoilState(orgState);
    const [val, setVal] = useRecoilState(orgVal);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!(e.target instanceof Element)) {
            return;
        }
        e.target.value.length > 0 ? setVal(true) : setVal(false);
        setCurOrg(e.target.value);
    }

    return (
        <TextField error={!(val ?? true)} helperText={!(val ?? true) && '기관명을 입력하세요.'} className="h-12 w-[560px] bg-white rounded-lg placeholder:text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed" placeholder='기관명을 입력하세요.' value={curOrg} onChange={onChange} />
    );
}

function OrgAuto() {
    const [orgs, setOrgs] = useRecoilState(orgList);
    const [curOrg, setCurOrg] = useRecoilState(orgState);
    const [val, setVal] = useRecoilState(orgVal);

    useEffect(() => {
        let ignore = false;
        fetch(new URL('https://storage.googleapis.com/example-org-names/org.txt'))
            .then(res => res.text())
            .then(data => {
                if (!ignore) {
                    setOrgs(data.split('\n').filter(function (value, index, self) {
                        return self.indexOf(value) === index;
                    }));
                }
            });
        return () => {
            ignore = true;
        };
    }, []);

    const onChange = (newData : string | null) => {
        if (newData === null) {
            setVal(false);
            setCurOrg('');
            return
        }
        newData.length !== 0 ? setVal(true) : setVal(false);
        setCurOrg(newData);
    }

    return (
        <Autocomplete
            disablePortal={true}
            options={orgs}
            value={curOrg}
            onChange={(_, data) => onChange(data)}
            filterOptions={(options, state) => {
                if (state.inputValue.length >= 2) {
                    return options.filter((item) =>
                        String(item)
                            .toLowerCase()
                            .includes(state.inputValue.toLowerCase())
                    ).slice(0, 7);
                }
                return [];
            }}
            className="h-12 w-[560px] bg-white rounded-lg placeholder:text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed"
            renderInput={(params) => <TextField {...params} error={!(val ?? true)} helperText={!(val ?? true) && '기관명을 입력하세요.'} placeholder='기관명을 입력하세요.' />}
        />
    );
}

export default function SelectOrg() {
    const role = useRecoilValue(roleState);
    const val = useRecoilValue(orgVal);

    return (
        <Layout>
            <>
                <div className="px-[404px] py-12 left-0 top-[80px] absolute bg-white flex-col justify-center items-center gap-8 inline-flex">
                    <div className="justify-center items-start gap-8 inline-flex">
                        <div className="w-[632px] flex-col justify-center items-start gap-1 inline-flex">
                            <div className="text-zinc-800 text-2xl font-semibold font-['Inter'] leading-loose">소속된 기관을 입력하세요.</div>
                        </div>
                    </div>
                    <div className="self-stretch justify-start items-center gap-6 inline-flex">
                        <div className="h-[26px] justify-start items-center gap-6 flex">
                            <div className="text-zinc-800 text-base font-medium font-['Inter'] leading-relaxed">기관명</div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            {role === 'doc' || role === 'nur' ? <OrgAuto /> : <OrgInput />}
                        </div>
                    </div>
                </div>
                <div className="px-[404px] pt-4 pb-12 left-0 top-[912px] absolute bg-white justify-center items-center gap-6 inline-flex">
                    <div className="w-[304px] self-stretch rounded-lg justify-center items-start flex">
                        <PrevBtn linkTo='/' />
                    </div>
                    <div className="h-12 justify-center items-start flex">
                        {role === 'doc' || role === 'nur' ? <NextBtn linkTo='/lic' validation={val ?? false} /> : <NextBtn linkTo='/acc' validation={val ?? false} />}
                    </div>
                </div>
            </>
        </Layout>
    );
}