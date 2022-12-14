import { EmailT } from '../data/emails'

type Props = {

    email: EmailT;
    toggleRead: Function;
    toggleStar: Function;

}
export function Email({
    email,
    toggleRead,
    toggleStar,

}: Props) {
    return (
        <li
            //key={index}
            className={`email ${email.read ? 'read' : 'unread'}`}
        >
            <div className="select">
                <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => toggleRead(email)}
                />
            </div>
            <div className="star">
                <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => toggleStar(email)}
                />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
        </li>
    )

}
