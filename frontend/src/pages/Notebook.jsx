import React, { useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Entry from "../components/Entry";
import Time from "../components/Time";
import Paper from "../components/Paper";

import parasol from "../assets/parasol.jpg";
import bridge from "../assets/bridge.jpg";
import house from "../assets/peasant.jpg";
import plumtrees from "../assets/plumtrees.jpg";

function Notebook() {
  // notes data
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  // for viewing the notes/paper
  const [showPaper, setShowPaper] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  // for saving a new note
  const [currentNoteId, setCurrentNoteId] = useState(null);

  // for page navigation
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  const togglePaper = () => {
    setTitle("")
    setContent("")
    setShowPaper(true);
    setReadOnly(false);
  };

  // get all of the entries and store to use state notes
  useEffect(() => {
    getNotes();
  }, []);

  const getCurrentEntries = () => {
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;
    return notes.slice(startIndex, endIndex);
  };                                                                            

  // get the list of entries
  const getNotes = () => {
    api
      .get("/api/opus/")
      .then((req) => req.data)
      .then((data) => {
        setNotes(data);
        const current = Math.ceil(data.length / entriesPerPage);
        setTotalPages(current);
        setCurrentPage((prev) => Math.min(current, prev));
      })
      .catch((err) => alert(err));
  };

  // entry deletion
  const deleteEntry = (id) => {
    api
      .delete(`/api/opus/delete/${id}/`)
      .then((req) => {
        if (req.status === 204) {
          alert("Note deleted!");
          setShowPaper(false);
          getNotes();
          return;
        }
        alert("Failed to delete entry.");
      })
      .catch((error) => alert(error));
  };

  // creating entries
  const createEntry = (e) => {
    e.preventDefault();
    api
      .post("api/opus/", { content, title })
      .then((req) => {
        if (req.status === 201) {
          alert("Entry Added.");
          setTitle(""), setContent("");
          getNotes();
          setShowPaper(false);
          return;
        }
        alert("Failed to add entry.");
      })
      .catch((error) => alert(error));
  };

  // deleting entries
  const updateEntry = (id) => {
    console.log({content, title})
    api
      .put(`api/opus/update/${id}/`, { content, title })
      .then((req) => {
        if (req.status === 200) {
          setReadOnly(true); // set read only to true after update
          alert("Entry Updated.");
          getNotes();
          return;
        }
        alert("Failed to update entry.")
      })
      .catch((error) => {
        console.error(error.response.data)
        alert(error)
      });
  };

  return (
    <div className="h-screen w-screen top-0 left-0 bg-[#FEFAE0] overflow-hidden select-none">
      <Header />
      <div className="flex w-screen h-full gap-x-24">
        <div className="flex w-2/5 roboto-serif">
          <div className="flex flex-col items-start gap-y-8 w-4/5 mt-28 ms-12">
            <div className="flex gap-4 text-[24px]">
              <button className="">Entries</button>
              <div className="w-[1px] h-[36px] bg-black"></div>
              <button className="opacity-[0.5]">Drafts</button>
            </div>
            <div className="relative flex flex-col gap-y-8 w-full ms-14">
              {/* list entries */}
              {getCurrentEntries().map((note) => (
                <Entry
                  note={note}
                  onDelete={deleteEntry}
                  setTitle={setTitle}
                  setContent={setContent}
                  setShowPaper={setShowPaper}
                  setReadOnly={setReadOnly}
                  setCurrentNoteId={setCurrentNoteId}
                  readOnly={readOnly}
                  key={note.id}
                />
              ))}
              <div className="flex gap-x-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`roboto-serif ${currentPage === 1 ? "opacity-[0.5]" : "opacity-1"}`}
                >
                  Previous
                </button>
                <div className="roboto-regular">
                  <span>Page {currentPage} of {totalPages}</span>
                </div> 
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`roboto-serif ${currentPage === totalPages ? "opacity-[0.5]" : "opacity-1"}`}
                >
                  Next
                </button>
              </div>

            </div>
          </div>
        </div>
        {/* show the paper if write/entry clicked */}
        {showPaper && (
          <Paper
            title={title}
            content={content}
            setTitle={setTitle}
            setContent={setContent}
            setShowPaper={setShowPaper}
            createEntry={createEntry}
            updateEntry={updateEntry}
            deleteEntry={deleteEntry}
            setReadOnly={setReadOnly}
            readOnly={readOnly}
            currentNoteId={currentNoteId}
          />
        )}
        <div className="flex items-center h-full w-full p-8 overflow-hidden">
          <div className="grid grid-rows-12 grid-cols-12 lg:h-[700px] md:h-[500px] sm:h-[400px] w-full mb-36 gap-1">
            <div
              className="row-span-5 col-span-7 bg-cover bg-center"
              style={{ backgroundImage: `url(${house})` }}
            ></div>
            <div
              className="col-start-8 col-span-5 row-span-7 bg-cover bg-center "
              style={{ backgroundImage: `url(${parasol})` }}
            ></div>
            <div className="flex row-span-2 col-span-5">
              <div className="flex flex-col text-5xl m-2 roboto-serif">
                Cryann Von Claifleur
              </div>
            </div>
            <div className="flex col-start-6 row-span-2 col-span-2 items-center justify-center roboto-serif">
              <button type="button" onClick={togglePaper} className="py-4 px-6 rounded-full bg-[#D4A373]">
                Write
              </button>
            </div>
            <div
              className="row-span-5 col-span-8 bg-cover bg-center"
              style={{ backgroundImage: `url(${plumtrees})` }}
            ></div>
            <div
              className="row-span-5 col-span-4 bg-cover bg-center"
              style={{ backgroundImage: `url(${bridge})` }}
            ></div>
          </div>
        </div>
        {!showPaper && (
          <div className="flex flex-col items-center justify-center w-2/5 gap-20 mb-40 mr-12 overflow-hidden">
            <div className="flex flex-col items-center roboto-serif font-[50]">
              <Time />
              <p className="text-3xl font-[300]">Good day, Kabs!</p>
            </div>
            <div>
              <p className="w-[320px] text-center roboto-serif">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam"
              </p>
            </div>
          </div>
        )}
      </div>
      {/* footer */}
      <div className="absolute bottom-0 w-screen h-[60px] bg-[#FAEDCD]">
        <div className="flex flex-col w-full h-full justify-center items-center roboto-serif">
          <div>
            <p>"The limits of my language means the limits of my world."</p>
            <p className="float-right text-xs">- L. Wittgenstein</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notebook;
