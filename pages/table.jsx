import React from 'react';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

registerAllModules();

export default function table() {

  return (
    <div className="container">
      <ExampleComponent/>
    </div>
  );
}


const ExampleComponent = () => {

  return (
    <HotTable
      // set `HotTable`'s props here
      data={[
        ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
        ['2019', 10, 11, 12, 13],
        ['2020', 20, 11, 14, 13],
        ['2021', 30, 15, 12, 13]
      ]}
      rowHeaders={true}
      colHeaders={true}
      height="auto"
      licenseKey="non-commercial-and-evaluation" // for non-commercial use only
    />
  );
};