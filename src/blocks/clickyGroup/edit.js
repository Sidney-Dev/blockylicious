import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor'

export default function Edit() {

    const blockProps = useBlockProps()

    // Option 2: alternative option to save inner block inside parent block 
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
        template: [["blockylicious/clicky-button", {}]],
        allowedBlocks: ["blockylicious/clicky-button"]
    })

    return (
        <div {...innerBlocksProps} />
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