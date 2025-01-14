"use client";

import React, { useState } from "react";
import Label from "@/app/components/atoms/text/label/label";
import FlexBox from "@/app/components/templates/flex/FlexBox";
import Input from "@/app/components/molecules/form/FormInput";
import Button from "@/app/components/atoms/button/button";

export default function Home() {
  const [fields, setFields] = useState([{ id: Date.now() }]);

  const addField = async (e: React.FormEvent<Element>): Promise<void> => {
    e.preventDefault();
    setFields([...fields, { id: Date.now() }]);
  };

  return (
    <div>
      {fields.map((field) => (
        <React.Fragment key={field.id}>
          <div>
            <Label>Type</Label>
            <FlexBox gap="Gap4">
              <Input
                label="Property Type"
                id={`PropertyType-${field.id}`}
                name="Property Type"
                value="Property Type"
                onChange={() => {}}
              />
              <Input
                label="Identifier"
                id={`Identifier-${field.id}`}
                name="Identifier"
                value="Identifier"
                onChange={() => {}}
              />
            </FlexBox>
          </div>
        </React.Fragment>
      ))}
      <Button
        text="Add fields"
        color="Primary"
        type="button"
        onClick={addField}
      />
    </div>
  );
}
