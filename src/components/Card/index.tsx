import React, { memo } from "react"

const CardProfile = () => {
  return (
    <></>
  )
}

export const Card = memo(CardProfile, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps)
})
