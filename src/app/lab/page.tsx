"use client";

import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw, SlidersHorizontal } from "lucide-react";

const initialValues = [4, 1, 7, 3, 6, 2, 5];
export default function LabPage() {
  const [values, setValues] = useState(initialValues);
  const [step, setStep] = useState(0);
  const [algorithm, setAlgorithm] = useState("selection");
  const trace = useMemo(() => {
    const arr = [...values];
    const steps: { array: number[]; active: number[]; message: string }[] = [{ array: [...arr], active: [], message: "Start with the unsorted array." }];
    if (algorithm === "selection") {
      for (let i=0;i<arr.length-1;i++) { let min=i; for(let j=i+1;j<arr.length;j++){steps.push({array:[...arr],active:[min,j],message:`Compare ${arr[min]} and ${arr[j]}; current minimum is ${arr[min]}.`});if(arr[j]<arr[min])min=j;}if(min!==i)[arr[i],arr[min]]=[arr[min],arr[i]];steps.push({array:[...arr],active:[i,min],message:`Place ${arr[i]} at sorted position ${i}.`});}
    } else {
      for(let i=1;i<arr.length;i++){const key=arr[i];let j=i-1;while(j>=0&&arr[j]>key){steps.push({array:[...arr],active:[j,j+1],message:`Shift ${arr[j]} right to make room for ${key}.`});arr[j+1]=arr[j];j--;}arr[j+1]=key;steps.push({array:[...arr],active:[j+1],message:`Insert ${key} at index ${j+1}.`});}
    }
    steps.push({array:[...arr],active:[],message:"Array is sorted. Compare the trace with the algorithm's complexity."});
    return steps;
  }, [values, algorithm]);
  const current = trace[Math.min(step, trace.length-1)];
  function reset(){setValues(initialValues);setStep(0);}
  return <div className="page-wrap inner-page"><div className="eyebrow"><span className="eyebrow-mark">/</span> EXPERIMENTAL WORKSPACE / 01</div><section className="lab-hero"><div><h1>Make the algorithm<br/><span className="text-accent">visible.</span></h1><p>A working sorting visualizer — inspect the array, step through comparisons, and connect behavior to complexity.</p></div><div className="lab-badge panel"><SlidersHorizontal size={19}/><span>STATEFUL DEMO</span><strong>Step-by-step execution</strong><small>No code is run on a server.</small></div></section>
    <section className="visualizer panel"><div className="visualizer-toolbar"><div><span className="eyebrow">ALGORITHM PLAYGROUND</span><h2>{algorithm==="selection"?"Selection sort":"Insertion sort"}</h2></div><select value={algorithm} onChange={event=>{setAlgorithm(event.target.value);setStep(0);}} aria-label="Select sorting algorithm"><option value="selection">Selection sort</option><option value="insertion">Insertion sort</option></select></div>
      <div className="bar-chart" role="img" aria-label={`Array values: ${current.array.join(", ")}`}>{current.array.map((value,index)=><div className={`bar-wrap ${current.active.includes(index)?"bar-active":""}`} key={index}><span>{value}</span><div className="bar" style={{height:`${value*11+16}%`}}/><small>{index}</small></div>)}</div>
      <div className="trace-message"><span>STEP {String(Math.min(step+1,trace.length)).padStart(2,"0")} / {String(trace.length).padStart(2,"0")}</span><p>{current.message}</p></div><div className="visualizer-controls"><button className="button button-secondary" onClick={reset}><RotateCcw size={14}/> Reset input</button><div><button className="button button-secondary" onClick={()=>setStep(s=>Math.max(0,s-1))} disabled={step===0}>Previous</button><button className="button button-primary" onClick={()=>setStep(s=>Math.min(trace.length-1,s+1))} disabled={step===trace.length-1}>Next step <ArrowRight size={14}/></button></div></div>
      <div className="complexity-row"><div><span>TIME</span><strong>O(n²)</strong><small>Average / worst case</small></div><div><span>SPACE</span><strong>O(1)</strong><small>In-place sort</small></div><div><span>LEARNING GOAL</span><strong>Track state</strong><small>Compare, shift, place</small></div></div></section>
    <section className="learning-note panel"><div className="eyebrow">WHY THIS MATTERS</div><h2>Reason about each operation.</h2><p>This is a visual teaching aid, not a replacement for analysis. Count comparisons and writes, recognize nested-loop structure, and compare simple algorithms with more efficient approaches for larger inputs.</p></section>
  </div>;
}