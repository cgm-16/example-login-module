import { Layout } from "../Components/Layout";

export default function SignUpFin() {
  return (
    <Layout>
      <div className="lg:w-full w-[1440px] h-[456px] px-[404px] flex-col justify-start items-center gap-[17px] inline-flex">
        <div className="justify-start items-center gap-1 inline-flex">
          <div className="text-center text-zinc-800 text-2xl font-semibold font-['Inter'] leading-loose">
            조금만 기다려주세요.
            <br />
            마지막으로 내부 승인 절차를 진행하고 있습니다.
          </div>
        </div>
        <div className="self-stretch h-[92px] p-6 bg-gray-50 rounded-lg flex-col justify-start items-start gap-9 flex">
          <div className="grow shrink basis-0 text-center text-zinc-800 text-sm font-normal font-['Inter'] leading-snug">
            1일(영업일)이내에 승인 여부에 관한 메일이 발송됩니다.
            <br />
            승인이 완료되면 포털에 로그인 할 수 있습니다.
          </div>
        </div>
      </div>
    </Layout>
  );
}
