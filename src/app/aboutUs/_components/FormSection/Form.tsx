import React from "react";
import Form from "../../../_components/FormSection/Form";
import FormImage from "../../../_assets/Form.svg";
// import Form from "./"; // Adjust path based on your structure

const ConsultationPage = () => {
  return (
    <div>
      {/* Render Form Component */}
      <Form 
  backgroundImage={FormImage}
  dynamicOpacity={0}
  contentOpacity={100}
  contentBackgroundColor="#F3F4F6"
/>

    </div>
  );
};

export default ConsultationPage;
