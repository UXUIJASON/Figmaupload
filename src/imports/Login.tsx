import svgPaths from "./svg-xg8jm0hai4";

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
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.4] not-italic relative shrink-0 w-full" data-name="title">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111c2d] text-[21px] tracking-[-0.21px] w-full">Sign In</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-[rgba(17,28,45,0.6)] w-full">Your Admin Dashboard</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.5%_13.99%_12.5%_12.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.231 13.5">
        <g id="Group 18838">
          <path d={svgPaths.p115d150c} fill="var(--fill-0, #4285F4)" id="Vector" />
          <path d={svgPaths.p221a1580} fill="var(--fill-0, #34A853)" id="Vector_2" />
          <path d={svgPaths.p3f78bc80} fill="var(--fill-0, #FFB900)" id="Vector_3" />
          <path d={svgPaths.p30f5b500} fill="var(--fill-0, #EB4335)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Social Icon">
      <Group />
    </div>
  );
}

function Google() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="google">
      <div aria-hidden="true" className="absolute border border-[#e4ebf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[30px] py-[12px] relative w-full">
          <SocialIcon />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#111c2d] text-[14px] text-nowrap tracking-[-0.14px]">Google</p>
        </div>
      </div>
    </div>
  );
}

function IcBaselineFacebook() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="ic:baseline-facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ic:baseline-facebook">
          <path d={svgPaths.pe06c300} fill="var(--fill-0, #00A1FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Facebook() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Facebook">
      <div aria-hidden="true" className="absolute border border-[#e4ebf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[30px] py-[12px] relative w-full">
          <IcBaselineFacebook />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#111c2d] text-[14px] text-nowrap tracking-[-0.14px]">Facebook</p>
        </div>
      </div>
    </div>
  );
}

function Btns() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0 w-full" data-name="btns">
      <Google />
      <Facebook />
    </div>
  );
}

function Seprator() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="seprator">
      <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122.5 1">
          <path d="M0 0H122.5V1H0V0Z" fill="var(--fill-0, #E4EBF0)" id="Rectangle 4548" />
        </svg>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)] text-center text-nowrap">or sign in with</p>
      <div className="basis-0 grow h-px min-h-px min-w-px relative shrink-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122.5 1">
          <path d="M0 0H122.5V1H0V0Z" fill="var(--fill-0, #E4EBF0)" id="Rectangle 4548" />
        </svg>
      </div>
    </div>
  );
}

function InputTitle() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input title">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#2a3547] text-[14px] tracking-[-0.28px]">Username</p>
    </div>
  );
}

function Frame1() {
  return <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px shrink-0" />;
}

function InputBox() {
  return (
    <div className="bg-white h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Input box">
      <div aria-hidden="true" className="absolute border border-[#e4ebf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <Frame1 />
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

function InputTitle1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Input title">
      <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#2a3547] text-[14px] tracking-[-0.28px]">Password</p>
    </div>
  );
}

function Frame2() {
  return <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px shrink-0" />;
}

function InputBox1() {
  return (
    <div className="bg-white h-[42px] relative rounded-[8px] shrink-0 w-full" data-name="Input box">
      <div aria-hidden="true" className="absolute border border-[#e4ebf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-0 relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function FormInput1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form Input">
      <InputTitle1 />
      <InputBox1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.pc216af0} fill="var(--fill-0, #00A1FF)" id="Vector" stroke="var(--stroke-0, #00A1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 12L11 14L15 10" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Remember() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="remember">
      <Frame />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)] text-nowrap">Remember this device</p>
    </div>
  );
}

function Remember1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="remember">
      <Remember />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[#00a1ff] text-[14px] text-nowrap tracking-[-0.14px]">Forgot password?</p>
    </div>
  );
}

function Password() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="password">
      <FormInput1 />
      <Remember1 />
    </div>
  );
}

function ButtonText() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Button text">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[15px] text-nowrap text-white tracking-[-0.15px]">Sign In</p>
    </div>
  );
}

function ButtonLarge() {
  return (
    <div className="bg-[#00a1ff] h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Button/Large">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[20px] py-0 relative size-full">
          <ButtonText />
        </div>
      </div>
    </div>
  );
}

function SignUpLink() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center leading-[1.4] not-italic relative shrink-0 text-[14px] text-nowrap w-full" data-name="sign up link">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[rgba(17,28,45,0.6)]">New to MaterialM3?</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#00a1ff] tracking-[-0.14px]">Create an account</p>
    </div>
  );
}

function Details() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(50%+392px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[362px]" data-name="Details">
      <Logo />
      <Title />
      <Btns />
      <Seprator />
      <FormInput />
      <Password />
      <ButtonLarge />
      <SignUpLink />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-white relative size-full" data-name="Login">
      <Banner />
      <Details />
    </div>
  );
}