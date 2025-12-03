import { TopBar } from "./top-bar"
import { MainNav } from "./main-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <TopBar />
      <MainNav />
    </header>
  )
}

