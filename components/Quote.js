import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { View, Text, Button, ActivityIndicator, TouchableOpacity } from 'react-native'

const ViewWrapper = styled.View`
  display: flex;
  align-items: center;
  max-width: 260px;
`

const QuoteText = styled.Text`
	font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 5px;
  font-size: 30px;
`
const StyledText = styled.Text`
  color: white;
  font-size: 20px;
`

const StyledButton = styled.TouchableOpacity`
	width: 50%;
	background-color: grey;
  border-radius: 20px;
  height: 50px;
  text-align: center;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 5px;
`


const Quote = () => {
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    generateQuote()
  }, [])

  const generateQuote = () => {
    setLoading(true)
    fetch('http://api.quotable.io/random')
    .then((res) => res.json())
    .then((data) => setQuote(data))
    .finally(() => setLoading(false))
  }

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <ViewWrapper>
      <StyledText>Today's quote!</StyledText>
      <StyledButton onPress={generateQuote}>
        <Text>Press</Text>
      </StyledButton>
      <QuoteText>"{quote.content}"</QuoteText>
      <StyledText>Author: {quote.author}</StyledText>
    </ViewWrapper>
  )
}

export default Quote