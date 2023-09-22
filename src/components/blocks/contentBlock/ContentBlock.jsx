import contentBlock from "./contentBlock.module.css";
import toBold from "../../../utils/toBold";

const ContentBlock = ({children, contentTitle, contentDescription, titleFontSize, descriptionFontSize, boldWords}) => {
    return (
        <div className={contentBlock.content}>
            <p className={contentBlock.contentTitle}
               style={{fontSize: titleFontSize,}}
            >
                {contentTitle}
            </p>
            <p className={contentBlock.contentDescription}
               style={{fontSize: descriptionFontSize,}}
            >
                {
                    boldWords !== undefined ?
                        toBold(
                            contentDescription,
                            boldWords,
                            "black"
                        ) : contentDescription
                }
            </p>
            {children}
        </div>
    )
}

export default ContentBlock;