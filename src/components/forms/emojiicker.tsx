import React, { useMemo } from 'react'

import { EmojiData, Picker } from 'emoji-mart'

const Emojiicker: React.FC<{showEmoji: boolean, addEmoji: (emoji: EmojiData) => void}> = ({showEmoji, addEmoji}) => {
  return (
    <>
    { useMemo(() => <div className='transition-all duration-200' style={{opacity: showEmoji ? '1' : '0', display: showEmoji ? 'block' : 'none'}}>
    <Picker onSelect={addEmoji} sheetSize={16} style={{width: '270px', margin: '0px 2px 0px 23px', height: 200, zIndex: 30, background: 'white'}} set='google' />
  </div> , [showEmoji])}
  </>
  )
}

export default Emojiicker
