import { Dispatch, SetStateAction } from 'react'

type Props = {
  currentTab : string
  unreadEmailsLength : number
  starredEmailsLength : number
  setCurrentTab : Dispatch<SetStateAction<string>>
  setHideRead :  Function
  hideRead : boolean
  
}

export function Nav ({currentTab, unreadEmailsLength, starredEmailsLength, setCurrentTab, setHideRead, hideRead} : Props) {
    return(
        <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => setCurrentTab('inbox')}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmailsLength}</span>
          </li>
          <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => setCurrentTab('starred')}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmailsLength}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={e => setHideRead(e.target.checked)}
            />
          </li>
        </ul>
      </nav> 
    )
}