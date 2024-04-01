import { nanoid } from 'nanoid'
import nextclsx from "next-clsx"
import Link from "next/link"

export default function Breadcrumbs({ pathname }) {
  const id = nanoid()
  const clsx = nextclsx(style, { pathname })
  const pathSegments = pathname.split("/")
  return (
    <div className={clsx`bcc`}>
      <Link href="/" className={clsx`hl`}>~</Link>
      {pathSegments
        .filter(segment => segment !== "")
        .map((segment, i) => {
          const active = pathSegments[pathSegments.length - 1] === segment ? "al" : ""
          const href = pathSegments.slice(0, pathSegments.findIndex(e => e === segment) + 1).join("/")
          return (
            <div key={id + i}>
              /
              <Link
                href={href}
                className={clsx`${active}`}>
                {segment}
              </Link>
            </div>
          )
        })}
    </div>
  )
}

const style = {
  bcc: {
    padding: `ps-0 pe-2`,
    hover: `hover:cursor-default`,
    wrapper: `w-fit h-6 flex justify-center items-center `,
    text: `text-[1.2rem] text-tertiary`,
  },
  al: {
    text: `text-gray-50`
  },
  hl: {
    [`text-gray-50`]: "/"
  }
}
