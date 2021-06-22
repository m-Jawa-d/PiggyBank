import "./sidebar.css"

function Sidebar() {
    return (
        <>
            <div className="sidebar_Main">
                <h2><span className="piggy"> PIGGY </span>BANK</h2>
               <div className="sidebar_inner">
               <a href="http://">  <i class="fas fa-home"></i>
                    <p>Stake$ Money</p></a> 
                </div>
                <div className="sidebar_last_div">
                    <hr className="hrColor" />
                    <div className="lastDiv_1">
                        <a href="http://"><i class="fab fa-telegram-plane"></i>
                            <p>Telegram</p></a>
                    </div>
                    <div className="lastDiv_1">
                    <a href="http://"> <i class="fab fa-twitter"></i>
                        <p>Twitter</p></a>
                    </div>
                    <hr className="hrColor" />
                </div>
            </div>
        </>
    )
}

export default Sidebar
{/* <i class="fab fa-twitter"></i> */ }
{/* <i class="fab fa-telegram-plane"></i> */ }