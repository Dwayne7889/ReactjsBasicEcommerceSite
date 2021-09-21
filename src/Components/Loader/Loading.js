import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
        <div align='center' class="pt-5 mt-5">
        <h3 class="text-center text-primary mt-3 p-4">Please Wait...</h3>
     
            <Loader
                type="Puff"
                color="rgb(0, 153, 255)"
                height={300}
                width={300}
                timeout={3000} //3 secs
            />
          </div>
    )
}

export default Loading