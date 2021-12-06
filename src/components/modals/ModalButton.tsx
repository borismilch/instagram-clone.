import React from 'react'

const ModalButton: React.FC<{danger?: boolean, cb: () => void, text: string}> = ({ danger = false, cb, text }) => {
  return (
    <button
      type="button"
      className={ 'confirm-button ' +  (danger ?  'text-red-600 font-bold' : '')}
      onClick={cb.bind(null)}
    >
      {text}
    </button>
  )
}

export default ModalButton
