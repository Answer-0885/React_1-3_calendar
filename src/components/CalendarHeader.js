import "../App.css";

const CalendarHeader = ({ formatDate }) => {
  return (
    <div>
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{formatDate("EEEE")}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">
            {formatDate("d")}
          </div>
          <div className="ui-datepicker-material-month">
            {formatDate("MMMM")}
          </div>
          <div className="ui-datepicker-material-year">{formatDate("Y")}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{formatDate("LLLL")}</span>
          &nbsp;
          <span className="ui-datepicker-year">{formatDate("Y")}</span>
        </div>
      </div>
    </div>
  );
};
export default CalendarHeader;