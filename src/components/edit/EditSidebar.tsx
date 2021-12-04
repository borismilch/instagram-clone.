import React from 'react'

export const EditSidebar: React.FC = () => {
  let str = ' Сменить пароль  Приложения и сайты  Эл. почта и SMS  Push-уведомления  Управление контактами  Конфиденциальность и безопасность  Входы в аккаунт  Электронные письма от Instagram'
  return (
    <div className='flex flex-col border-r smd border-gray-300 text-left'>

      <div className='editItem-plus'> Редактировать профиль </div> 

      { str.split('  ').map(w =>  <div className='editItem'> {w} </div> ) }

      <div className='editItem-ink-plus mb-56'>Переключение на профессиональный аккаунт</div>

      <div className='pl-[28px] py-3 pr-3 border-t border-gray-300'>

        <h1 className='font-semibold text-[#262626] '>Builo</h1>

        <p className='editItem-ink-plus p-0'>
          Центр Аккаунтів
        </p>

        <span className='text-gray-500 text-xs'>
          Управляйте кросс-сервисными функциями в приложениях Instagram, Facebook и Messenger, например входом в аккаунт и размещением историй и публикаций.
        </span>

      </div>

    </div>

  )
}
