import { ReactNode } from "react"
import Block from "../components/Block"

export interface RichText {
  text: string,
  annotations: { bold: boolean, italic: boolean },
  link: null | string
}

export interface BlockBasic {
  id: string,
  type: string
}

export interface BlockParagraph extends BlockBasic {
  paragraph: {
    richText: RichText[]
  }
}

export type MixedBlock = BlockParagraph
export type Blocks = MixedBlock[]

export function renderBlock(block: BlockParagraph): ReactNode {
  switch(block.type) {
    case 'paragraph':
      const renderedParagraph = block.paragraph.richText.map((richText, idx) => {
        if (!richText.annotations.bold && !richText.annotations.italic) return richText.text

        const classNameArr = ['inline']
        if (richText.annotations.bold) classNameArr.push('font-bold')
        if (richText.annotations.italic) classNameArr.push('italic')

        return <span key={idx} className={classNameArr.join(' ')}>{' '}{richText.text}{' '}</span>
      })
      return (
        <p>{renderedParagraph}</p>
      )
    default:
      return <div>Default</div>
  }
}

export function renderBlocks(blocks: Blocks): ReactNode[] {
  const renderedBlocks = blocks.map(block => <Block key={block.id} block={block} />)
  return renderedBlocks
}