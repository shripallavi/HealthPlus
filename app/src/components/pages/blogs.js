import React from 'react'
import Card from '../card.js'
import SelectedBlog from './selectedblog'
import './blogs.css'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <>
    <div className='page'>
      <div className='filter'>
        <div className='values'>
          Filter<br/><br/>

          <input type="checkbox" value="Fitness" name="fitness" id="fitness"/>
          <label for="fitness">Fitness</label><br/>
          <input type="checkbox" value="Fitness" name="fitness" id="fitne"/>
          <label for="fitness">Health</label><br/>
          <input type="checkbox" value="Fitness" name="fitness" id="fit"/>
          <label for="fitness">Skin Care</label><br/>
          <input type="checkbox" value="Fitness" name="fitness" id="fitnes"/>
          <label for="fitness">Mental Health</label><br/>
          <input type="checkbox" value="Fitness" name="fitness" id="fi"/>
          <label for="fitness">Hair Care</label><br/><br/><br/>

          <input type="checkbox" value="Fitness" name="fitness" id="fitness"/>
          <label for="fitness">Tips</label><br/>
          <input type="checkbox" value="Fitness" name="fitness" id="fitne"/>
          <label for="fitness">Remedies</label><br/>
          <input type="checkbox" value="Fitness" name="fitness" id="fit"/>
          <label for="fitness">Blogs</label><br/>
          <input type="checkbox" value="Fitness" name="fitness" id="fit"/>
          <label for="fitness">Articles</label><br/><br/><br/>

          <input type="checkbox" value="Fitness" name="fitness" id="fitness"/>
          <label for="fitness">Ayurveda</label><br/>
          <input type="checkbox" value="Fitness" name="fitness" id="fitne"/>
          <label for="fitness">Homeopathy</label><br/>
        </div>
        
      </div>
      <div className='left'>
        <div className='posts'>
            
            <Link to="/blogs/one"   style={{ textDecoration: 'none' }}>
              <div className='blog-post'>
                  <div className='thumbnail'>
                    <div className='blog-tag'><p>health</p></div>
                  </div>
                  <div className='blog-description'>
                      <p className="blog-title">How to overcome obesity in 2 months</p>
                      <p className="blog-date">April, 2022</p>
                  </div>
              </div>
            </Link>
            
            <div className='blog-post'>
                <div className='thumbnail'>
                  <div className='blog-tag'><p>health</p></div>
                </div>
                <div className='blog-description'>
                    <p className="blog-title">How to overcome obesity in 2 months</p>
                    <p className="blog-date">April, 2022</p>
                </div>
            </div>
            <div className='blog-post'>
                <div className='thumbnail'>
                  <div className='blog-tag'><p>health</p></div>
                </div>
                <div className='blog-description'>
                    <p className="blog-title">How to overcome obesity in 2 months</p>
                    <p className="blog-date">April, 2022</p>
                </div>
            </div>
            <div className='blog-post'>
                <div className='thumbnail'>
                  <div className='blog-tag'><p>health</p></div>
                </div>
                <div className='blog-description'>
                    <p className="blog-title">How to overcome obesity in 2 months</p>
                    <p className="blog-date">April, 2022</p>
                </div>
            </div>
            <div className='blog-post'>
                <div className='thumbnail'>
                  <div className='blog-tag'><p>health</p></div>
                </div>
                <div className='blog-description'>
                    <p className="blog-title">How to overcome obesity in 2 months</p>
                    <p className="blog-date">April, 2022</p>
                </div>
            </div>
            <div className='blog-post'>
                <div className='thumbnail'>
                  <div className='blog-tag'><p>health</p></div>
                </div>
                <div className='blog-description'>
                    <p className="blog-title">How to overcome obesity in 2 months</p>
                    <p className="blog-date">April, 2022</p>
                </div>
            </div>
            <div className='blog-post'>
                <div className='thumbnail'>
                  <div className='blog-tag'><p>health</p></div>
                </div>
                <div className='blog-description'>
                    <p className="blog-title">How to overcome obesity in 2 months</p>
                    <p className="blog-date">April, 2022</p>
                </div>
            </div>
            <div className='blog-post'>
                <div className='thumbnail'>
                  <div className='blog-tag'><p>health</p></div>
                </div>
                <div className='blog-description'>
                    <p className="blog-title">How to overcome obesity in 2 months</p>
                    <p className="blog-date">April, 2022</p>
                </div>
            </div>
        </div>
      </div>

      <div className='right'>
        <div className='content'>
          <p className='head'> Popular Posts </p>
          <Link to="/blogs/one"   style={{ textDecoration: 'none' }}>
            <div className='temp'>
              <p className='titles'> How to overcome obesity in 2 months  </p>
              <div className='metadata'>
                <p className='date'> April, 2022 </p>
                <p className='tag'> health </p>
              </div>
            </div>
          </Link>

          <Link to="/blogs/one"   style={{ textDecoration: 'none' }}>
            <div className='temp'>
              <p className='titles'> How to overcome obesity in 2 months  </p>
              <div className='metadata'>
                <p className='date'> April, 2022 </p>
                <p className='tag'> health </p>
              </div>
            </div>
          </Link>

          <Link to="/blogs/one"   style={{ textDecoration: 'none' }}>
            <div className='temp'>
              <p className='titles'> How to overcome obesity in 2 months  </p>
              <div className='metadata'>
                <p className='date'> April, 2022 </p>
                <p className='tag'> health </p>
              </div>
            </div>
          </Link>

          <Link to="/blogs/one"   style={{ textDecoration: 'none' }}>
            <div className='temp'>
              <p className='titles'> How to overcome obesity in 2 months  </p>
              <div className='metadata'>
                <p className='date'> April, 2022 </p>
                <p className='tag'> health </p>
              </div>
            </div>
          </Link>

          <Link to="/blogs/one"   style={{ textDecoration: 'none' }}>
            <div className='temp'>
              <p className='titles'> How to overcome obesity in 2 months  </p>
              <div className='metadata'>
                <p className='date'> April, 2022 </p>
                <p className='tag'> health </p>
              </div>
            </div>
          </Link>

          <Link to="/blogs/one"   style={{ textDecoration: 'none' }}>
            <div className='temp'>
              <p className='titles'> How to overcome obesity in 2 months  </p>
              <div className='metadata'>
                <p className='date'> April, 2022 </p>
                <p className='tag'> health </p>
              </div>
            </div>
          </Link>

          <Link to="/blogs/one"   style={{ textDecoration: 'none' }}>
            <div className='temp'>
              <p className='titles'> How to overcome obesity in 2 months  </p>
              <div className='metadata'>
                <p className='date'> April, 2022 </p>
                <p className='tag'> health </p>
              </div>
            </div>
          </Link>

          <Link to="/blogs/one"   style={{ textDecoration: 'none' }}>
            <div className='temp'>
              <p className='titles'> How to overcome obesity in 2 months  </p>
              <div className='metadata'>
                <p className='date'> April, 2022 </p>
                <p className='tag'> health </p>
              </div>
            </div>
          </Link>

          <Link to="/blogs/one"   style={{ textDecoration: 'none' }}>
            <div className='temp'>
              <p className='titles'> How to overcome obesity in 2 months  </p>
              <div className='metadata'>
                <p className='date'> April, 2022 </p>
                <p className='tag'> health </p>
              </div>
            </div>
          </Link>

          <Link to="/blogs/one"   style={{ textDecoration: 'none' }}>
            <div className='temp'>
              <p className='titles'> How to overcome obesity in 2 months  </p>
              <div className='metadata'>
                <p className='date'> April, 2022 </p>
                <p className='tag'> health </p>
              </div>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Blogs