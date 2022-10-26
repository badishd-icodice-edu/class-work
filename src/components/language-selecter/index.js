import React, { useState } from 'react'

export default function LanguagePicker() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  return (
    <div style={containerStyle}>
      <CountrySection width="50vw" countryName={selectedCountry.country} flag={selectedCountry.flag} />

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {countries
          .filter((c) => c.country !== selectedCountry.country)
          .sort((c1, c2) => (c1.country > c2.country ? 1 : -1))
          .map((c, cIdx) => (
            <CountrySection
              key={cIdx}
              width="25vw"
              flag={c.flag}
              countryName={c.country}
              onClick={() => setSelectedCountry(c)}
            />
          ))}
      </div>
    </div>
  )
}

const CountrySection = ({ width, flag, countryName, onClick }) => (
  <div
    style={{
      border: '1px solid #999',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: 10,
    }}
    onClick={onClick && onClick}
  >
    <img src={flag} alt="flag" style={{ width, maxHeight: 125, objectFit: 'cover' }} />
    <div style={{ textAlign: 'center' }}>{countryName}</div>
  </div>
)

const containerStyle = {
  margin: 10,
  borderRadius: 10,
  border: '1px solid #999',
  backgroundColor: '#99999950',
  padding: 10,
  cursor: 'pointer',
}

const mongoliaFlag = 'https://flagpedia.net/data/flags/w580/mn.webp'
const cambodiaFlag = 'https://flagpedia.net/data/flags/w580/kh.webp'
const bangladeshFlag = 'https://flagpedia.net/data/flags/w580/bd.webp'
const indonesiaFlag = 'https://flagpedia.net/data/flags/w580/id.webp'

const countries = [
  { country: 'Mongolia', flag: mongoliaFlag },
  { country: 'Cambodia', flag: cambodiaFlag },
  { country: 'Bangladesh', flag: bangladeshFlag },
  { country: 'Indonesia', flag: indonesiaFlag },
]
