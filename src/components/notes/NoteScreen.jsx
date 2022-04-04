import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
      <NotesAppBar />

      <div className='notes__content'>
        <input 
          type="text" 
          placeholder="Some awesome title..."
          className='notes__title-input'
          autoComplete='off'
        />

        <textarea
          placeholder="What happened today?"
          className='notes__textarea'
          >
        </textarea>

        <div>
          <img 
            className='notes__image'
            src="https://as01.epimg.net/epik/imagenes/2018/11/16/portada/1542384053_864693_1542384302_noticia_normal_recorte1.jpg" 
            alt="un pikachu" 
          />
        </div>
      </div>
    </div>
  )
}

