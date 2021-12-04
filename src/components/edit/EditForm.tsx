import React, {ChangeEvent, useState, useRef} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { IUser } from '../../types'

import EditInput from './edit/EditInput'
import EditUserImage from './edit/EditUserImage'

import EditTextArea from './edit/EditTextArea'
import { updateUser } from '../../redux/actions/actions/userActions'
import Loader from '../layout/home/loaders/Loader'
import StoriesLoader from '../layout/home/loaders/StoriesLoader'

const str1 = `
Изменить имя можно не более двух раз в течение 14 дней.
`
const str2 = 'В большинстве случаев у вас будет ещё 14 дней, чтобы снова поменять имя пользователя на builitomigmcom. Подробнее'
const EditForm: React.FC = () => {

  const dispatch = useDispatch()
  const loading = useSelector((state:any) => state.user.loading)

  const user:IUser = useSelector((state:any) => state.user.user)

  const [userImage, setUserImage] = useState(user.photoURL)

  const [userName, setUserName] = useState(user.displayName.toLowerCase().split(' ').join(''))
  const [name, setName] = useState(user.displayName)
  const [webPage, setWebPage] = useState(user.webPage ? user.webPage : '')
  const [bio, setBio] = useState( '' )
  const [adress, setAddress] = useState(user.email)
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber? user.phoneNumber : '')
  const [male, setMale] = useState(user.male ? user.male : '')

  const fileInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = () => {
    const formData = {
      username: userName, displayName: name, webPage, bio, email: adress, phoneNumber, male, photoURL:userImage
    }
    console.log(formData)
    dispatch(updateUser({...formData}))

  }

  const fileCahngeHanfler = () => {
    const reader = new FileReader()
    if (fileInputRef.current!.files![0]) {
      reader.readAsDataURL(fileInputRef.current!.files![0])
    }

    reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
      setUserImage(readerEvent.target!.result + '')
    }
  }

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const usernameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }

  const webChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setWebPage(e.target.value)
  }

  const bionameChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value)
  }

  const adressChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
  }

  const phoneNumberChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value)
  }

  const maleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMale(e.target.value)
  }

  const triggerInput = () => {
    fileInputRef.current!.click()
  }

  return (
    <>

    <EditUserImage triggerInput={triggerInput} image={userImage} />

     <input 
       type="file"
       onChange={fileCahngeHanfler.bind(null)}
       ref={fileInputRef}
       hidden
     />

    <div className='flex flex-col mt-[12px] md:mt-[22px] pb-[20px]'>
      
      <EditInput key={'2345'} val={name} text={str1} label='Name' onChange={nameChangeHandler} />

      <EditInput key={'u34rjeifodkjriwkso'} val={userName} text={str2} label='userName' onChange={usernameChangeHandler} />

      <EditInput key={'dfenijdsvpkxnl,m'} val={webPage}  label='Web-Page' onChange={webChangeHandler} />

      <EditTextArea val={bio}  label='Bio' onChange={bionameChangeHandler} />

       <div className='flex flex-col mx-[20px] my-[10px]'>
        <h2 className='font-bold text-[#8e8e8e] '>
        Личная информация
        </h2>

        <p className='text-xs text-[#8e8e8e]'>
        Укажите личную информацию, даже если аккаунт будет использоваться для компании, домашнего животного или в других целях. Эти сведения не будут показываться в вашем общедоступном профиле.
        </p>

      </div>

      <EditInput key={'fnbjoqjwASMZcwojmckx'} val={adress}  label='Address' onChange={adressChangeHandler} />

      <EditInput val={phoneNumber}  label='PhoneNumber' onChange={phoneNumberChangeHandler} />

      <EditInput val={male} label='Male' onChange={maleChangeHandler} />
      
      <div className='flex justify-between items-center m-[20px]'>

        <button onClick={submitHandler} className='submit_btn' disabled={loading}>
          { loading ? <div className='relative scale-50'> <StoriesLoader /> 
          <span className='opacity-0'>Отправить</span></div> :'Отправить'}
        </button>

        <span className='font-bold text-xs text-[#0095f6]'>
          Временно отключить мой аккаунт
        </span>

      </div>
      
    </div>
    
    </>
  )
}

export default connect()(EditForm)
