// Getters are like computed properties for stores
// They receive the state as their first argument

// Counter Component Getters ---------------------------------------------------
export const count = state => state.count

const limit = 5

export const recentHistory = state => {
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : end - limit
  return state.history
    .slice(begin, end)
    .toString()
    .replace(/,/g, ', ')
}

// ArtistSearch Component Getters -----------------------------------------------
export const artists = state => state.artists
export const isBusy = state => state.isBusy

// SureVote Global Getters -----------------------------------------------------
export const user = state => state.user
