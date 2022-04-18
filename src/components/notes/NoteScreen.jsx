import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForms';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

  const dispatch = useDispatch()
  const { url } = useSelector(state => state.notes.active)
  const { active:note } = useSelector(state => state.notes);
  const [values, handleInputChange, reset] = useForm(note);
  const { title, body, id } = values;

  const activeId = useRef( note.id );

  const handleDelete = () => {
    dispatch(startDeleting( id ))
  }

  useEffect( () => {
      if(note.id !== activeId.current) {
        reset(note);
        activeId.current = note.id;
      }
    }, [note, reset]); 

    useEffect( () => {
       dispatch( activeNote( values.id, { ...values } ) )
    }, [values, dispatch]);
  
  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input 
          type="text" 
          placeholder="Some awesome title..."
          className='notes__title-input'
          autoComplete='off'
          name='title'
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="What happened today?"
          className='notes__textarea'
          name='body'
          value={body}
          onChange={handleInputChange}
          >
        </textarea>
        { url && (
            <div>
              <img 
                className='notes__image'
                src={url}
                alt="img" 
              />
            </div>
        )}
      </div>

      <button
        className='btn btn-danger'
        onClick={handleDelete}
      >
        Borrar
      </button>

    </div>
  )
}

