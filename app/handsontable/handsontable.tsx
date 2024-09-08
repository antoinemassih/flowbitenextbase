'use client';

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

import 'handsontable/dist/handsontable.full.min.css';


const DynamicHotTable = dynamic(
  () => import('@handsontable/react').then((mod) => {
    import('handsontable/registry').then(({ registerAllModules }) => {
      registerAllModules();
    });
    return mod.HotTable;
  }),
  { ssr: false }
);

export function HandsontableComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    import('handsontable/dist/handsontable.full.min.css');
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <DynamicHotTable
      data={[
        ['', 'Tesla', 'Volvo', 'Toyota', 'Ford'],
        ['2019', 10, 11, 12, 13],
        ['2020', 20, 11, 14, 13],
        ['2021', 30, 15, 12, 13]
      ]}
      rowHeaders={true}
      colHeaders={true}
      height="auto"
      licenseKey="non-commercial-and-evaluation"
    />
  );
}