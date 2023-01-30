import "../App.css";

const CalendarWeek = ({ namesWeek }) => {
  return (
    <thead>
      <tr>
        {namesWeek.map((name) => (
          <th key={name} scope="col">
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default CalendarWeek;