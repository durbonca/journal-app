import { db } from "../firebase/firebase-config"

export const loadNotes = async(uid) => {

    // get order by date

    const notesSnap = await db.collection(`${uid}/journal/notes`).orderBy("date", "desc").get();
    const notes = [];

    notesSnap.forEach( snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    return notes;
}