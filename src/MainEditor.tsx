import React, { useState } from 'react';
//@ts-ignore
import { FormField, PanelOptionsGroup } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';
import { PanelOptions } from './types';

export const MainEditor: React.FC<PanelEditorProps<PanelOptions>> = ({ options, onOptionsChange }) => {
  const [filename, setFilename] = useState(options.filename);

  const onSubmit = () => {
    onOptionsChange({ filename });
  };

  return (
    <PanelOptionsGroup>
      <div className="editor-row">
        <div className="section gf-form-group">
          <h5 className="section-heading">Set Filename</h5>
          <FormField
            label="Center Latitude"
            labelWidth={10}
            inputWidth={40}
            type="number"
            name="center_lat"
            value={filename}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilename(e.target.value)}
          />
          <button className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </div>
    </PanelOptionsGroup>
  );
};
