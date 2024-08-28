import React from 'react'

const Paper = ({ title, content, setTitle, setContent, setShowPaper, onSubmit}) => {
  return (
    <div className="flex items-center h-full w-max ms-4">
      <div className="w-[520px] h-[700px] mb-36 shadow-md bg-[#FAEDCD] p-4 rounded-lg">
        <div className="flex w-full justify-end">
          <button type="button" onClick={() => setShowPaper(false)} className="">Close</button>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-y-4">
          <div className='flex flex-col'>
            <label htmlFor="title">Title</label>
            <input
              className='rounded select-none border-2 p-2 border-gray-500 focus:outline-none'
              type="text"
              id="title"
              name="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="content">Content</label>
            <textarea
              className='rounded max-h-[475px] min-h-[475px] p-2 border-2 border-gray-500 focus:outline-none'
              type="text"
              id="content"
              name="content"
              required
              onChange={(e) => setContent(e.target.value)}
              value={content}
            ></textarea>
          </div>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Paper