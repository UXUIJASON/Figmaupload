import svgPaths from "./svg-nufqvayn2d";

function Compose() {
  return (
    <div className="absolute bg-white h-[40px] left-0 rounded-[6px] top-0 w-[285px]" data-name="Compose">
      <div aria-hidden="true" className="absolute border border-[#e4ebf0] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center left-[43px] top-[10px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)] text-nowrap">Search</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[13px] size-[20px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_212)" id="Frame">
          <g id="Vector"></g>
          <g id="Search">
            <path d={svgPaths.p275da80} fill="var(--fill-0, #111C2D)" fillOpacity="0.6" id="Vector_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_212">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Search bar">
      <Compose />
      <Frame1 />
      <Frame />
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Filter">
      <SearchBar />
    </div>
  );
}

function CheckboxOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkbox - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkbox - Outline">
          <path d={svgPaths.p194eb400} fill="var(--fill-0, #E4EBF0)" id="Vector" stroke="var(--stroke-0, #E4EBF0)" />
        </g>
      </svg>
    </div>
  );
}

function Products() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Products">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[30px] py-[20px] relative size-full">
          <CheckboxOutline />
          <p className="basis-0 font-['NanumSquareRound:ExtraBold',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#111c2d] text-[14px] tracking-[-0.28px]">거래처명</p>
        </div>
      </div>
    </div>
  );
}

function CheckboxOutline1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkbox - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkbox - Outline">
          <path d={svgPaths.p194eb400} fill="var(--fill-0, #E4EBF0)" id="Vector" stroke="var(--stroke-0, #E4EBF0)" />
        </g>
      </svg>
    </div>
  );
}

function HowInnovationWorks() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="How Innovation Works">
      <CheckboxOutline1 />
      <div className="relative shrink-0 size-[56px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" fill="var(--fill-0, #C4C4C4)" id="Ellipse 119" r="28" />
        </svg>
      </div>
      <div className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#111c2d] text-[0px] text-[14px] text-nowrap tracking-[-0.28px]">
        <p className="mb-0">PS 대리점</p>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Medium',sans-serif] font-normal text-[rgba(17,28,45,0.6)]">SKT</p>
      </div>
    </div>
  );
}

function Products1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Products">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <HowInnovationWorks />
        </div>
      </div>
    </div>
  );
}

function CheckboxOutline2() {
  return (
    <div className="[grid-area:1_/_1] h-[24px] ml-0 mt-[16px] relative w-[25.059px]" data-name="Checkbox - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.0588 24">
        <g id="Checkbox - Outline">
          <path d={svgPaths.pbca8500} fill="var(--fill-0, #E4EBF0)" id="Vector" stroke="var(--stroke-0, #E4EBF0)" />
        </g>
      </svg>
    </div>
  );
}

function PsalmsBookForGrowth() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0" data-name="Psalms Book for Growth">
      <div className="[grid-area:1_/_1] h-[56px] ml-[45.94px] mt-0 relative w-[58.471px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58.4706 56">
          <ellipse cx="29.2353" cy="28" fill="var(--fill-0, #C4C4C4)" id="Ellipse 119" rx="29.2353" ry="28" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.4] ml-[125.29px] mt-[8px] not-italic relative text-[#111c2d] text-[0px] text-[14px] tracking-[-0.28px] w-[158.706px]">
        <p className="mb-0">한빛 대리점</p>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Medium',sans-serif] font-normal text-[rgba(17,28,45,0.6)]">SKT</p>
      </div>
      <CheckboxOutline2 />
    </div>
  );
}

function Products2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Products">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <PsalmsBookForGrowth />
        </div>
      </div>
    </div>
  );
}

function CheckboxOutline3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkbox - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkbox - Outline">
          <path d={svgPaths.p194eb400} fill="var(--fill-0, #E4EBF0)" id="Vector" stroke="var(--stroke-0, #E4EBF0)" />
        </g>
      </svg>
    </div>
  );
}

