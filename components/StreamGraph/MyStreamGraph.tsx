import React, { FC, useEffect, useRef, useState } from "react";
import StreamGraph from "@/components/StreamGraph/StreamGraph";


export default function MyStreamGraph() {
  const parentDivRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (parentDivRef.current) {
        setWidth(parentDivRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return(
    <div   ref={parentDivRef} style={{ width: '100%' }}>
      {width > 0 && <StreamGraph width={width} height={500} animate={true}/>}
    </div>

  )
}

