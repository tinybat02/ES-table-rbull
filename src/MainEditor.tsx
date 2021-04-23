import React, { useState } from 'react';
//@ts-ignore
import { FormField, PanelOptionsGroup } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';
import { PanelOptions } from './types';

export const MainEditor: React.FC<PanelEditorProps<PanelOptions>> = ({ options, onOptionsChange }) => {
  const [inputs, setInputs] = useState(options);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    onOptionsChange(inputs);
  };

  return (
    <PanelOptionsGroup>
      <div className="editor-row">
        <div className="section gf-form-group">
          <h5 className="section-heading">Set Filename</h5>
          <FormField
            label="File Name"
            labelWidth={10}
            inputWidth={40}
            type="text"
            name="filename"
            value={inputs.filename}
            onChange={onChange}
          />
          <FormField
            label="Timezone"
            labelWidth={10}
            inputWidth={40}
            type="text"
            name="timezone"
            value={inputs.timezone}
            onChange={onChange}
          />
          <button className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </PanelOptionsGroup>
  );
};
