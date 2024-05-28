import { useEffect, useState } from "react"

export default function useCollapsed() {

  const [isCollapsed, setIsCollapsed] = useState(true)

  useEffect(() => {

    const handleResize = () => setIsCollapsed(window.innerWidth < 1024);

    window.addEventListener('load', handleResize);

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return isCollapsed
}