import nextClsx from "next-clsx";
import { interMedium, interRegular } from "@/app/ui/style/fonts";

function ProfilePicture() {
  const clsx = nextClsx(style);
  return (
    <div className={clsx`ppc`}>
      <h1 className={clsx`ppl`}>Profile Picture</h1>
      <div className={clsx`ppic`}>
        <div className={clsx`ppi`}>S</div>
        <div className={clsx`ppuc`}>
          <h1 className={clsx`ppul`}>Upload Image</h1>
          <div className={clsx`ppud`}>
            <p>min 400x400px</p>
            <div className={clsx`ppfc`}>
              <span className={clsx`ppf`}>PNG</span>
              <span className={clsx`ppf`}>JPEG</span>
            </div>
          </div>
          <button className={clsx`ppub`}>Upload</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;

const style = {
  ppc: {
    wrapper: `flex flex-col gap-4`,
  },
  ppl: {
    wrapper: `text-tertiary ${interMedium.className} text-[1.2rem]`,
  },
  ppul: {
    text: `text-[1.2rem]`,
  },
  ppic: {
    wrapper: `flex gap-4 w-full`,
  },
  ppi: {
    wrapper: `flex justify-center items-center w-14 h-14 bg-sec whitespace-pre`,
    hover: `hover:cursor-pointer`,
    border: `rounded-full`,
    text: `text-2xl`,
    padding: `pt-[1px] `,
  },
  ppuc: {
    wrapper: `flex flex-col gap-1`,
  },
  ppud: {
    text: `text-tertiary`,
    wrapper: `flex gap-2 items-center`,
  },
  ppfc: {
    wrapper: `flex gap-1`,
  },
  ppf: {
    padding: `ps-1 pe-1`,
    text: `text-[.8rem] text-[#696c6d]`,
    hover: `hover:cursor-default`,
    border: `rounded-[2.5px] border-[.1px] border-gray`,
    wrapper: `w-fit bg-[#393c3e59] h-5 flex justify-center items-center`,
  },
  ppub: {
    padding: `p-2 ps-2 pe-4`,
    margin: `mt-3`,
    border: `border border-gray`,
    wrapper: `flex gap-2 rounded-lg whitespace-pre items-center w-full justify-center`,
    text: `${interRegular.className} `,
    hover: `hover:bg-gray-50/5 hover:cursor-pointer`,
  },
};
