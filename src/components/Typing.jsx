import QuotesData from "./QuotesData";
import ResultDetails from "./ResultDetails";


const Typing = () =>{


    return (
        <div className="wrapper" >
            <div className="content-box">
                <div className="typing-text">
                    <p></p>
                </div>
                <div className="content"> 
                    <ResultDetails />
                    <QuotesData />
                </div>
            </div>
        </div>
    )
}

export default Typing;