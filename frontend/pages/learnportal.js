import React from 'react'
import VideoChat from '../components/VideoChat'

export default function learnportal() {
    return (
        <div>
           <header>
        <h1>Video Chat with Hooks</h1>
      </header>
      <main>
                <p>VideoChat goes here.</p>
                <VideoChat />
      </main>
      <footer>
        <p>
          Made with{' '}
          <span role="img" aria-label="React">
            ⚛
          </span>{' '}
          by <a href="https://twitter.com/philnash">philnash</a>
        </p>
      </footer>
    </div>
        
    )
}
