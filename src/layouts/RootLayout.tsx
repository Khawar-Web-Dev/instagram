import { Sidebar } from "../components/exports"
import { Outlet } from "@tanstack/react-router"

const RootLayout = () => {
  return (
    <div className="h-screen w-screen flex bg-black text-white">
        <Sidebar />
        <div className="overflow-y-auto flex-1">
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout