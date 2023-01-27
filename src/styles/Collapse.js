import styled from "styled-components"
import { device } from "../assets/device"

const Section = styled.section `
@media screen and (${device.prehistoricPhone}){

}
@media screen and (${device.mobileS}){
 
}
@media screen and (${device.mobileM}){
  
}
@media screen and (${device.mobileL}){
  
}
@media screen and (${device.tablet}){
 width : 47.5% 
}
@media screen and (${device.laptop}){
  
}
@media screen and (${device.laptopL}){
  
}
@media screen and (${device.desktop}){
  
}
@media screen and (${device.desktopL}){
  
}
`
const Article = styled.article `
display : flex;
flex-direction : column;
margin-top : 0.5rem;
border : 10px;
`
const HeaderArticle = styled.div `
display : flex;
flex-direction : row;
justify-content : space-between;
height : 2.6rem;
background-color : var(--primary-color);
border-radius: 5px;
padding : 0 1rem 0 1rem;
`
const TitleArticle = styled.h3 `
font-style: normal;
font-weight: bold;
font-size: 1rem;
color : var(--secondary-color);
 align-self : center;
`
const Arrow = styled.span `
 background-image : url(${props => props.bgImage});
 background-repeat : no-repeat;
 align-self : center;
 height : 1.4rem;
 width : 1rem;
 padding-right : 1.2rem
`
const Text = styled.p `
background-color: var(--tertiary-color);
border-radius: 5px;
padding : 1rem 1.8rem 1rem 0.8rem;
font-style: normal;
font-weight: var(--weight-little);
font-size: 1rem;
color : var(--primary-color);
visibility : ${props => props.visibility};
margin : 0;
`
const Ul = styled.ul`
background-color :  var(--tertiary-color);
list-style : none;
margin : 0;
padding : 1rem 1.8rem 1rem 0.8rem;
color : var(--primary-color);
visibility : ${props => props.visibility};
`
const List = styled.li `
border-radius: 5px;
padding : 1rem 1.8rem 1rem 0.8rem;
font-style: normal;
font-weight: var(--weight-little);
font-size: 1rem;
margin : 0;
`
export { Section, Article, HeaderArticle, TitleArticle, Arrow, Text, List, Ul }
