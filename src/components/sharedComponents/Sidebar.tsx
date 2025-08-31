import HeaderTag from "../Sidebar/HeaderTag";
import LinkNavButtons from "../Sidebar/LinkNavButtons"
import { belowSidebarTabs, sidebarTabs } from "../../data/sidebarTabs"

const Sidebar = () => {

  return (
    <div className="w-[21rem] h-full text-white p-4 flex flex-col border-r-[1px] border-r-white/15">
      <HeaderTag />
      <div className="flex-1">
        {sidebarTabs.map(({ title, Icon, link }) => (
          <LinkNavButtons title={title} Icon={Icon} link={link} />
        ))}
      </div>
      <div>
        {belowSidebarTabs.map(({ title, Icon, link }) => (
          <LinkNavButtons title={title} Icon={Icon} link={link} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar