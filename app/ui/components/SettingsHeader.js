"use client";

import Link from "next/link";
import cls from "@/app/lib/cls";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { interMedium } from "../style/fonts";
import { usePathname } from "next/navigation";
import { RiSettings4Line } from "react-icons/ri";
import Slider from "@/app/lib/setting-slider";

function Header() {
  const pathname = usePathname();
  const _cls = cls(style, { pathname });
  const links = [
    ["General Settings", "/settings/general", "generalActive"],
    ["Profile Settings", "/settings/profile", "profileActive"],
    ["Company Settings", "/settings/company", "companyActive"],
    ["Notification Settings", "/settings/notification", "notificationActive"],
    ["Privacy & Security", "/settings/privacy&security", "privacyActive"],
    ["Integrations", "/settings/integration", "integrationsActive"],
  ];

  useEffect(() => {
    const slider = new Slider(links, pathname);
    slider.moveSlider();
    window.addEventListener("resize", (e) => slider.moveSlider());
    return () => {};
  }, [pathname]);

  return (
    <div className={_cls`container`}>
      <div className={_cls`sectionInfo`}>
        <RiSettings4Line size={18} className={_cls`settingIcon`} />
        <div>
          <h1 className={_cls`label`}>Settings</h1>
          <p className={_cls`description`}>
            Manage your preferences and configure various options
          </p>
        </div>
      </div>
      <nav className={_cls`nav`}>
        <div className={_cls`slider`}></div>
        {links.map(([link, href, selector], i) => (
          <Link
            className={_cls`link ${selector}`}
            key={nanoid() + i}
            href={href}
          >
            {link}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Header;

const style = {
  description: {
    text: `text-tertiary text-[1.2rem]`,
  },
  label: {
    text: `text-[1.2rem] ${interMedium.className}`,
  },
  sectionInfo: {
    wrapper: `flex gap-4`,
  },
  settingIcon: {
    border: `border border-gray h-[2.25rem] rounded-xl`,
    wrapper: `w-8 flex flex-col items-center w-[2.25rem] p-2 bg-gray-400/5`,
  },
  container: {
    margin: `mb-8`,
    wrapper: `flex flex-col gap-6 w-full`,
    border: `border-b-[1px] border-b-gray`,
  },
  logo: {
    wrapper: `flex justify-center`,
    padding: `pt-6 pb-6`,
    border: `border-b-[1px] border-b-gray`,
  },
  nav: {
    wrapper: `settingsNav relative flex gap-6 justify-center items-center h-[4rem]`,
    text: `text-[1.2rem] ${interMedium.className} text-gray-300`,
    border: `border-t-[1px] border-t-gray`,
  },
  link: {
    hover: `hover:cursor-pointer`,
    wrapper: `link h-full flex items-center relative`,
  },
  slider: {
    wrapper: `slider h-[2px] bottom-[-2px] rounded-full bg-[#676767] absolute`,
  },
  generalActive: {
    [`active text-gray-50 ${interMedium.className}`]: "/settings/general",
  },
  profileActive: {
    [`active text-gray-50 ${interMedium.className}`]: "/settings/profile",
  },
  companyActive: {
    [`active text-gray-50 ${interMedium.className}`]: "/settings/company",
  },
  notificationActive: {
    [`active text-gray-50 ${interMedium.className}`]: "/settings/notification",
  },
  privacyActive: {
    [`active text-gray-50 ${interMedium.className}`]:
      "/settings/privacy&security",
  },
  integrationsActive: {
    [`active text-gray-50 ${interMedium.className}`]: "/settings/integrations",
  },
};
