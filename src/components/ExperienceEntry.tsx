interface Props {
  role: string;
  company: string;
  date: string;
  children: React.ReactNode; // List items
}

const ExperienceEntry = ({ role, company, date, children }: Props) => {
  return (
    <li className="list-group-item p-3">
      <div className="d-flex justify-content-between align-items-top gap-4">
        <h6>
          <strong>{role}</strong> - {company}
        </h6>
        <h6 className="text-end">{date}</h6>
      </div>
      <div>
        <ul>{children}</ul>
      </div>
    </li>
  );
};

export default ExperienceEntry;
