import { useState } from 'react'

import initialEmails, { EmailT } from './data/emails' //trouble understanding

import './App.css'
import { Header } from './components/Header'
import { Nav } from './components/Nav'
import { Emails} from './components/Emails'

const getReadEmails = (emails: EmailT[], searchInput: string) => {
  if (searchInput !== "") {
    return emails.filter(
      (email) =>
        !email.read &&
        email.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  return emails.filter((email) => !email.read);
};

const getStarredEmails = (emails: EmailT[], searchInput: string) => {
  if (searchInput !== "") {
    return emails.filter(
      (email) =>
        email.starred &&
        email.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  return emails.filter((email) => email.starred);
};

const getSearchedEmails = (emails: EmailT[], searchInput: string) => {
  return emails.filter((email) =>
    email.title.toLowerCase().includes(searchInput.toLowerCase())
  );
};

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [searchInput, setSearchInput] = useState("");
  //const [currentEmail, setCurrentEmail] = useState(null);

  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = (targetEmail: EmailT) => {
    const updatedEmails = (emails: Array<EmailT>) =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = (targetEmail: EmailT) => {
    const updatedEmails = (emails: Array<Email>) =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  function getFilteredEmails(): Array<EmailT> {
    let filteredEmails: EmailT[] = emails;

    if (hideRead) {
      filteredEmails = getReadEmails(filteredEmails, searchInput);
    }

    if (currentTab === "starred") {
      filteredEmails = getStarredEmails(filteredEmails, searchInput);
    }
    if (!hideRead && currentTab === "inbox") {
      filteredEmails = getSearchedEmails(filteredEmails, searchInput);
    }
    return filteredEmails;
  }


  return (
    <div className="app">
      <Header setSearchInput={setSearchInput}/>
      <Nav currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        unreadEmailsLength={unreadEmails.length}
        starredEmailsLength={starredEmails.length}/>
      <Emails 
      getFilteredEmails={getFilteredEmails}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          />
    </div>
  )
}

export default App
