import { IComment, IDispatch, IPost } from '../../../types'
import { startLoading, endLoading, loadPosts, hideModal } from '../generators'


import { db, storage } from '../../../../firebase'

import { doc, collection, setDoc, getDocs, addDoc } from 'firebase/firestore'
import { ref, uploadString, getDownloadURL } from 'firebase/storage'

export const addPost = (post: IPost) => {

  return async (dispatch: IDispatch) => {
    dispatch(startLoading())

    const newPostRef = doc(collection(db, 'posts'))

    const newPostId = newPostRef.id

    const storageRef = ref(storage, `posts/${newPostId}`)

    await uploadString(storageRef, post.img, 'data_url')

    const downloadURL = await getDownloadURL(storageRef)

    await setDoc(newPostRef, { ...post, id: newPostId, img: downloadURL })

    const commentRef = collection(db, 'posts', newPostId, 'comments')
    await addDoc(commentRef, post.comments![0])

    const posts = await fetchNormalPosts()

    dispatch(loadPosts(posts))

    dispatch(endLoading())

    dispatch(hideModal())
  }
}

export const fetchNormalPosts = async (posts: any[] = [])  => {

  const collectionRef = collection(db, 'posts')
  const postsDocs = await getDocs(collectionRef)

  postsDocs.forEach(doc => {
    posts.push(doc.data())
  })

  return posts

}

export const fetchPosts = (posts: any[] = [])  => {

  return async (dispatch: IDispatch) => {
    const posts = await fetchNormalPosts()

    dispatch(loadPosts(posts))
    
  }

}

export const addComent = (comment: IComment) => {
  return async (dispatch: IDispatch) => {
    const commentRef = doc(collection(db, 'posts', comment.postId, 'comments'))
    await setDoc(commentRef, {...comment, id:commentRef.id})
  }
}