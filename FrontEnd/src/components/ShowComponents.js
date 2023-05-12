import React from 'react'
import { useContext } from 'react';
import FilterContext from '../store/filter-context';
import ComponentItem from './ComponentItem'
import NotificationHandler from './NotificationHandler';
import './ShowComponents.css'

function ShowComponents(props) {
  // const [status, setStatus] = useState('Not Started')
  let status = ''
  let isAnalyser = ''
  const ctx = useContext(FilterContext);
  const filterBodyHandler = () => {
    if (ctx.selectedMenu === 'opened') {
      status = 'Not Started';
      isAnalyser = 'yes';

    }
    if (ctx.selectedMenu === 'all') {
      status = '';
      isAnalyser = 'yes';

    }
  }

  filterBodyHandler()
  return (
    <div className='body'>
      <NotificationHandler componentData = {props.componentData}/>
      {props.componentData.map((component) => (
        
        (!(component.status === status) && isAnalyser === 'yes') && <ComponentItem
          key={component.id}
          ip={component.ip}
          id={component.id}
          category={component.category}
          name={component.name}
          process_status={component.process_status}
          port={component.port}
          port_status={component.port_status}
          startTime={component.startTime}
          endTime={component.endTime}
          runninngDates={component.runninngDates}
        />
      ))}
    </div>
  )
}

export default ShowComponents