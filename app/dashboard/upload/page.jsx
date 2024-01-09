"use client"

import React, { useState } from 'react';

export default function upload() {
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const fileInput = event.target;
        if (fileInput.files.length > 0) {
        const newFileName = fileInput.files[0].name;
        const fileExtension = newFileName.split('.').pop().toLowerCase();
        const allowedExtensions = ['amr', 'flac', 'm4a', 'mp3', 'mp4', 'ogg', 'webm', 'wav'];
        if (allowedExtensions.includes(fileExtension)){
        setFileName(newFileName);
        return true;
        }
        } else {
        setFileName('');
        return false;
        }
    };

    function setCancel() {
      setFileName('');
    }

    return (
        <>
<div className="flex items-start justify-center p-10 ml-11">
<div className="mx-auto w-full max-w-[550px] bg-white">
    <form className="" method="POST" accept=".amr,.flac,.m4a,.mp3,.mp4,.ogg,.webm,.wav">
    <div className="mb-1">
        <label className="mb-3 mt-3 block font-bold text-[#07074D] text-xl">*Title : </label>
        <input type="text" name="uploadingPerson" id="uploadingPerson" placeholder="File Title" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
    </div>

    <div className="mb-2">
        <label className="mb-2 mt-4 block text-lg font-semibold text-[#07074D]">*Upload File</label>

        <div className="mb-2">
        <input type="file" name="file" onChange={handleFileChange} id="file" className="sr-only" accept=".amr,.flac,.m4a,.mp3,.mp4,.ogg,.webm,.wav"/>
        <label htmlFor="file" className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] py-10 px-60 text-center">
            <div>
            <span className="mb-2 block text-xl font-semibold text-[#07074D]">Browse for your audio file</span>
            {/* <span className="mb-2 block text-lg font-medium text-[#6B7280]">Or</span> */}
            <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-10 text-base font-medium text-[#07074D]">Browse</span>
            <span className="mb-2 block text-lg font-small text-[#6B7280] mt-2">[.amr, .flac, .m4a, .mp3, .mp4, .ogg, .webm, .wav]</span>
            </div>
        </label>
        </div>
        {fileName &&
          (
        <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
        <div className="flex items-center justify-between">
            <span className="truncate pr-3 text-base font-medium text-[#07074D]">{fileName}</span>
            <button className="text-[#07074D]" onClick={setCancel}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                fill="currentColor"
                />
                <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                fill="currentColor"
                />
            </svg>
            </button>
        </div>
        </div>
          )
}
</div>

      <div>
        <button
          className="hover:shadow-form w-full rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold  py-3 px-8 text-center text-base text-white outline-none"
        >
          Make Report
        </button>
      </div>
    </form>
  </div>
</div>

<div className="flex items-start p-5 mt-24">
        <div className="border-right border-[#e0e0e0] h-full mr-4"></div>
        <div className="flex-grow">
        <label className="mb-3 block text-base font-bold text-[#07074D]">*Uploaded By : </label>
        <input type="text" name="uploadingPerson" id="uploadingPerson" placeholder="Your Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mb-5"/>
    <label className="block text-base font-bold text-[#07074D]">Note (Optional)</label>
    <textarea name="description" placeholder="Enter description" className="w-full h-32 rounded-md border border-[#e0e0e0] bg-white px-3 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md mt-3 resize"></textarea>
</div>
    </div>

        </>
    )
}