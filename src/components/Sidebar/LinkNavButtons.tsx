import { useLocation, useNavigate } from "@tanstack/react-router";

type LinkNavButtonsProps = {
    title: String,
    Icon: React.FC<any>,
    link?: string,
};

const LinkNavButtons = ({ title, Icon, link }: LinkNavButtonsProps) => {
    const loc = useLocation();
    const nav = useNavigate();

    console.log(typeof loc);

    return (
        <div onClick={link? () => nav({ to: link }):undefined} className={`${loc.pathname === link? "font-bold":""} flex items-center p-2 my-3 cursor-pointer hover:bg-white/20 rounded-xl transition-colors duration-75`}>
            <Icon strokeWidth={2} />
            <div className="px-4 py-[0.15rem]">
                <h3 className="">{title}</h3>
            </div>
        </div>
    )
}

export default LinkNavButtons