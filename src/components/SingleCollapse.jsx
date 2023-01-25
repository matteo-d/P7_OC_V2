import { useState } from "react"
import { Section, Article, HeaderArticle, Arrow, TitleArticle, Text } from "../styles/Collapse"

import ArrowDown from "../assets/arrowDown.svg"
import ArrowUp from "../assets/arrowUp.svg"

export  function SingleCollapseText({article}) {
  const [isExpanded, setExpanded] = useState(false);

  function toggleArrow() {
    setExpanded(!isExpanded);
  }

  return(
    <Section>
        <Article>
            <HeaderArticle>
                <TitleArticle>Description</TitleArticle>
                <Arrow bgImage={isExpanded ? ArrowUp : ArrowDown} onClick={toggleArrow}> </Arrow>
            </HeaderArticle>
            <Text display={isExpanded ? "block" : "none"}>{article.description}</Text>
        </Article>
    </Section>
  )
}

export function SingleCollapseList({list}) {
  const [isExpanded, setExpanded] = useState(false);

  function toggleArrow() {
    setExpanded(!isExpanded);
  }

  return(
    <Section>
        <Article>
            <HeaderArticle>
                <TitleArticle>Equipements</TitleArticle>
                <Arrow bgImage={isExpanded ? ArrowUp : ArrowDown} onClick={toggleArrow}> </Arrow>
            </HeaderArticle>
            <ul style={{ display: isExpanded ? "block" : "none" }}>
                {list.map((element, index) => (
                  <li key={index}>{element}</li>
                ))}
            </ul>
        </Article>
    </Section>
  )
}