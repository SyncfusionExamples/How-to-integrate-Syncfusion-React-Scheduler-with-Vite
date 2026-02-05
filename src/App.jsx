import './App.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
const App = () => {

    const data = [
      {
        Id: '101',
        Subject: 'Daily Standup | Engineering',
        StartTime: new Date(2026, 1, 2, 9, 0),
        EndTime: new Date(2026, 1, 2, 9, 30),
      },
      {
        Id: '102',
        Subject: 'Design Review | Mobile App v3',
        StartTime: new Date(2026, 1, 2, 10, 0),
        EndTime: new Date(2026, 1, 2, 11, 0),
      },
      {
        Id: '103',
        Subject: 'Client Check-in | Orion Traders',
        StartTime: new Date(2026, 1, 2, 11, 30),
        EndTime: new Date(2026, 1, 2, 12, 15),
      },
      {
        Id: '104',
        Subject: 'Sprint Planning | Q1 S2',
        StartTime: new Date(2026, 1, 2, 14, 0),
        EndTime: new Date(2026, 1, 2, 15, 30),
      },
      {
        Id: '105',
        Subject: 'Vendor Call | Cloud Cost Optimization',
        StartTime: new Date(2026, 1, 2, 16, 0),
        EndTime: new Date(2026, 1, 2, 17, 0),
      },
    ];

    const eventSettings = { dataSource: data }

    return (<ScheduleComponent height='550px' selectedDate={new Date(2026, 1, 2)} currentView='Day' eventSettings={eventSettings} >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>);
};
export default App;