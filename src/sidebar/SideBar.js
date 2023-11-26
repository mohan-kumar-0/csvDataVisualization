export default function SideBar() {
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
                        id = {window.location.pathname === item[1]?'active':''}
                        className='row' 
                        key={item[1]}
                        onClick={() => {
                            window.location.pathname = item[1];
                            }}>
                        {item[0]}
                    </li>
                    )
                }
            </ul>
        </div>
    );
}