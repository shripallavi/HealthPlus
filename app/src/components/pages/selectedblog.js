import React from 'react'
import { Link } from 'react-router-dom'
import './blogs.css'
import Thumbnail from '../images/obesity.jpeg'

const SelectedBlog = () => {
  return (    
      <>
        <div className='blogcontent'>
            <Link to="/blogs">
                <div className='back-button'>Back</div>
                </Link>
            <div className='blog'>    
                <p className='blogtag'>health</p>
                <p className='blogtitle'>How To Overcome Obesity.</p>
                <p className='blogdate'>April, 2022</p>
            </div>
            <div className='actualcontent'>
                <div className='img'><img src = {Thumbnail}/></div>
                <div>
                    <p className='blogdata'>
                    What is self-care really about? It’s simply the time we take to look after our mind and body. Self-care is also deeply personal. It’s specific to what each of us needs and what fits into our routines: a morning walk in the fresh air, a warm bath after a long day, a deep breath before a meeting. There’s no right or wrong way to do self-care.<br/><br/>
                    But how do we practice self-care regularly when life gets in the way? Maybe we’re too busy, too exhausted, too focused on others to quite literally give ourselves a break. As it turns out, when there’s more going on in our life, that’s when we need our self-care practices the most.<br/><br/>
                    It’s not just during tough times that self-care can benefit us, either. An established practice can help us enjoy the good times to their fullest potential or help us relieve stress. So let’s take a look at how to create a self-care plan that actually sticks. We’ll use mindfulness to help us identify what we can do to feel our best, no matter what life throws our way.
                    <br/><br/>
                    It’s not just during tough times that self-care can benefit us, either. An established practice can help us enjoy the good times to their fullest potential or help us relieve stress. So let’s take a look at how to create a self-care plan that actually sticks. We’ll use mindfulness to help us identify what we can do to feel our best, no matter what life throws our way.
                    <br/><br/>
                    So let’s take a look at how to create a self-care plan that actually sticks. We’ll use mindfulness to help us identify what we can do to feel our best, no matter what life throws our way.
                    <br/>
                    What is self-care really about? It’s simply the time we take to look after our mind and body. Self-care is also deeply personal. It’s specific to what each of us needs and what fits into our routines: a morning walk in the fresh air, a warm bath after a long day, a deep breath before a meeting. There’s no right or wrong way to do self-care.<br/><br/>
                    But how do we practice self-care regularly when life gets in the way? Maybe we’re too busy, too exhausted, too focused on others to quite literally give ourselves a break. As it turns out, when there’s more going on in our life, that’s when we need our self-care practices the most.<br/><br/>
                    It’s not just during tough times that self-care can benefit us, either. An established practice can help us enjoy the good times to their fullest potential or help us relieve stress. So let’s take a look at how to create a self-care plan that actually sticks. We’ll use mindfulness to help us identify what we can do to feel our best, no matter what life throws our way.
                    <br/><br/>
                    It’s not just during tough times that self-care can benefit us, either. An established practice can help us enjoy the good times to their fullest potential or help us relieve stress. So let’s take a look at how to create a self-care plan that actually sticks. We’ll use mindfulness to help us identify what we can do to feel our best, no matter what life throws our way.
                    <br/><br/>
                    So let’s take a look at how to create a self-care plan that actually sticks. We’ll use mindfulness to help us identify what we can do to feel our best, no matter what life throws our way.
                    <br/>
                    </p>
                </div>
                <div className='like-save-buttons'>
                    <p className='like'>LIKE</p>
                    <p className='star'>STAR</p>
                </div>
                <div className='related-posts'>
                    <p>Related Posts</p>
                    <div className='related'>
                        <div className='related-temp'>
                            <p className='titles'> How to overcome obesity in 2 months  </p>
                            <div className='metadata'>
                                <p className='date'> April, 2022 </p>
                            </div>
                        </div>
                        <div className='related-temp'>
                            <p className='titles'> How to overcome obesity in 2 months  </p>
                            <div className='metadata'>
                                <p className='date'> April, 2022 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='right'>
          <div className='content'>
          <p className='head'> Popular Posts </p>
          <div className='temp'>
            <p className='titles'> How to overcome obesity in 2 months  </p>
            <div className='metadata'>
              <p className='date'> April, 2022 </p>
              <p className='tag'> health </p>
            </div>
          </div>
          <div className='temp'>
            <p className='titles'> How to overcome obesity in 2 months  </p>
            <div className='metadata'>
              <p className='date'> April, 2022 </p>
              <p className='tag'> health </p>
            </div>
          </div>
          <div className='temp'>
            <p className='titles'> How to overcome obesity in 2 months  </p>
            <div className='metadata'>
              <p className='date'> April, 2022 </p>
              <p className='tag'> health </p>
            </div>
          </div>
          <div className='temp'>
            <p className='titles'> How to overcome obesity in 2 months  </p>
            <div className='metadata'>
              <p className='date'> April, 2022 </p>
              <p className='tag'> health </p>
            </div>
          </div>
          <div className='temp'>
            <p className='titles'> How to overcome obesity in 2 months  </p>
            <div className='metadata'>
              <p className='date'> April, 2022 </p>
              <p className='tag'> health </p>
            </div>
          </div>
          <div className='temp'>
            <p className='titles'> How to overcome obesity in 2 months  </p>
            <div className='metadata'>
              <p className='date'> April, 2022 </p>
              <p className='tag'> health </p>
            </div>
          </div>
        </div>
        </div>
      </>
  )
}

export default SelectedBlog