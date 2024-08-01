import React, { useEffect, useState } from 'react';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import '../index.css';
import { pwState } from '../States/UserStates';
import { pwVal } from '../States/ValidateState';
import Layout from './Layout';
import { PrevBtn } from './Btns';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function PwInput() {
    const [pw, setPw] = useRecoilState(pwState);
    const [val, setVal] = useRecoilState(pwVal);
    const [isPw, setIsPW] = useState(null as null | boolean);
    const [conf, setConf] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = React.useState(false);
    const re = /^(?=.*[^a-zA-Z0-9 ])(?=.*\d)(?=.*[a-zA-Z]).{8,16}$/;

    // 비밀번호 양식: 1개 이상의 특수문자, 영문, 숫자, 8~16자
    const onPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!(e.target instanceof Element)) {
            return;
        }
        if (e.target.value.match(re)) {
            setIsPW(true);
            if (e.target.value === conf) {
                setVal(true);
            }
        } else {
            setIsPW(false);
        }
        setPw(e.target.value);
    }

    const onConfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!(e.target instanceof Element)) {
            return;
        }
        if (e.target.value === pw) {
            setVal(true);
        } else {
            setVal(false);
        }
        setConf(e.target.value);
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirm = () => setShowConfirm((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseDownConfirm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
                <div className="w-32 h-[26px] justify-start items-center gap-6 flex">
                    <div className="text-zinc-800 text-base font-medium font-['Inter'] leading-relaxed">비밀번호</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <TextField
                        type={showPassword ? 'text' : 'password'}
                        error={!(isPw ?? true)}
                        helperText={!(isPw ?? true) && '8~16자 영문, 숫자, 특수문자를 입력하세요.'}
                        className="h-12 w-[460px] bg-white rounded-lg placeholder:text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed"
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                        placeholder='비밀번호를 입력하세요.'
                        value={pw}
                        onChange={onPwChange}
                    />
                </div>
            </div>
            <div className="self-stretch justify-start items-center gap-6 inline-flex">
                <div className="w-32 h-[26px] justify-start items-center gap-6 flex">
                    <div className="text-zinc-800 text-base font-medium font-['Inter'] leading-relaxed">비밀번호 확인</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                    <TextField
                        type={showConfirm ? 'text' : 'password'}
                        error={!(val ?? true)}
                        helperText={!(val ?? true) && '비밀번호와 일치하지 않습니다.'}
                        className="h-12 w-[460px] bg-white rounded-lg placeholder:text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed"
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirm}
                                        onMouseDown={handleMouseDownConfirm}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                        placeholder='비밀번호를 한번 더 입력하세요.'
                        value={conf}
                        onChange={onConfChange}
                    />
                </div>
            </div>
        </>
    );
}

export default function SelectPw() {
    const val = useRecoilValue(pwVal);

    return (
        <Layout>
            <>
                <div className="px-[404px] py-12 left-0 top-[80px] absolute bg-white flex-col justify-center items-center gap-8 inline-flex">
                    <div className="justify-center items-start gap-8 inline-flex">
                        <div className="w-[632px] flex-col justify-center items-start gap-1 inline-flex">
                            <div className="text-zinc-800 text-2xl font-semibold font-['Inter'] leading-loose">비밀번호를 입력하세요.</div>
                        </div>
                    </div>
                    <PwInput />
                </div>
                <div className="px-[404px] pt-4 pb-12 left-0 top-[912px] absolute bg-white justify-center items-center gap-6 inline-flex">
                    <div className="w-[304px] self-stretch rounded-lg justify-center items-start flex">
                        <PrevBtn linkTo='/acc' />
                    </div>
                    <div className="h-12 justify-center items-start flex">
                        {val ? 
                            <Link to='/fin' className="grow shrink basis-0 self-stretch px-32 py-3 bg-slate-900 rounded-[33px] justify-center items-center flex disabled:pointer-events-none">
                                <div className="text-center px-2 text-white text-base font-semibold font-['Inter'] leading-normal whitespace-nowrap">회원 가입하기</div>
                                <div className="w-6 h-6 relative">
                                    <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff", }} />
                                </div>
                            </Link>
                        :
                            <button disabled className="grow shrink basis-0 self-stretch px-32 py-3 bg-slate-500 rounded-[33px] justify-center items-center flex disabled:pointer-events-none">
                                <div className="text-center px-2 text-white text-base font-semibold font-['Inter'] leading-normal whitespace-nowrap">회원 가입하기</div>
                                <div className="w-6 h-6 relative">
                                    <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff", }} />
                                </div>
                            </button>
                        }
                    </div>
                </div>
            </>
        </Layout>
    );
}