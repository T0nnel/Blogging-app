import React from 'react'
import BlogWrite from './BlogWrite';
import BlogDisplay from './BlogDisplay.js';

function BlogPages() {
    return(
        <div class="header1">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/login">Login</a></li> 
            </ul>
            <div className='storage'>
                <img src="./images/b.png" alt="image" />
                <div>
                <h1>Get to see Whats in the world</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, autem earum saepe iste maxime ipsa libero vitae odit commodi voluptas quis fugit.</p>
                </div>
            </div>
            <div className='storage'>
                <img src="./images/bg1.png" alt="image" />
                <div>
                <h1>Get to see Whats in the world</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, autem earum saepe iste maxime ipsa libero vitae odit commodi voluptas quis fugit</p>
                </div>
            </div>
            <div className='storage'>
                <img src="./images/bg2.png" alt="image" />
                <div>
                <h1>Get to see Whats in the world</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, autem earum saepe iste maxime ipsa libero vitae odit commodi voluptas quis fugit</p>
                </div>
            </div>
        </div> 
    )
}
export default BlogPages