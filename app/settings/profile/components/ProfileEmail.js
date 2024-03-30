import nextClsx from "next-clsx"
import { interMedium } from "@/app/ui/style/fonts";
import Dropdown from "@/app/ui/components/Dropdown";

function ProfileEmail({ initialValue, options, label, Info }) {
  const clsx = nextClsx(style)
  return (
    <div className={clsx`emc`}>
      <h1 className={clsx`eml`}>{label}</h1>
      <Dropdown initialValue={initialValue} options={options} />
      <p className="text-tertiary">
        {typeof Info === "function" && <Info />}
        {typeof Info === "string" && Info}
      </p>
    </div>
  );
}

export default ProfileEmail;

const style = {
  emc: {
    wrapper: `flex flex-col gap-3`,
  },
  eml: {
    wrapper: `place-self-center w-full`,
    text: `text-tertiary ${interMedium.className} text-[1.2rem]`,
  },
};
