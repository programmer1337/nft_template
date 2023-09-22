import sectionBlock from "./sectionBlock.module.css";

const SectionBlock = ({
                          children,
                          sectionTitle,
                          titleColor,
                          backgroundColor,
                          flexDirection,
                          justifyContent,
                          alignContent,
                          height,
                          padding
                      }) => {
    return (
        <div className={sectionBlock.section} style={{
            height: height,
            padding: padding,
            flexDirection: flexDirection,
            justifyContent: justifyContent,
            alignContent: alignContent,
            background: backgroundColor,
        }}>
            {
                sectionTitle !== undefined ?
                    <div className={sectionBlock.sectionTitle}
                         style={{
                             color: titleColor,
                         }}>
                        {sectionTitle}
                    </div> : ""
            }
            {children}
        </div>
    )
}

export default SectionBlock;
