
import React from 'react'
import Maybe from 'folktale/maybe'
import { isNil, is, has, isEmpty, prop, propEq, sortWith, ascend, find } from 'ramda'
import URLSearchParams from '@ungap/url-search-params'

const Just = Maybe.Just
const Nothing = Maybe.Nothing

// export const find = (xs, predicate) => {
//   for (const x of xs) {
//     if (predicate(x))  return Just(x)
//   }

//   return Nothing()
// }

export const maybeHas = (x, y) =>
  x in y
    ? Just(y[x])
    : Nothing()

export const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
    value => value
  )

export const toggleArrayItem = (xs, x) =>
  xs.indexOf(x) === -1
    ? xs.concat([x])
    : xs.filter(i => i !== x)

// export const commaSeparate = (acc, item) => `${acc}${item}`
export const getQueryParams = props => x =>
  (new URLSearchParams(props.location.search)).get(x)

export const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const removeQuotes = x => x.replace(/"([^"]+(?="))"/g, '$1')

export const shorten = x =>
  x.length > 22
    ? `${x.substr(0, 10)}...${x.substr(x.length - 11, x.length)}`
    : x

// export const getShowroomsWithInventory = showrooms =>
//   is(Array, showrooms)
//     ? showrooms.filter(item => !isEmpty(item.retail_location_inventory))
//     : []

export const isNilString = x => x == 'null' || isNil(x)

export const isMissingFrom = x => xs => !has(x, xs) || isEmpty(xs[x]) || isNil(xs[x])

export const isMissing = xs => isMissingFrom(xs)
export const isMissingSubdomain = isMissing('subdomain')
export const isMissingLogo = isMissing('logo')
// export const isMissingShowrooms = showrooms => isEmpty(showrooms)
// export const isMissingInventory = showrooms => isEmpty(getShowroomsWithInventory(showrooms))

export const propActionState = prop('action_state')

export const sortByActionState = sortWith([ascend(propActionState)])

// export const renderShowroomName = showrooms => id => {
//   const showroom = find(propEq('id', id))(showrooms)

//   return has('name', showroom)
//     ? <p>{showroom.name}</p>
//     : null
// }

// export const getShowroomName = showrooms => id => {
//   const showroom = find(propEq('id', id))(showrooms)

//   return !isNil(showroom) && has('name', showroom) ? showroom.name : ''
// }

export default {
  maybeHas,
  // find,
  compose,
  toggleArrayItem,
  getQueryParams,
  capitalize,
  removeQuotes,
  getShowroomsWithInventory,
  isMissingSubdomain,
  isMissingLogo,
  isMissingShowrooms,
  isMissingInventory,
  propActionState,
  sortByActionState,
  renderShowroomName,
  getShowroomName,
  // commaSeparate,
}
