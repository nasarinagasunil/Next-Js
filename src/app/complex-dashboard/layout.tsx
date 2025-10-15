
export default function ComplexDashboardLayout({children, users, revenue, notifications}: 
    {children: React.ReactNode, 
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode
    }) {
    return (
        <>
            <div>
                {children}
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
                <div style={{display: 'flex', flexDirection:'column', gap: '1rem'}}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div style={{display: 'flex'}}>{notifications}</div>
            </div>
            <p>Complex Dashboard Layout</p>
        </>
    )
}