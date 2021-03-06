import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from '@xstyled/styled-components'

import { Layout, CenterContent } from '../components'
import { CardContainer, SearchContainer } from '../containers'

import { getAllManga } from '../redux/actions'

import { useEffect } from 'react'

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 70px 5vw;
`

const Title = styled.h2`
  font-family: title;
  font-weight: 400;
  padding: auto;
`

const MangaCollection = ({ allMangaState, getAllManga }) => {
  const { isLoading, data } = allMangaState
  useEffect(() => {
    getAllManga()
  }, [getAllManga])
  return (
    <Layout
      backgroundImage="url('/backgrounds/one-piece.jpg')"
      title='Manga Collection | Saikou'
    >
      <>
        <SearchContainer></SearchContainer>
        {isLoading && (
          <CenterContent>
            <Title>now loading</Title>
          </CenterContent>
        )}
        {!isLoading && data.length > 0 && (
          <Cards>
            {data.map((cover, index) => (
              <CardContainer key={index} id={cover.id} type='manga' />
            ))}
          </Cards>
        )}
      </>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    allMangaState: state.allManga,
  }
}

MangaCollection.propTypes = {
  allMangaState: PropTypes.object,
  getAllManga: PropTypes.func,
}

export default connect(mapStateToProps, { getAllManga })(MangaCollection)
