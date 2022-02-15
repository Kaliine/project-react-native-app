import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { View, Text, Button, ActivityIndicator, TouchableOpacity } from 'react-native'

const QuoteText = styled.Text`
	font-weight: 700;
  color: white;
`
const StyledText = styled.Text`
  color: white;
`

const StyledButton = styled.TouchableOpacity`
	width: 50%;
  color: white;
	background-color: grey;
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
    <View>
      <StyledText>Press to see today's quote!</StyledText>
      <StyledButton onPress={generateQuote}>
        <Text>Get Quote</Text>
      </StyledButton>
      <QuoteText>Quote: {quote.content}</QuoteText>
      <StyledText>Quote: {quote.author}</StyledText>
    </View>
  )
}

export default Quote