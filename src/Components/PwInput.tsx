import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { pwState } from "../Stores/userStates";
import { pwVal } from "../Stores/validateStates";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export function PwInput() {
  const [pw, setPw] = useRecoilState(pwState);
  const [val, setVal] = useRecoilState(pwVal);
  const [isPw, setIsPW] = useState(null as null | boolean);
  const [conf, setConf] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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
      setVal(false);
    }
    setPw(e.target.value);
  };

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
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirm = () => setShowConfirm((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseDownConfirm = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="self-stretch justify-start items-center gap-6 inline-flex">
        <div className="w-32 h-6 justify-start items-center gap-6 flex">
          <div className="text-zinc-800 text-base font-medium font-['Inter'] leading-relaxed">
            비밀번호
          </div>
        </div>

        <TextField
          type={showPassword ? "text" : "password"}
          error={!(isPw ?? true)}
          helperText={!(isPw ?? true) && "8~16자 영문, 숫자, 특수문자를 입력하세요."}
          className="h-12 w-[460px] bg-white rounded-lg placeholder:text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed"
          InputProps={{
            endAdornment: (
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
            ),
          }}
          placeholder="비밀번호를 입력하세요."
          value={pw}
          onChange={onPwChange} />
      </div>

      <div className="self-stretch justify-start items-center gap-6 inline-flex">
        <div className="w-32 h-6 justify-start items-center gap-6 flex">
          <div className="text-zinc-800 text-base font-medium font-['Inter'] leading-relaxed">
            비밀번호 확인
          </div>
        </div>

        <TextField
          type={showConfirm ? "text" : "password"}
          error={!(val ?? true)}
          helperText={!(val ?? true) && "비밀번호와 일치하지 않습니다."}
          className="h-12 w-[460px] bg-white rounded-lg placeholder:text-neutral-300 text-base font-normal font-['Inter'] leading-relaxed"
          InputProps={{
            endAdornment: (
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
            ),
          }}
          placeholder="비밀번호를 한번 더 입력하세요."
          value={conf}
          onChange={onConfChange} />
      </div>
    </>
  );
}
