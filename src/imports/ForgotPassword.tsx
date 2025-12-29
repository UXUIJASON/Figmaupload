import svgPaths from "./svg-cmkbxea3j2";

function Logo() {
  return (
    <div className="overflow-clip relative shrink-0 size-[40px]" data-name="logo">
      <div className="absolute flex inset-[56.28%_70.37%_15.52%_1.81%] items-center justify-center">
        <div className="flex-none h-[7.984px] rotate-[300.236deg] w-[8.402px]">
          <div className="bg-[#00a1ff] rounded-[16px] size-full" />
        </div>
      </div>
      <div className="absolute flex inset-[15.53%_35.24%_15.52%_13.43%] items-center justify-center">
        <div className="flex-none h-[7.984px] rotate-[240deg] w-[27.238px]">
          <div className="bg-[#00a1ff] opacity-25 rounded-[16px] size-full" />
        </div>
      </div>
      <div className="absolute flex inset-[15.53%_1.8%_15.52%_46.86%] items-center justify-center">
        <div className="flex-none h-[7.984px] rotate-[240deg] w-[27.238px]">
          <div className="bg-[#00a1ff] opacity-25 rounded-[16px] size-full" />
        </div>
      </div>
      <div className="absolute flex inset-[15.52%_45.29%_32.93%_13.43%] items-center justify-center">
        <div className="flex-none h-[7.984px] rotate-[240deg] w-[19.196px]">
          <div className="bg-[#00a1ff] rounded-[16px] size-full" />
        </div>
      </div>
      <div className="absolute flex inset-[15.52%_11.67%_32.62%_46.86%] items-center justify-center">
        <div className="flex-none h-[7.984px] rotate-[240deg] w-[19.341px]">
          <div className="bg-[#00a1ff] rounded-[16px] size-full" />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.4] not-italic relative shrink-0 w-full" data-name="title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111c2d] text-[21px] tracking-[-0.21px] w-full">Forgot your password?</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)] w-full">Please enter the email address associated with your account and We will email you a link to reset your password.</p>
    </div>
  );
}

function InputTitle() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input title">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#2a3547] text-[14px] tracking-[-0.28px]">Email Address</p>
    </div>
  );
}

function Frame() {
  return <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px shrink-0" />;
}

function InputBox() {
  return (
    <div className="bg-white h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Input box">
      <div aria-hidden="true" className="absolute border border-[#e4ebf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function FormInput() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form Input">
      <InputTitle />
      <InputBox />
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.15px]">Send reset password link</p>
    </div>
  );
}

function ButtonLarge() {
  return (
    <div className="bg-[#00a1ff] h-[48px] relative rounded-[48px] shrink-0 w-full" data-name="Button/Large">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[20px] py-0 relative size-full">
          <ButtonText />
        </div>
      </div>
    </div>
  );
}

function ButtonText1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#00a1ff] text-[15px] text-nowrap tracking-[-0.15px]">Back to login page</p>
    </div>
  );
}

function ButtonLarge1() {
  return (
    <div className="bg-[#d9f1ff] h-[48px] relative rounded-[48px] shrink-0 w-full" data-name="Button/Large">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[20px] py-0 relative size-full">
          <ButtonText1 />
        </div>
      </div>
    </div>
  );
}

function Btns() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="btns">
      <ButtonLarge />
      <ButtonLarge1 />
    </div>
  );
}

function Details() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[calc(50%+392px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[362px]" data-name="details">
      <Logo />
      <Title />
      <FormInput />
      <Btns />
    </div>
  );
}

function LogoIconSvg() {
  return (
    <div className="absolute h-[326.25px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[450px]" data-name="logo-icon.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 450 326.25">
        <g id="logo-icon.svg">
          <path d={svgPaths.p3870fa00} fill="var(--fill-0, #00A1FF)" id="Vector" />
          <path d={svgPaths.p1b3f80} fill="var(--fill-0, #00A1FF)" id="Vector_2" opacity="0.25" />
          <path d={svgPaths.p26a08140} fill="var(--fill-0, #00A1FF)" id="Vector_3" opacity="0.25" />
          <path d={svgPaths.pd446600} fill="var(--fill-0, #00A1FF)" id="Vector_4" />
          <path d={svgPaths.p1b6ffc80} fill="var(--fill-0, #00A1FF)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function LogoIconSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[450px] top-0" data-name="logo-icon.svg fill">
      <LogoIconSvg />
    </div>
  );
}

function LogoIconSvg1() {
  return (
    <div className="absolute bottom-[-135px] overflow-clip right-[-102px] size-[450px]" data-name="logo-icon.svg">
      <LogoIconSvgFill />
    </div>
  );
}

function Btn() {
  return (
    <div className="bg-[#00a1ff] content-stretch flex items-center justify-center px-[17px] py-[12px] relative rounded-[30px] shrink-0" data-name="btn">
      <div aria-hidden="true" className="absolute border border-[#00a1ff] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">
        <p className="leading-[21px]">Learn More</p>
      </div>
    </div>
  );
}

function Txt() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start left-[161.78px] top-[243.87px]" data-name="txt">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[97px] justify-center leading-[48px] not-italic relative shrink-0 text-[40px] text-white w-[228.6px]">
        <p className="mb-0">Welcome to</p>
        <p>MaterialM</p>
      </div>
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[68px] justify-center leading-[1.4] not-italic opacity-75 relative shrink-0 text-[16px] text-white tracking-[-0.32px] w-[362.43px]">
        <p className="mb-0">MaterialM helps developers to build organized</p>
        <p className="mb-0">and well coded dashboards full of beautiful and</p>
        <p>rich modules.</p>
      </div>
      <Btn />
    </div>
  );
}

function Banner() {
  return (
    <div className="absolute bg-[#111c2d] h-[1080px] left-0 overflow-clip top-0 w-[823px]" data-name="banner">
      <div className="absolute border-[#182943] border-[120px] border-solid inset-[-24.72%_32.95%_59.9%_-18%] rounded-[700px]" data-name="div.circle-top" />
      <LogoIconSvg1 />
      <Txt />
    </div>
  );
}

export default function ForgotPassword() {
  return (
    <div className="bg-white relative size-full" data-name="Forgot Password">
      <Details />
      <Banner />
    </div>
  );
}