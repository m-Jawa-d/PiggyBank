import './input.css'

function InputComp() {
    return (
        <>
            <div className="inputComp_Main_container">
                <div className="inputComp_Main">
                    <div className="withdraw_Class">
                        <h5>Rewards: 0.0000 BNB</h5>
                        <button className="btn ">WithDraw</button>
                    </div>
                    <hr />
                    <div className="inpo_Main">
                        <div className="upperBtnPair">
                            <button className="btn btn-primary">STAKE</button>
                            <button className="btn btn-info">UNSTAKE</button>
                        </div>
                        <div className="input_div">
                            <input type="text" name="" id="" />
                        </div>
                        <div className="upperBtnPair">
                            <button className="btn btnclor">STAKE</button>
                            <button className="btn btnclor">UNSTAKE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputComp
