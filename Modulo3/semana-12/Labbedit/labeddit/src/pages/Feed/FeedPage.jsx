import React from "react";
import PostForm from "../../components/PostForm";
import { BodyContainer, ContentContainer, Line } from "./styled";
import { useContext } from "react";
import { useEffect } from "react";
import GlobalStateContext from "../../Global State/GlobalStateContext";
import PostCard from "../../components/PostCard/PostCard";
import useProtectedPage from "../../hooks/useProtectdPage"

 

const FeedPage = ()=> {

    useProtectedPage()

    const { states, setters, requests } = useContext(GlobalStateContext)
  
    useEffect(() => { requests.getPosts() }, [requests])

    return(
        <BodyContainer>
            <ContentContainer>
                <PostForm getPosts={requests.getPosts}></PostForm>
                <Line></Line>
                {states.posts.map((post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              username={post.username}
              title={post.title}
              body={post.body}
              voteSum={post.voteSum}
              commentCount={post.commentCount}
              userVote={post.userVote}
            />
          )
        })}
            </ContentContainer>
        </BodyContainer>
        
    )
}

export default FeedPage