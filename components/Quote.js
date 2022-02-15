import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { View, Text, Button, ActivityIndicator } from 'react-native'


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
      <Text>Press to see today's quote!</Text>
      <Button title='Click' onPress={generateQuote} />
      <Text>Quote: {quote.content}</Text>
      <Text>Quote: {quote.author}</Text>
    </View>
  )
}

export default Quote