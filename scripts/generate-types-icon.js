const fs = require('fs')
const globby = require('globby')

const FLIGHT_ICON_PUBLIC_GLOB = './public/icons/*.svg'
const flightIconsPublicArr = globby.sync(FLIGHT_ICON_PUBLIC_GLOB)

const flightIconKeys = flightIconsPublicArr
  .map((path) => path.split('/').pop().replace('.svg', ''))
  .map((key) => `  | '${key}'`)
  .filter((key, index, self) => self.indexOf(key) === index)
  .join('\n')

const typesData = `export type Icons = \n${flightIconKeys}`

fs.writeFile('types/icon-names.d.ts', typesData, function (err) {
  if (err) return console.log(err)
})
