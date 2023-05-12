import React from "react";
import "./Body.css";
// import ShowComponents from "../ShowComponents";
import ErrorModal from "../UI/ErrorModal";
import LoadingModal from "../UI/LoadingModal";
// import ProcessStatusSelector from "../ProcessStatusSelector";
// import PortStatusSelector from "../PortStatusSelector";
import Table from "../Table";

function Body({ error, setError, isLoading, setIsLoading, componentData, setChange, selectedProcessStatus}) {
  // const [selectedProcessStatus, setSelectedProcessStatus] = useState("Started");
  // const [selectedPortStatus, setSelectedPortStatus] = useState("Open");

  const errorModalOkayHandler = () => {
    setError(null);
    setIsLoading(true);
  };
  return (

    <div className="body">

      {error && (
        <ErrorModal
          title="Something went wrong!"
          message={error}
          onClickOkay={errorModalOkayHandler}
        ></ErrorModal>
      )}
      {isLoading && !error && (
        <LoadingModal
          title="WebSocket Connection Failed"
          message="Trying to connect to the WebSocket. Please Wait....."
          onClickOkay={errorModalOkayHandler}
        ></LoadingModal>
      )}

      {/* {componentData.length > 0 && (
        <ShowComponents componentData={componentData} />
      )} */}
      {componentData.length > 0 && !isLoading && !error && (
        <Table componentData={componentData} setChange={setChange} selectedProcessStatus={selectedProcessStatus} />
      )}
    </div>
  );
}

export default Body;