function ThePsychologyOfMoney() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="The Psychology of Money">
      <CheckboxOutline3 />
      <div className="relative shrink-0 size-[56px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" fill="var(--fill-0, #C4C4C4)" id="Ellipse 119" r="28" />
        </svg>
      </div>
      <div className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#111c2d] text-[0px] text-[14px] text-nowrap tracking-[-0.28px]">
        <p className="mb-0">라온 대리점</p>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Medium',sans-serif] font-normal text-[rgba(17,28,45,0.6)]">SKT</p>
      </div>
    </div>
  );
}

function Products3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Products">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <ThePsychologyOfMoney />
        </div>
      </div>
    </div>
  );
}

function CheckboxOutline4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkbox - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkbox - Outline">
          <path d={svgPaths.p194eb400} fill="var(--fill-0, #E4EBF0)" id="Vector" stroke="var(--stroke-0, #E4EBF0)" />
        </g>
      </svg>
    </div>
  );
}

function BoatHeadphone() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Boat Headphone">
      <CheckboxOutline4 />
      <div className="relative shrink-0 size-[56px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" fill="var(--fill-0, #C4C4C4)" id="Ellipse 119" r="28" />
        </svg>
      </div>
      <div className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#111c2d] text-[0px] text-[14px] text-nowrap tracking-[-0.28px]">
        <p className="mb-0">디아이 대리점</p>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Medium',sans-serif] font-normal text-[rgba(17,28,45,0.6)]">SKT</p>
      </div>
    </div>
  );
}

function Products4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Products">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <BoatHeadphone />
        </div>
      </div>
    </div>
  );
}

function CheckboxOutline5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Checkbox - Outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Checkbox - Outline">
          <path d={svgPaths.p194eb400} fill="var(--fill-0, #E4EBF0)" id="Vector" stroke="var(--stroke-0, #E4EBF0)" />
        </g>
      </svg>
    </div>
  );
}

function MacBookAirPro() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-center min-h-px min-w-px relative shrink-0" data-name="MacBook Air Pro">
      <CheckboxOutline5 />
      <div className="relative shrink-0 size-[56px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <circle cx="28" cy="28" fill="var(--fill-0, #C4C4C4)" id="Ellipse 119" r="28" />
        </svg>
      </div>
      <div className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[#111c2d] text-[0px] text-[14px] text-nowrap tracking-[-0.28px]">
        <p className="mb-0">메타 대리점</p>
        <p className="font-['Inter:Regular','Noto_Sans_KR:Medium',sans-serif] font-normal text-[rgba(17,28,45,0.6)]">SKT</p>
      </div>
    </div>
  );
}

function Products5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Products">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <MacBookAirPro />
        </div>
      </div>
    </div>
  );
}

function Products6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[544px] items-start min-h-px min-w-[344px] relative shrink-0" data-name="Products">
      <Products />
      <Products1 />
      <Products2 />
      <Products3 />
      <Products4 />
      <Products5 />
    </div>
  );
}

function Status() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['NanumSquareRound:ExtraBold',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#111c2d] text-[14px] tracking-[-0.28px]">상태</p>
        </div>
      </div>
    </div>
  );
}

function Status1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[30px] py-[20px] relative size-full">
          <div className="relative shrink-0 size-[10px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #00CEB6)" id="Ellipse 120" r="5" />
            </svg>
          </div>
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">InStock</p>
        </div>
      </div>
    </div>
  );
}

function Status2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Status">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[30px] py-[20px] relative size-full">
          <div className="relative shrink-0 size-[10px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #FF6692)" id="Ellipse 120" r="5" />
            </svg>
          </div>
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">Out of Stock</p>
        </div>
      </div>
    </div>
  );
}

function Status3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Status">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[30px] py-[20px] relative size-full">
          <div className="relative shrink-0 size-[10px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" fill="var(--fill-0, #FF6692)" id="Ellipse 120" r="5" />
            </svg>
          </div>
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">Out of Stock</p>
        </div>
      </div>
    </div>
  );
}

function Status4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-px grow h-[544px] items-start min-h-px min-w-[162px] relative shrink-0" data-name="Status">
      <Status />
      <Status1 />
      <Status2 />
      <Status1 />
      <Status1 />
      <Status3 />
    </div>
  );
}

function Date() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['NanumSquareRound:ExtraBold',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#111c2d] text-[14px] tracking-[-0.28px]">총 판매건수</p>
        </div>
      </div>
    </div>
  );
}

