type LinkNavButtonsProps = {
    title: String,
    Icon: React.FC<any>,
    link?: string,
    bold?: boolean,
    clickFunction?: () => void,
};

const LinkNavButtons = ({ title, Icon, bold = false, clickFunction }: LinkNavButtonsProps) => {
    return (
        <div onClick={clickFunction} className={`${bold? "font-bold":""} flex items-center p-2 my-3 cursor-pointer hover:bg-white/20 rounded-xl transition-colors duration-75`}>
            <Icon strokeWidth={2} />
            <div className="px-4 py-[0.15rem]">
                <h3 className="">{title}</h3>
            </div>
        </div>
    )
}

export default LinkNavButtons