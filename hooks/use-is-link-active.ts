import { usePathname, useSearchParams } from "next/navigation"

export default function useIsLinkActive(href: string) {

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const query = searchParams.toString()
  const url = `${pathname}?${query}`

  const hrefPath = href.split('?')[0]


  return url.includes(hrefPath)
}