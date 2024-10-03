import Link from "next/link"

const Header = () => {
  return (
    <div className="flex justify-center mt-12">
    <Link href="/">Home</Link>
      <Link href="/pages/languages" className="mx-10">Languages</Link>
      <Link href="/pages/test">Test</Link>
    </div>
  )
}

export default Header
