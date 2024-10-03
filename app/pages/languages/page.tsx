'use client'
import axios from "axios";
import { useEffect, useState } from "react"

const Languages = () => {
  const [language, setLanguage] = useState('sv');
  const [text, setText] = useState('')

  const handleLanguageChange = async (lang: string) => {
    try {
      const response = await axios.get(`/api/language?language=${lang}`)
      setText(response.data.result)
        setLanguage(lang)
    } catch (error) {
        console.error('Error fetching translation', error)
    }
  }

  useEffect(() => {
    handleLanguageChange(language)
  }, [])

  return (
    <div className="flex justify-center text-center flex-col mt-32">
      <h1 className="text-5xl">Languages</h1>

      <select 
      className="my-20 m-auto"
      value={language} 
      onChange={(e) => handleLanguageChange(e.target.value)}>
        <option value="sv">Svenska</option>
        <option value="en">Engelska</option>
        <option value="fr">franska</option>
      </select>

      <h2>{text}</h2>
    </div>
  )
}

export default Languages
