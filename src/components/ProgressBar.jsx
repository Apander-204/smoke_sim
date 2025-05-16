function Progressbar({smokeProgress}) {
    return(
        <div>
            <div className="w-[427px] h-[37px] bg-[#F59E0B] mt-[50px] rounded-[50px]">
                <div className="h-full bg-green-500 transition-all duration-100 rounded-[50px]"
                style={{ width: `${smokeProgress}%` }}></div>
            </div>
        </div>
    );
}

export default Progressbar;