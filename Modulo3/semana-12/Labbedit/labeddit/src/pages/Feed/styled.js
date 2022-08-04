import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  @media screen and (min-device-width : 300px) and (max-device-width : 500px) {
    width: 100%;
  }
  @media screen and (min-device-width : 501px) {
    width: 500px;
  }
`
export const Line = styled.hr`
  width: 100%;
  height: 1px;
  margin: 18px 0;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border: 0 none;
`

//Styled FeedPage

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PostTitle = styled.input`
  width: 100%;
  padding: 18px;
  margin-bottom: 18px;
  color: #6F6F6F;
  font-size: 18px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  background-color: #EDEDED;
  border: none;
  border-radius: 12px;
`

export const Post = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 18px;
  resize: none;
  color: #6F6F6F;
  font-size: 18px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  background-color: #EDEDED;
  border: none;
  border-radius: 12px;
`
export const GradientButton2 = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 18px;
  font-size: 18px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 700;
  
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border: none;
  border-radius: 12px;
`