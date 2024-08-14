import Link from "next/link"

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          href={'/'}
          className="hidden md:flex btn btn-ghost text-xl"
        >
          Homenagem Eduardo Campos
        </Link>
        <Link
          href={'/'}
          className="flex md:hidden btn btn-ghost text-xl"
        >
          E.C.
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={'/images'}>
              Imagens
            </Link>
          </li>
          <li>
            <Link href={'/videos'}>
              Videos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}