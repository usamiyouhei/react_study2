import { useEffect, useState } from 'react'

const Display = (props) => {
  const [text, setText] = useState('Loading...')
  // const {count} = props


  useEffect(() => {
    setTimeout(() => {
      setText(`カウント: ${props.count}`)
    }, 2000);
  }, [])
  
  return (
    <>
    <div>
      カウント:{props.count}
    </div>
    <div>
      {text}
    </div>
    </>
  )
}

export default Display
