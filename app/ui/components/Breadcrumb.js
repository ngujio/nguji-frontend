import { nanoid } from 'nanoid'
import nextclsx from "next-clsx"
import Link from "next/link"
import { RiHome5Line } from "react-icons/ri"

export default function Breadcrumbs({ pathname }) {
  const id = nanoid()
  const clsx = nextclsx(style)
  const pathSegments = pathname.split("/");
  return (
    <div className={clsx`current-path`}>
      <RiHome5Line size={16} />
      {pathSegments.filter(segment => segment !== "")
        .map((segment, i) => {
          const lastSegment = pathSegments[pathSegments.length - 1]
          const activeLocation = lastSegment === segment ? "activeLocation" : ""
          const currentLocation = pathSegments.slice(0, pathSegments.findIndex(e => e === segment) + 1).join("/")
          return (
            <div key={id + i}>
              ›
              <Link
                href={currentLocation}
                className={clsx`${activeLocation}`}>
                {segment}
              </Link>
            </div>
          )
        })}
    </div>
  )
}

const style = {
  "current-path": {
    padding: `ps-0 pe-2`,
    hover: `hover:cursor-default`,
    wrapper: `w-fit h-6 flex justify-center items-center gap-1`,
    text: `text-[1.2rem] text-tertiary`,
  },
  activeLocation: {
    text: `text-gray-50`
  }
}
