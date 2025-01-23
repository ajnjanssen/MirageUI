"use client";

import React, { useState } from "react";
import Label from "@/app/components/atoms/text/label/label";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import Input from "@/app/components/molecules/form/FormInput";
import Button from "@/app/components/atoms/button/button";
import Container from "@/app/components/templates/container/container";

export default function Home() {
  const [documentName, setDocumentName] = useState("");
  const [fields, setFields] = useState([
    { id: 1, propertyType: "", identifier: "" },
  ]);

  const addField = async (e: React.FormEvent<Element>): Promise<void> => {
    e.preventDefault();
    setFields([
      ...fields,
      { id: fields.length + 1, propertyType: "", identifier: "" },
    ]);
  };

  const handleChange = (id: number, name: string, value: string) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, [name]: value } : field
      )
    );
  };

  const saveFields = async () => {
    try {
      const response = await fetch("/api/generateJson", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ documentName, fields }),
      });

      if (response.ok) {
        console.log("JSON file has been saved.");
      } else {
        const errorData = await response.json();
        console.error("Failed to save JSON file.", errorData);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <Container margin="MxAuto">
      <div className="mx auto">
        <Label>Document Name</Label>
        <Input
          label="Document Name"
          id="documentName"
          name="documentName"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
        />
      </div>
      {fields.map((field) => (
        <div className="mx auto" key={field.id}>
          <div>
            <Label>Type</Label>
            <FlexBox gap="Gap4">
              <Input
                label="Property Type"
                id={`PropertyType-${field.id}`}
                name="propertyType"
                value={field.propertyType}
                onChange={(e) =>
                  handleChange(field.id, e.target.name, e.target.value)
                }
              />
              <Input
                label="Identifier"
                id={`Identifier-${field.id}`}
                name="identifier"
                value={field.identifier}
                onChange={(e) =>
                  handleChange(field.id, e.target.name, e.target.value)
                }
              />
            </FlexBox>
          </div>
        </div>
      ))}
      <Button
        text="Add fields"
        color="Primary"
        type="button"
        onClick={addField}
      />
      <Button
        text="Save fields"
        color="Secondary"
        type="button"
        onClick={saveFields}
      />
    </Container>
  );
}
