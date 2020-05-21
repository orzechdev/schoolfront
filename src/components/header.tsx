import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Title = styled.h1`
  margin: 0;
`

const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle = "" }) => (
  <HeaderWrapper>
    <HeaderContent>
      <Title>
        <TitleLink to="/" style={{}}>
          {siteTitle}
        </TitleLink>
      </Title>
    </HeaderContent>
  </HeaderWrapper>
)

export default Header
