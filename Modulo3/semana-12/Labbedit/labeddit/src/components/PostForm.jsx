import React from "react";
import { GradientButton2, Post, PostTitle } from "../pages/Feed/styled";
import { post } from "../constants/requests";
import useForm from "../hooks/useForm"
import { PostContainer } from "../pages/Feed/styled";

const PostForm = (props)=>{
    const { form, onChange, clear } = useForm({ title: "", body: "" })

  const onSubmitPost = (event) => {
    event.preventDefault()

    post(form, props.getPosts, clear)

  }
  return (
  <PostContainer>
  <form onSubmit={onSubmitPost}>
    <PostTitle
      name="title"
      value={form.title}
      onChange={onChange}
      placeholder="Título"
      required
    />
    <Post
      name="body"
      value={form.body}
      onChange={onChange}
      placeholder="Escreva seu post..."
      required
    />
    <GradientButton2>Postar</GradientButton2>
  </form>
</PostContainer>
)
}
export default PostForm