export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div 
            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://www.seekpng.com/png/detail/113-1130274_shrek-its-all-ogre-now.png)'
            }}
        >
        </div>

        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                un nuevo dia
            </p>
            <p className="journal__entry-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>
            
        </div>

  )
}
