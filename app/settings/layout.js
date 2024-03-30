import nextClsx from "next-clsx";
import "@/app/ui/style/globals.css";
import SettingsHeader from "@/app/ui/components/SettingsHeader";

export const metadata = {
  title: "Settings",
  description: "Manage your preferences and configure various options",
};

export default function RootLayout({ children }) {
  const clsx = nextClsx(style);
  return (
    <div className={clsx`layout`}>
      <SettingsHeader />
      <div className={clsx`children`}>
        {children}
      </div>
    </div >
  );
}

const style = {
  layout: {
    wrapper: `flex flex-col gap-0 w-full h-full`,
  },
  children: {
    wrapper: `[&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:appearance-none overflow-hidden overflow-y-auto h-fit w-full`,
    padding: `pt-8`
  }
};
