import { useEffect, useState } from 'react'

export default function Typewriter({ words, speed = 80, pause = 1500 }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[i % words.length]
    let t
    if (!del && text === word) t = setTimeout(() => setDel(true), pause)
    else if (del && text === '') { setDel(false); setI((p) => p + 1) }
    else t = setTimeout(() => setText(word.slice(0, text.length + (del ? -1 : 1))), del ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [text, del, i, words, speed, pause])

  return (
    <span>
      {text}
      <span className="inline-block w-[3px] h-[1em] bg-blue-400 ml-1 align-middle animate-pulse" />
    </span>
  )
}
