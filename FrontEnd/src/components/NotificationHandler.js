
import { useEffect } from "react";

function NotificationHandler({ componentData, setCategoryStatusDict}) {
  var category_status_dict = {}
  for (const component in componentData) {
    const category = componentData[component]['category'];
    const process_status = componentData[component]['process_status'];
    const port_status = componentData[component]['port_status'];
    const id = componentData[component]['id']
    const state = localStorage.getItem(id);
    if (!(state === 'processing')){
      if ((process_status === 'notRunning') || (port_status === 'notOpen')) {
        if (category_status_dict[category]) {
          category_status_dict[category] = category_status_dict[category] + 1;
        } else {
          category_status_dict[category] = 1;
        }
      } 
    }
    
  }

  useEffect(()=>{
    setCategoryStatusDict(category_status_dict);
    // console.log('here')
  }, [componentData]);
}

export default NotificationHandler