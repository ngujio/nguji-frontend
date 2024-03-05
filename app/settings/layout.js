import cls from "@/app/lib/cls";
import "@/app/ui/style/globals.css";
import SettingsHeader from "@/app/ui/components/SettingsHeader";

export const metadata = {
  title: "Settings",
  description: "Manage your preferences and configure various options",
};

export default function RootLayout({ children }) {
  const _cls = cls(style);
  return (
    <div className={_cls`container`}>
      <div>
        <SettingsHeader />
        {children}
      </div>
    </div>
  );
}

const style = {
  container: {
    wrapper: `flex flex-col gap-6`,
  },
};
