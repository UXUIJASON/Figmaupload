import svgPaths from "./svg-q5br96tl8e";
import imgEllipse2701 from "figma:asset/75de296152f314a341722253714a8601bd6929b0.png";
import imgOvalCopy from "figma:asset/ab554f3e4f630c6510019c974b59e6fddb3649b2.png";
import imgOvalCopy1 from "figma:asset/42e9829ff4b22b910edf840048c0f4b05447618c.png";
import imgOvalCopy2 from "figma:asset/42e600a90128aa40137265bca658ca83e1a760e5.png";

function UserName() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="User Name">
      <div className="relative shrink-0 size-[80px]">
        <img alt="" className="block max-w-none size-full" height="80" src={imgEllipse2701} width="80" />
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] leading-[1.4] not-italic relative shrink-0 text-[#111c2d] text-[16px] tracking-[-0.32px] w-full">Linup01</p>
    </div>
  );
}

function Img1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[28px] items-start mr-[-8px] relative shadow-[-2px_2px_20px_0px_rgba(0,0,0,0.04)] shrink-0 z-[3]" data-name="img3">
      <div className="h-[27.988px] relative shrink-0 w-[28px]" data-name="Oval">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 27.9875">
          <path clipRule="evenodd" d={svgPaths.p1c3d8e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Oval" />
        </svg>
      </div>
      <div className="absolute inset-[7.14%]" data-name="Oval Copy">
        <img alt="" className="block max-w-none size-full" height="24" src={imgOvalCopy} width="24" />
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[28px] items-start mr-[-8px] relative shadow-[-2px_2px_20px_0px_rgba(0,0,0,0.04)] shrink-0 z-[2]" data-name="img2">
      <div className="h-[27.988px] relative shrink-0 w-[28px]" data-name="Oval">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 27.9875">
          <path clipRule="evenodd" d={svgPaths.p1c3d8e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Oval" />
        </svg>
      </div>
      <div className="absolute inset-[7.14%]" data-name="Oval Copy">
        <img alt="" className="block max-w-none size-full" height="24" src={imgOvalCopy1} width="24" />
      </div>
    </div>
  );
}

function Img2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[28px] items-start mr-[-8px] relative shadow-[-2px_2px_20px_0px_rgba(0,0,0,0.04)] shrink-0 z-[1]" data-name="img2">
      <div className="h-[27.988px] relative shrink-0 w-[28px]" data-name="Oval">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 27.9875">
          <path clipRule="evenodd" d={svgPaths.p1c3d8e00} fill="var(--fill-0, white)" fillRule="evenodd" id="Oval" />
        </svg>
      </div>
      <div className="absolute inset-[7.14%]" data-name="Oval Copy">
        <img alt="" className="block max-w-none size-full" height="24" src={imgOvalCopy2} width="24" />
      </div>
    </div>
  );
}

function Imgs() {
  return (
    <div className="content-stretch flex isolate items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="imgs">
      <Img1 />
      <Img />
      <Img2 />
    </div>
  );
}

function MutualFrnds() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Mutual frnds 1">
      <Imgs />
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">주변에 3명의 판매점..</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#ffd9e4] h-[48px] relative rounded-[40px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-0 relative size-full">
          <p className="font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#ff6692] text-[15px] text-nowrap tracking-[-0.15px]">로그아웃</p>
        </div>
      </div>
    </div>
  );
}

export default function User() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_1px_4px_0px_rgba(133,146,173,0.2)] size-full" data-name="User 1">
      <div className="max-w-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[inherit] min-w-[inherit] overflow-clip p-[30px] relative size-full">
          <UserName />
          <MutualFrnds />
          <Button />
        </div>
      </div>
    </div>
  );
}