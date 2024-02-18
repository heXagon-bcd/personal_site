import React from "react";
import "../../src/output.css"

const rowIndex = () => {
  return Array.from({ length: 12 }, (v, i) => i + 1);
};

export const CodeRow = () => {
  const numbers = rowIndex();

  return (
    <div>
      <table>
        <tbody>
          <tr className="flex flex-col pl-6 py-6 bg-gray-800 text-slate-400">
              {numbers.map((lineNumber) => (
                <td key={lineNumber} className="p-0">{lineNumber}</td>
              ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
