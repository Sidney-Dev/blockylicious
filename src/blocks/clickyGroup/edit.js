import { 
        useBlockProps, 
        InnerBlocks, 
        useInnerBlocksProps,
        BlockControls,
        JustifyContentControl
    } 
    from '@wordpress/block-editor'
import { parseValue } from "./../../../utils/parseValue"

export default function Edit( props ) {

    const blockGap = parseValue(props.attributes.style?.spacing?.blockGap || "")
    const blockProps = useBlockProps({
        style: { gap: blockGap, justifyContent: props.attributes.justifyContent }
    })
    
    // Option 2: alternative option to save inner block inside parent block 
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        template: [["blockylicious/clicky-button", {}]],
        allowedBlocks: ["blockylicious/clicky-button"]
    })

    return (
        <>
            <BlockControls>
                <JustifyContentControl
                    value={props.attributes.justifyContent}
                    allowedControls={["left", "right", "center"]}
                    onChange={ newValue => {
                        props.setAttributes({
                            justifyContent: newValue
                        })
                    }}
                />
            </BlockControls>
            <div {...innerBlocksProps} />
        </>
    )


    // Option 1:
    // return (
    //     <div {...blockProps}>
    //         <InnerBlocks
    //             template={[["blockylicious/clicky-button", {}]]}
    //             allowedBlocks={["blockylicious/clicky-button"]} 
    //         />
    //     </div>
    // )
}