export default function Ratings ({
  rating
}) {
  console.log(rating)
  return (
    <div className='comment-container'>
      <div className='info-container'>
        <div className='info' id='user-item'>
          <div className='image-container'>
            <div className='image'><img src='https://i.imgur.com/ShtsVkV.jpg' />
            </div>
          </div>
          <div className='name-container'><p>Anon</p>
          </div>
        </div>
        <div className='info'>
          <div className='stars'>
            {rating && rating === 5
              ? <>
                &#9733;  &#9733;  &#9733;  &#9733; &#9733;
                </>
              : rating && rating === 4
                ? <>
                  &#9733;  &#9733;  &#9733;  &#9733; &#9734;
                  </>
                : rating && rating === 3
                  ? <>
                    &#9733;  &#9733;  &#9733; &#9734; &#9734;
                    </>
                  : rating && rating === 2
                    ? <>
                      &#9733;  &#9733; &#9734; &#9734; &#9734;
                      </>
                    : <>
                      &#9733; &#9734; &#9734; &#9734; &#9734;
                      </>}
            &#9733;  &#9733;  &#9733;  &#9733; &#9734;
          </div>
        </div>
      </div>
      <div className='comment-left'>
        <div className='comment'><p>
          {rating.comment
            ? <>
              {rating.comment}
            </>
            : ''}
        </p>
        </div>
      </div>
    </div>
  )
}
