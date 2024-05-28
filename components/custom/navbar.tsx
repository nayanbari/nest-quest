import type { Navlink as NavlinkType } from "@/types/navlink"
import { Navlink } from "./navlink"

interface NavProps {
  isCollapsed: boolean
  navlinks: NavlinkType[]
}

export function Navbar({ navlinks, isCollapsed }: NavProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-4 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {navlinks.map((navlink, index) =>
          <Navlink key={index} navlink={navlink} isCollapsed={isCollapsed} />
        )}
      </nav>
    </div>
  )
}