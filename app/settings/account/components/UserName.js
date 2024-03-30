import nextClsx from "next-clsx"
import Input from "@/app/ui/components/Input"
import { interMedium } from "@/app/ui/style/fonts"

export default function UserName({ initialValue }) {
  const clsx = nextClsx(style)
  return <div className={clsx`container`}>
    <h1 className={clsx`label`}>Display Name*</h1>
    <Input initialValue={initialValue} type={"text"} width={"w-full"} maxLength={10} />
    <p className={clsx`info`}>Your display name may appear around <b>nguji</b>. You can remove it at any time.</p>
  </div>

}

const style = {
  container: {
    wrapper: `flex flex-col gap-3`,
  },
  label: {
    text: `text-[1.2rem] text-tertiary ${interMedium.className}`,
  },
  info: {
    text: `text-tertiary`
  }
}
