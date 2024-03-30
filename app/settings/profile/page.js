import Divider from "@/app/ui/components/Divider";
import { interRegular } from "@/app/ui/style/fonts";
import nextClsx from "next-clsx";
import Link from "next/link";
import FullName from "./components/FullName.js";
import ProfileEmail from "./components/ProfileEmail";
import ProfilePicture from "./components/ProfilePicture";

function ProfileSettings() {
  const clsx = nextClsx(style);
  const fullName = "Kelvin Protus"
  const emailsOptions = [
    {
      email: "skyman@gmail.com",
      primary: true,
      public: true
    },
    {
      email: "itsambiere@gmail.com",
      primary: true,
      public: false
    }
  ]
  const emailInfo = () => {
    return <>
      Manage verified email addresses in your
      <Link className={clsx`link`} href="/settings/profile/email">
        email settings
      </Link>
    </>
  }

  return (
    <div className={clsx`psc`}>
      <ProfilePicture />
      <Divider />
      <FullName initialValue={fullName} />
      <ProfileEmail
        Info={emailInfo}
        label="Public Email"
        options={emailsOptions}
        initialValue={emailsOptions.find(e => e.public).email}
      />
      <div className={clsx`psbc`}>
        <button className={clsx`psb`}>Discard</button>
        <button className={clsx`psb --psb`}>Update profile</button>
      </div>

    </div>
  );
}

export default ProfileSettings;

const style = {
  psc: {
    wrapper: `flex flex-col gap-8 w-[30rem]`,
    padding: `pb-8`
  },
  psbc: {
    wrapper: `flex`,
    padding: `gap-4`
  },
  psb: {
    padding: `p-2 ps-2 pe-4`,
    margin: `mt-3`,
    border: `border border-gray`,
    wrapper: `flex gap-2 rounded-lg whitespace-pre items-center w-full justify-center`,
    text: `${interRegular.className} text-[1.2rem]`,
    hover: `hover:bg-gray-50/5 hover:cursor-pointer`,
  },
  "--psb": {
    wrapper: `bg-gray-400/5`,
  },
};
