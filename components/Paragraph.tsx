import React from 'react'
import { BlockParagraph } from '../utils/renderBlocks'


interface Props {
  block: BlockParagraph
}

function Paragraph(props: Props) {
  const { block } = props
  const renderedParagraph = block.paragraph.richText.map((el, idx) => {
    if (!el.annotations.bold && !el.annotations.italic) return el.text

    const classNameArr = ['inline']
    if (el.annotations.bold) classNameArr.push('font-bold')
    if (el.annotations.italic) classNameArr.push('italic')
  
    const surroundedSpace = idx === 0 || idx === block.paragraph.richText.length - 1 ? ' ' : ''

    return <span key={idx} className={classNameArr.join(' ')}>{surroundedSpace}{el.text}{surroundedSpace}</span>
  })
  return (
    <p>{renderedParagraph}</p>
  )
}

export default Paragraph