import React from 'react'

function Footer() {
    return (
        <div className="bg-gray-900">
            
    <footer className="flex flex-wrap border-t-2 border-gray-700  items-center justify-between py-3 m-auto">
        <div className="container mx-auto flex flex-col p-4 flex-wrap items-center justify-between">
           <a className="border-4  border-red-800 p-3" href="https://drive.google.com/file/d/1ifq2sc5VVPpUB54ITxI0Hzbog6AbgUUm/view?usp=sharing"> Get My Resume </a>
            <div class="flex py-4 mx-auto text-white text-center">
                Built by Houdini © { new Date().getFullYear()}
            </div>
        </div>
    </footer>
</div>
    )
}

export default Footer
