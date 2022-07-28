import { Dispatch, SetStateAction } from 'react'
import { EmailT } from '../data/emails'
import { Email } from './Email'

type Props = {
  
  getFilteredEmails: () => EmailT[]
  toggleRead: Function
  toggleStar: Function
}

export function Emails({  getFilteredEmails, toggleRead, toggleStar }: Props) {
  return (
    <main className="emails">
      <ul>
        {getFilteredEmails().map((email, index) => (
        <Email key={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar}  />
        ))}
      </ul>
    </main>
  )
}