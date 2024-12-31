// app/settings/ClientForm.tsx
"use client";

import React, { useState } from "react";
import FormInput from "@/app/components/molecules/form/FormInput";
import Button from "@/app/components/atoms/button/button";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import GridBox from "@/app/components/templates/grid/GridBox";
import { Label } from "@/app/components/atoms/form/label";
import Modal from "@/app/components/atoms/modal/modal";

interface ClientFormProps {
  envVariables: Record<string, string>;
}

const ClientForm: React.FC<ClientFormProps> = ({ envVariables }) => {
  const [formData, setFormData] = useState(envVariables);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/updateEnv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Environment variables updated successfully");
    } else {
      const errorData = await response.json();
      alert(`Failed to update environment variables: ${errorData.message}`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Map over the environment variables */}
        <FlexBox flexDirection="Column" gap="Gap4">
          {Object.entries(formData).map(([key, value]) => (
            <GridBox gridTemplateColumns="Col2" key={key} gap="Gap4">
              <Label htmlFor={key}>
                {key.replace(/([A-Z])/g, " $1").toUpperCase()}
              </Label>
              <FormInput
                key={key}
                id={key}
                name={key}
                label={key.replace(/([A-Z])/g, " $1").toUpperCase()}
                placeholder={`Enter ${key}`}
                value={value || ""}
                onChange={handleChange}
              />
            </GridBox>
          ))}
        </FlexBox>
        <FlexBox
          padding="Pt4"
          flexDirection="Row"
          gap="Gap4"
          justifyContent="Between"
        >
          <Button color="Primary" type="submit" text="Save" />
          <Button
            color="Error"
            type="submit"
            text="Delete"
            shouldOpenModal={true}
          />
        </FlexBox>
      </form>
      <Modal
        id="deleteConfirmationModal"
        title="Confirm Deletion"
        subtitle="Are you sure you want to delete this item?"
      >
        <Button color="Primary" type="button" text="Confirm" />
        <Button color="Secondary" type="button" text="Cancel" />
      </Modal>
    </>
  );
};

export default ClientForm;
