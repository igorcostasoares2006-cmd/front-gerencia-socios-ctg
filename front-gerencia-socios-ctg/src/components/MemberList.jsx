import './MemberList.css'

function MemberList({ title, members }) {
  return (
    <div className="member-list">
      <h3>{title}</h3>

      <div className="member-list__items">
        {members.map((member) => (
          <MemberListItem key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}

function MemberListItem({ member }) {
  return (
    <article className="member-row">
      <div className="member-row__identity">
        <Avatar name={member.name} />
        <div>
          <strong>{member.name}</strong>
          <p>{member.email}</p>
        </div>
      </div>

      <div className="member-row__meta">
        <span className="member-row__date">{member.joinedAt}</span>
        <StatusBadge status={member.status} />
      </div>
    </article>
  )
}

function Avatar({ name }) {
  return <span className="member-avatar">{name.charAt(0)}</span>
}

function StatusBadge({ status }) {
  return <span className={`status-badge status-badge--${status}`}>{status}</span>
}

export default MemberList