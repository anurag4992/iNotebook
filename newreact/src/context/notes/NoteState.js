import React, {useState} from "react";
import NoteContext from './noteContext'

const NoteState = (props) =>{

    const noteInitial = [
        {
          "_id": "62c4410fd7cbab4cb7b45f59",
          "user": "62c40faf18c02eb7872a5f95",
          "title": "My titleNew",
          "description": "My descriptionNew",
          "tag": "Youtube",
          "date": "2022-07-05T13:47:59.343Z",
          "__v": 0
        },
        {
          "_id": "62c4427b7b29232bde2c41c2",
          "user": "62c40faf18c02eb7872a5f95",
          "title": "Not a good note",
          "description": "But good description",
          "tag": "Discord",
          "date": "2022-07-05T13:54:03.086Z",
          "__v": 0
        },
        {
          "_id": "62c442847b29232bde2c41c4",
          "user": "62c40faf18c02eb7872a5f95",
          "title": "Not good notes",
          "description": "But good description",
          "tag": "Discord",
          "date": "2022-07-05T13:54:12.355Z",
          "__v": 0
        },
        {
          "_id": "62c446bd71df479130f9dcc2",
          "user": "62c40faf18c02eb7872a5f95",
          "title": "Not good notes",
          "description": "But good description",
          "tag": "Discord",
          "date": "2022-07-05T14:12:13.189Z",
          "__v": 0
        },
        {
          "_id": "62c446bd71df479130f9dcc2",
          "user": "62c40faf18c02eb7872a5f95",
          "title": "Not good notes",
          "description": "But good description",
          "tag": "Discord",
          "date": "2022-07-05T14:12:13.189Z",
          "__v": 0
        },
        {
          "_id": "62c446bd71df479130f9dcc2",
          "user": "62c40faf18c02eb7872a5f95",
          "title": "Not good notes",
          "description": "But good description",
          "tag": "Discord",
          "date": "2022-07-05T14:12:13.189Z",
          "__v": 0
        },
        {
          "_id": "62c446bd71df479130f9dcc2",
          "user": "62c40faf18c02eb7872a5f95",
          "title": "Not good notes",
          "description": "But good description",
          "tag": "Discord",
          "date": "2022-07-05T14:12:13.189Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(noteInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState