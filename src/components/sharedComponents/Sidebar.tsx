import { motion } from "framer-motion";
import HeaderTag from "../Sidebar/HeaderTag";
import LinkNavButtons from "../Sidebar/LinkNavButtons"
import { belowSidebarTabs, sidebarTabs } from "../../data/sidebarTabs"
import { navAnim } from "../animation";
import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setIsNavbarMinimized } from "../../utils/slices/stateSlice";

const Sidebar = () => {
  const nav = useNavigate();
  const disp = useDispatch();
  const { isNavbarMinimized } = useSelector((state: any) => state.states)

  const [currentTab, setCurrentTab] = useState<string>('');


  const clickFunction = (title: string, link: string | undefined) => {
    if (link) {
      if (isNavbarMinimized) disp(setIsNavbarMinimized(false));
      nav({ to: link });
    }
    else {
      disp(setIsNavbarMinimized(!isNavbarMinimized));
    }
    setCurrentTab(title);
  }

  useEffect(() => {
    console.log(isNavbarMinimized);
  }, [isNavbarMinimized])

  return (
    <motion.nav
      variants={navAnim}
      initial={"initial"}
      animate={isNavbarMinimized ? "close" : "open"}
      className="h-full text-white p-4 flex flex-col border-r-[1px] border-r-white/15">
      <HeaderTag />
      <div className="flex-1">
        {sidebarTabs.map(({ title, Icon, link }, index) => (
          <LinkNavButtons key={index} title={title} Icon={Icon} bold={currentTab === title} clickFunction={() => clickFunction(title, link)} />
        ))}
      </div>
      <div>
        {belowSidebarTabs.map(({ title, Icon, link }, index) => (
          <LinkNavButtons key={index} title={title} Icon={Icon} link={link} />
        ))}
      </div>
    </motion.nav>
  )
}

export default Sidebar