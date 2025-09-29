
function flatlandSpaceStations(n, c) {
// c = cities with space stations is NOT ordered
c.sort((a,b) => a - b) // 0(clogic)
let maxDist = 0
let lastCity = 0
// consider very first city 
const firstCityDist = c[0]
maxDist = Math.max(firstCityDist, maxDist)

// going left to right, assume midpoint dinstant for max
for (const city of c) { // 0(c)
const midCityDist = Math.floor((city - lastCity) / 2)
maxDist = Math.max(midCityDist, maxDist)
lastCity = city
    }
    
    // consider very last city 
    const lastCityDist = n - lastCity - 1
    maxDist = Math.max(lastCityDist, maxDist)
    return maxDist
}

