import React, { useState } from "react";

const Paper = ({
  title,
  content,
  setTitle,
  setContent,
  setShowPaper,
  createEntry,
  updateEntry,
  deleteEntry,
  readOnly,
  setReadOnly,
  currentNoteId,
  setIsDraft,
  isDraft,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setReadOnly(false);
    setIsEdit(true);
  };

  return (
    <div className="flex items-center h-full w-max ms-4">
      <div className="w-[520px] h-[700px] mb-36 shadow-md bg-[#FAEDCD] p-4 rounded-lg">
        <div className="h-max flex">
          {!readOnly && (
            <>
              <div className="flex justify-start">
                <input 
                id="isDraft" 
                type="checkbox" 
                checked={isDraft}
                onChange={(e) => setIsDraft(e.target.checked)}
                />
                <label className="w-max" for="isDraft">
                  Save as Draft
                </label>
              </div>
            </>
          )}
          <div className="flex w-full justify-end gap-x-4">
            {readOnly && (
              // Only show delete button if read-only
              <>
                <button type="button" onClick={toggleEdit} className="">
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => deleteEntry(currentNoteId)}
                  className=""
                >
                  Delete
                </button>
              </>
            )}
            <button
              type="button"
              onClick={() => setShowPaper(false)}
              className=""
            >
              Close
            </button>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (isEdit) {
              updateEntry(currentNoteId);
            } else {
              createEntry(e);
            }
          }}
          className="flex flex-col gap-y-4"
        >
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              className="rounded select-none border-2 p-2 border-gray-500 focus:outline-none"
              type="text"
              id="title"
              name="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              disabled={readOnly}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="content">Content</label>
            <textarea
              className="rounded max-h-[475px] min-h-[475px] p-2 border-2 border-gray-500 focus:outline-none"
              type="text"
              id="content"
              name="content"
              required
              onChange={(e) => setContent(e.target.value)}
              value={content}
              disabled={readOnly}
            ></textarea>
          </div>
          {!readOnly && (
            <button type="submit" value="Submit">
              Submit
            </button> // Only show submit button if not read-only
          )}
        </form>
      </div>
    </div>
  );
};

export default Paper;
