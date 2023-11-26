export default function SideBar(option,setOption) {
    const sidebarData = [['Scatter Plot','/scatter'],
                        ['Line Graph','/line'],
                        ['Bar Graph','/bar'],
                        ['Stacked Bar Graph','/stacked'],
                        ['Grouped Stacked Bar Graph','/grouped']];
    return(
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {
                    sidebarData.map( (item,idx) => 
                    <li 
                        id = {option===idx?'active':''}
                        className='row' 
                        key={idx}
                        onClick={() => {
                            setOption(idx);
                            }}>
                        {item[0]}
                    </li>
                    )
                }
            </ul>
        </div>
    );
}