"use client"
import { useState } from "react";
import {LoganimationsIcon, SendIcon, AttachemntIcon, AIsearchIcon, DOCIcon, PDFIcon } from '../components/icons';

export default function Aisearch({ onSend }: { onSend: () => void })  {

  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      const extension = file.name.split('.').pop().toLowerCase();
      setFileType(extension);
    }
  };

  return (
    <div className="o2AlignSearch-center">
      <div className="text-left p-4 mt-auto text-xs subtitle">
        <LoganimationsIcon width={73} />
        <div className="text-5xl font-bold w-2xl otitle mt-4 mb-4">Hi there, David <br></br>
          What would like to know?
        </div>
        <p className='osubtitle text-base  mb-4'>Use the prompts below to begin your journey. Feel free to customise<br/>them to suit your needs.</p>
        <div className='osubtitle text-base'>
          <div className="flex flex-col w-full max-w-6xl px-4 p-6 rounded-xl bg-white border-o2 aisearchinput">
              {fileName && (
                <div className="flex flex-row mb-4">
                  <div className="flex flex-row items-center  rounded-md border border-solid border-gray-200 p-4 bg-white gap-4">
                    {fileType === "doc" || fileType === "docx" ? <DOCIcon  width={26}/> : null}
                    {fileType === "pdf" ?  <PDFIcon  width={24}/> : null}
                    {fileName && <p className="text-sm text-gray-600">{fileName}</p>}
                  </div>
                </div>
                )}
              <div className="flex-1 text-gray-400 flex items-center space-x-2 mb-4">
                <AIsearchIcon width={36}/>
                <input
                  type="text"
                  placeholder="Type your massages here..."
                  className="w-full outline-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400" />
              </div>
              <div className="flex flex-row w-full justify-between px-2">
                <div>
                  <label className="cursor-pointer inline-flex items-center px-4 py-2  text-white rounded">
                      <AttachemntIcon width={15}/>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".doc,.docx,.pdf"
                    />
                  </label>
                </div>
                <button onClick={onSend} className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6 py-4 rounded-full flex items-center gap-1 text-sm cursor-pointer">
                  Send  <SendIcon width={20}/>
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}