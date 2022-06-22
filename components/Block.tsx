import React, { ReactNode } from 'react'
import { BlockParagraph } from '../utils/renderBlocks'
import Paragraph from './Paragraph'


interface Props {
  block: BlockParagraph
}

function Block(props: Props) {
  const { block } = props

  switch(block.type) {
    case 'paragraph':
      return <Paragraph block={block} />
    default:
      return <div>Default</div>
  }
}

export default Block