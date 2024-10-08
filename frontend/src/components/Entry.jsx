import React from 'react'

function Entry({note, setTitle, setContent, setReadOnly, setCurrentNoteId, setShowPaper, setIsDraft}) {
  const togglePaper = () => {
    setTitle(note.title);
    setContent(note.content);
    setShowPaper(true);
    setReadOnly(true);
    setCurrentNoteId(note.id);
    setIsDraft(note.is_draft)
  };

  return (
    <div className="flex gap-x-4 w-full hover:bg-[#D4A373] rounded" onClick={togglePaper}>
      <div className='h-full w-[2px] bg-[#D4A373]'></div>
      <div className='flex flex-col justify-center w-full'>
        <div className='w-full lg:text-[22px] md:text-[16px]'>{note.title}</div>
        <div className='w-full lg:text-[16px] md:text-[10px]'>{note.get_time_and_date}</div>
      </div>
    </div>
  )
}

export default Entry