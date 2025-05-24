import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className="bg-red-600 text-white">
        <div className="flex items-center justify-between p-4">
            <div className="font-bold text-2xl">
                <p>My Logo</p>
            </div>
            <div>
                <ul className="space-x-6">
                    <Link to="/">Page 1</Link>
                    <Link to="/page2">Page 2</Link>
                    <Link to="/page3">Page 3</Link>
                    <Link to="/page4">Page 4</Link>
                    <Link to="/page5">Page 5</Link>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Nav