function Date1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">40건</p>
        </div>
      </div>
    </div>
  );
}

function Date2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">92건</p>
        </div>
      </div>
    </div>
  );
}

function Date3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">27건</p>
        </div>
      </div>
    </div>
  );
}

function Date4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">34건</p>
        </div>
      </div>
    </div>
  );
}

function Date5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Date">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">62건</p>
        </div>
      </div>
    </div>
  );
}

function Date6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[544px] items-start min-h-px min-w-[170px] relative shrink-0" data-name="date">
      <Date />
      <Date1 />
      <Date2 />
      <Date3 />
      <Date4 />
      <Date5 />
    </div>
  );
}

function Price() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Price">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['NanumSquareRound:ExtraBold',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#111c2d] text-[14px] tracking-[-0.28px]">총 리베이트</p>
        </div>
      </div>
    </div>
  );
}

function Price1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Price">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">280만원</p>
        </div>
      </div>
    </div>
  );
}

function Price2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Price">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">744만원</p>
        </div>
      </div>
    </div>
  );
}

function Price3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Price">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">189만원</p>
        </div>
      </div>
    </div>
  );
}

function Price4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Price">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">238만원</p>
        </div>
      </div>
    </div>
  );
}

function Price5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Price">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)]">434만원</p>
        </div>
      </div>
    </div>
  );
}

function Price6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[544px] items-start min-h-px min-w-[96px] relative shrink-0" data-name="Price">
      <Price />
      <Price1 />
      <Price2 />
      <Price3 />
      <Price4 />
      <Price5 />
    </div>
  );
}

function Action() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Action">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <p className="basis-0 font-['NanumSquareRound:ExtraBold',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#111c2d] text-[14px] tracking-[-0.28px]">Action</p>
        </div>
      </div>
    </div>
  );
}

function MoreVertical() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="More vertical">
          <path d={svgPaths.pd3d3d80} fill="var(--fill-0, #111C2D)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Action1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Action">
      <div aria-hidden="true" className="absolute border-[#e4ebf0] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <MoreVertical />
        </div>
      </div>
    </div>
  );
}

function MoreVertical1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="More vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="More vertical">
          <path d={svgPaths.pd3d3d80} fill="var(--fill-0, #111C2D)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Action2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Action">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[30px] py-[20px] relative size-full">
          <MoreVertical1 />
        </div>
      </div>
    </div>
  );
}

function Action3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[544px] items-start min-h-px min-w-[106px] relative shrink-0" data-name="Action">
      <Action />
      {[...Array(4).keys()].map((_, i) => (
        <Action1 key={i} />
      ))}
      <Action2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Products6 />
      <Status4 />
      <Date6 />
      <Price6 />
      <Action3 />
    </div>
  );
}

function DownArrow() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Down arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Down arrow">
          <path d={svgPaths.p34872780} fill="var(--fill-0, #111C2D)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-[rgba(17,28,45,0.6)] text-nowrap">Rows per page:</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[14px] text-[rgba(17,28,45,0.6)] text-nowrap tracking-[-0.28px]">5</p>
      <DownArrow />
    </div>
  );
}

function DownArrow1() {
  return (
    <div className="relative size-[24px]" data-name="Down arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Down arrow">
          <path d={svgPaths.p34872780} fill="var(--fill-0, #111C2D)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center p-[10px] relative shrink-0">
      <div className="absolute flex items-center justify-center left-0 size-[24px] top-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          {[...Array(2).keys()].map((_, i) => (
            <DownArrow1 key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[32px] size-[24px] top-0" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg] scale-y-[-100%]" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-[rgba(17,28,45,0.6)] text-nowrap">1-5 OF 12</p>
      <Frame4 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end px-0 py-[10px] relative shrink-0 w-[1086px]" data-name="pagination">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Frame5 />
        <Pagination />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4ebf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

export default function Table1() {
  return (
    <div className="bg-white relative rounded-[24px] shadow-[0px_1px_4px_0px_rgba(133,146,173,0.2)] size-full" data-name="table">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[30px] relative size-full">
          <Filter />
          <Table />
        </div>
      </div>
    </div>
  );
}