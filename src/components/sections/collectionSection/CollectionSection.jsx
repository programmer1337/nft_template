import CollectionList from "../../collectionList/CollectionList";
import SectionBlock from "../../blocks/sectionBlock/SectionBlock";

const CollectionSection = ({collection}) => {
    return(
        <SectionBlock
            sectionTitle={"Top Collection"}
            flexDirection={"column"}
        >
            <CollectionList collection={collection}/>
        </SectionBlock>
    )
}

export default CollectionSection;