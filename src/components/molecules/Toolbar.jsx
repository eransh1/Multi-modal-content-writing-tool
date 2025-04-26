import { FONT_FAMILY_OPTIONS, FONT_SIZE_OPTIONS, INSERT_OPTION, TEXT_ALLIGNMENT_OPTION, TEXT_FORMATTING_OPTION, TEXT_STYLING_OPTION } from "../../common/constants";
import ColorStyling from "../atoms/ColorStyling";
import Formatting from "../atoms/Formatting";
import FormattingWrapper from "../atoms/FormattingWrapper";
import SelectOption from "../atoms/SelectOption";

const Toolbar = ({
    fontName,
    handleFontNameChange,
    fontSize,
    handleFontSizeChange,
    execCommand,
    insertBlock
}) => {
    return (
        <>
            <div className="flex flex-wrap items-center gap-2 mb-4 border-b pb-2">
                {/* Font Family */}
                <FormattingWrapper title={'Text Styling'}>

                    <SelectOption value={fontName} onChange={handleFontNameChange} options={FONT_FAMILY_OPTIONS} />

                    <SelectOption value={fontSize} onChange={handleFontSizeChange} options={FONT_SIZE_OPTIONS} />

                    <ColorStyling execCommand={execCommand} execName={'foreColor'} title={"Text"} inputTitle={'Text Color'} />
                    
                    <ColorStyling execCommand={execCommand} execName={'hiliteColor'} title={"Highlight"} inputTitle={'Highlight Color'} />

                </FormattingWrapper>


                <Formatting execCommand={execCommand} title={'Format'} options={TEXT_FORMATTING_OPTION} />

                <Formatting execCommand={execCommand} title={'Allignment'} options={TEXT_ALLIGNMENT_OPTION} />

                <Formatting execCommand={execCommand} title={'List Styling'} options={TEXT_STYLING_OPTION} />

                <Formatting execCommand={insertBlock} title={'Insert'} options={INSERT_OPTION} />

            </div>
        </>
    )
}

export default Toolbar