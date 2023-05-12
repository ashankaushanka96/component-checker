import React, { useContext } from 'react'
import './Table.css'
import TableData from './TableData'
import filterContext from "../store/filter-context";

function Table({ componentData, setChange, selectedProcessStatus }) {
    const ctx = useContext(filterContext);
    return (
        <table className='table'>
            <tbody>
                <tr className='header-row'>
                    <th className='component-name-hr'>Component Name</th>
                    <th className='ip-hr'>IP</th>
                    <th className='port-hr'>Port</th>
                    <th className='process-status-hr'>Process Status</th>
                    <th className='port-status-hr'>Port Status</th>
                    <th className='start-time-hr'>Start Time</th>
                    <th className='end-time-hr'>End Time</th>
                    <th className='running-dates-hr'>Running Dates</th>
                    <th className='uptime-hr'>UP Time</th>
                </tr>
                <tr className='other-rows'>
                    <div className='other-rows-inside'>
                        {componentData.map((component) => (
                            (RegExp(ctx.selectedMenu, 'gi').test(component.category) && ((component.process_status !== 'notStarted' && selectedProcessStatus === 'Started') || (selectedProcessStatus === 'All')) && <TableData
                                key={component.id+component.ip}
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
                                uptime={component.uptime}
                                setChange={setChange}
                            />)
                        ))}
                    </div>
                </tr>

            </tbody>
        </table>
    )
}

export default Table