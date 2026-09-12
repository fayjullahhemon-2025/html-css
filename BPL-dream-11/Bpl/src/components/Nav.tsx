import Logo from '../assets/logo.png'
interface NavPropTypes{
    coin:number;
}
export default function Nav({coin}:NavPropTypes){
    return(
        <nav className="flex justify-around items-center">
            <img className="w-14  " src={Logo} alt="" />
            <div className="flex justify-between">
                <ul className="flex justify-around gap-10 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <div className="flex justify-around gap-2 ml-10">
                    <h3>{coin} Coin</h3>💲
                </div>
            </div>
        </nav>
    )
}