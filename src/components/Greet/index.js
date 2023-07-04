// import {Component} from 'react'


// class Greet extends Component{
//     state={branch:"CST"}
//      render(){
//         const {myName} = this.props
//         const {branch} = this.state
//         return(
//             <div>
//                 {myName}
//                 {branch}
//             </div>
//         )
//     }
// }
// export default Greet

import {useState} from 'react'


const Greet = (props)=>{
    const [branch,setBranch] = useState("CST")
    const {myName} = props
    return(
        <div>
            <h1>{myName}</h1>
            {branch}
        </div>
    )
}

export default Greet