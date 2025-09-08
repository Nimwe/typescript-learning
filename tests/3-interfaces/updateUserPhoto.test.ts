import { describe, it, expect } from 'vitest'
import { updateUserPhoto } from '../../functions/3-interfaces'

describe('updateUserPhoto', () => {
  const user2 = {
    name: 'Amy',
    verified: false,
  }
  const actual = updateUserPhoto(user2, 'https://example.com/amy.jpg')

  it('returns a (new) object', () => {
    expect(typeof actual).toBe('object')
    expect(actual).not.toBe(user2)
  })

  it('returns an object with the correct properties', () => {
    expect(actual.name).toBe('Amy')
    expect(actual.verified).toBe(false)
    expect(actual.picture).toBe('https://example.com/amy.jpg')
    expect(actual.email).toBeUndefined()
  })
})
