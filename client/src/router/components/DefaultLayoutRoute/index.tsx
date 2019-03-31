import React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { parse } from 'query-string'

export function DefaultLayoutRoute({ component, render, ...rest }: RouteProps) {
  const parsedQueryParams = rest.location ? parse(rest.location.search) : {}

  if (component !== undefined) {
    const Component = component
    return (
      <Route
        {...rest}
        render={props => <Component {...props} {...parsedQueryParams} />}
      />
    )
  }

  return null
}
