import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
const [liked, setLiked] = useState(false)
const [numberLikes, setNumberLikes] = useState(0)
const [commenting, setCommenting] = useState(false)
const [numberComments , setNumberComments] = useState(false)
const [comments, setComments] = useState([])


  const onClickCurtida = () => {
    if (liked) {
      setLiked(!liked); 
      setNumberLikes(numberLikes-1)
    }

    else {
      setLiked(!liked)
      setNumberLikes(numberLikes+1)
    }
  };

  const onClickComentario = () => {
    setCommenting(!commenting)
  };

  const enviarComentario = (comment) => {
    let listOfComments = [...comments, comment]

    setComments(listOfComments); 
    setCommenting(false);
    setNumberComments(numberComments+1)
  }
  let iconeCurtida = liked ? (iconeCoracaoPreto) : (iconeCoracaoBranco); 

  let caixaDeComentario = commenting ? (
    <SecaoComentario enviarComentario= {enviarComentario} />
  ) : (

    comments.map( (comment, index) => {
      return (
        <CommentContainer key = {index}>
          <p>{comment}</p>
        </CommentContainer>
      )
    })
  )


  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <>{props.nomeUsuario}</>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numberLikes}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numberComments}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post 